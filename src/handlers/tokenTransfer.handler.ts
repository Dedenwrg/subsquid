import { TokenTransfer, Token } from '../model';
import { erc20 } from '../abi';
import { BigDecimal } from '@subsquid/big-decimal';

const ERC20_TRANSFER_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

export async function collectTokenTransfer(
  block: any,
  log: any,
  ctx: any,
  tokenCache: Map<string, Token | null>,
) {
  if (!log.topics?.length) return null;
  if (log.topics[0].toLowerCase() !== ERC20_TRANSFER_TOPIC) return null;

  const { from, to, value } = erc20.events.Transfer.decode(log);
  const tokenAddress = log.address.toLowerCase();
  const txHash = log.transactionHash!;

  let token = tokenCache.get(tokenAddress);
  if (token === undefined) {
    token = await ctx.store.get(Token, tokenAddress);
    tokenCache.set(tokenAddress, token ?? null);
  }

  let amount = BigDecimal(value.toString());

  if (token?.decimals != null) {
    amount = amount.div(BigDecimal(10).pow(token.decimals));
  }

  const ts = Number(block.header.timestamp);

  return new TokenTransfer({
    id: `${txHash}-${log.logIndex}`,
    transaction: { id: txHash } as any,
    transactionHash: txHash,

    token: token ?? null,
    tokenAddress,

    blockNumber: BigInt(block.header.height),
    timestamp: BigInt(ts),

    from: from.toLowerCase(),
    to: to.toLowerCase(),

    value: amount,

    logIndex: log.logIndex,
    createdAt: new Date(ts),
  });
}
