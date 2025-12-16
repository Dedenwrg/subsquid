export function calculateFees(block: any, tx: any) {
  const gasUsed = tx.gasUsed ? BigInt(tx.gasUsed) : null;
  const gasPriceLike = (tx as any).effectiveGasPrice ?? tx.gasPrice ?? null;
  const gasPriceBI = gasPriceLike != null ? BigInt(gasPriceLike) : null;
  const fee = gasUsed != null && gasPriceBI != null ? gasUsed * gasPriceBI : null;
  const baseFee = block.header.baseFeePerGas != null ? BigInt(block.header.baseFeePerGas) : null;
  const burnFee = baseFee != null && gasUsed != null ? gasUsed * baseFee : null;
  return { gasUsed, fee, burnFee };
}
