import { Func } from '../abi/abi.support';
import { abis } from '../abi';

type Fn = {
  name: string;
  decode: (input: string) => any;
  inputs?: any[];
  fragment?: any;
};

const selectorMap: Record<string, Fn> = {};
const methodCache: Record<string, string> = {};

// === Register ABI functions ===
function registerFunctions(funcs: Record<string, any>) {
  for (const [name, fn] of Object.entries(funcs)) {
    if (fn instanceof Func) {
      selectorMap[fn.sighash.toLowerCase()] = {
        name,
        decode: fn.decode.bind(fn),
        inputs: (fn as any).fragment?.inputs ?? [],
        fragment: (fn as any).fragment ?? undefined,
      };
    }
  }
}

// Load all ABIs
for (const abi of abis as any[]) {
  if (abi.functions) registerFunctions(abi.functions);
}

// === Helper: normalize value
export function normalizeValue(val: any): any {
  if (val == null) return null;
  if (typeof val === 'bigint') return val.toString();
  if (Array.isArray(val)) return val.map((v) => normalizeValue(v));

  if (typeof val === 'object') {
    const keys = Object.keys(val);
    const namedKeys = keys.filter((k) => isNaN(Number(k)));
    if (namedKeys.length > 0) {
      const out: Record<string, any> = {};
      for (const k of namedKeys) out[k] = normalizeValue((val as any)[k]);
      return out;
    }

    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(val)) out[k] = normalizeValue(v);
    return out;
  }

  return typeof val === 'string' ? val : String(val);
}

// === Decode method name only
export function decodeMethodName(input: string): string | null {
  if (!input || input === '0x') return null;
  const selector = input.slice(0, 10).toLowerCase();
  if (methodCache[selector]) return methodCache[selector];

  const fn = selectorMap[selector];
  if (fn) {
    try {
      fn.decode(input);
      methodCache[selector] = fn.name;
      return fn.name;
    } catch {
      methodCache[selector] = selector;
      return selector;
    }
  }
  methodCache[selector] = selector;
  return selector;
}

export type DecodedInput = {
  method_call: string | null;
  method_id: string | null;
  parameters: Array<{ name: string; type: string; value: any }>;
};

// === Decode full input into structured object
export function buildDecodedInput(input: string): DecodedInput | null {
  if (!input || input === '0x') {
    return { method_call: null, method_id: null, parameters: [] };
  }

  const selector = input.slice(0, 10).toLowerCase();
  const fn = selectorMap[selector];
  if (!fn) return null;

  try {
    const decoded = fn.decode(input);
    const fragment = fn.fragment;
    const paramsMeta = fragment?.inputs ?? fn.inputs ?? [];

    const parameters = paramsMeta.map((param: any, idx: number) => ({
      name: param.name || `arg${idx}`,
      type: param.type,
      value: normalizeValue(decoded[idx]),
    }));

    const methodCall =
      fragment && fragment.name
        ? `${fragment.name}(${paramsMeta.map((p: any) => p.type).join(',')})`
        : fn.name;

    return {
      method_call: methodCall ?? fn.name ?? null,
      method_id: selector.slice(2),
      parameters,
    };
  } catch {
    return null;
  }
}
