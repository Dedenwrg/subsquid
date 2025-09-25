const methodCache: Map<string, string[]> = new Map();
const topicCache: Map<string, string[]> = new Map();
const METHOD_TO_TYPE: Record<string, string[]> = {
  transfer: ['token_transfer'],
  transferFrom: ['token_transfer'],
  mint: ['token_creation'],
};

const TOPIC_TO_TYPE: Record<string, string[]> = {
  '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef': ['token_transfer'],
  '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925': ['contract_call'],
};

export function classifyTransaction(tx: any, methodName: string | null): string[] {
  const types: string[] = [];
  if (!tx.to) {
    types.push('contract_creation');
  }

  if (methodName) {
    if (methodCache.has(methodName)) {
      return methodCache.get(methodName)!;
    }

    if (!types.includes('contract_creation')) {
      types.push('contract_call');
    }

    const mapped = METHOD_TO_TYPE[methodName];
    if (mapped) {
      for (const t of mapped) {
        if (!types.includes(t)) types.push(t);
      }
    }

    methodCache.set(methodName, [...types]);
  }

  if (!methodName && tx.to && BigInt(tx.value || 0) > 0n) {
    types.push('coin_transfer');
  }

  if (Array.isArray(tx.logs)) {
    for (const log of tx.logs) {
      const topic0 = log.topics?.[0]?.toLowerCase();
      if (!topic0) continue;

      if (topicCache.has(topic0)) {
        for (const t of topicCache.get(topic0)!) {
          if (!types.includes(t)) types.push(t);
        }
      } else {
        const mapped = TOPIC_TO_TYPE[topic0] || [];
        for (const t of mapped) {
          if (!types.includes(t)) types.push(t);
        }
        topicCache.set(topic0, mapped);
      }
    }
  }

  return types.length > 0 ? types : ['coin_transfer'];
}
