import { TokenTransfer, Token } from '../model'
import { erc20 } from '../abi'
import { BigDecimal } from '@subsquid/big-decimal'

export async function collectTokenTransfer(
  block: any,
  log: any,
  ctx: any,
  tokenCache: Map<string, Token | null>,
) {
  const { from, to, value } = erc20.events.Transfer.decode(log)

  const tokenAddress = log.address.toLowerCase()
  const txHash = log.transactionHash!

  // ---- token cache (performance critical) ----
  let token = tokenCache.get(tokenAddress)
  if (token === undefined) {
    token = await ctx.store.get(Token, tokenAddress)
    tokenCache.set(tokenAddress, token ?? null)
  }

  // ---- normalize amount ----
  let amount = BigDecimal(value.toString())

  if (token?.decimals != null) {
    amount = amount.div(BigDecimal(10).pow(token.decimals))
  }

  const ts = Number(block.header.timestamp)

  return new TokenTransfer({
    id: `${txHash}-${log.logIndex}`,

    // FK reference only (DO NOT new Transaction())
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
  })
}
