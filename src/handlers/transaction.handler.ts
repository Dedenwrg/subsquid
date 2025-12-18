import { Transaction as TransactionModel } from '../model';
import { decodeMethodName, buildDecodedInput } from '../utils/decoder';
import { classifyTransaction } from '../utils/tx-type';
import { calculateFees } from '../utils/fee';

export function collectTransaction(block: any, tx: any) {
  const isContractCall = !!tx.to;
  const methodName = isContractCall ? decodeMethodName(tx.input) : null;
  const decodedInput = isContractCall ? buildDecodedInput(tx.input) : null;
  const { gasUsed, fee, burnFee } = calculateFees(block, tx);

  return new TransactionModel({
    id: tx.hash,
    hash: tx.hash,
    blockNumber: BigInt(block.header.height),
    blockHash: block.header.hash,
    timestamp: BigInt(block.header.timestamp),
    from: tx.from,
    to: tx.to ?? null,
    value: BigInt(tx.value),
    valueCurrency: 'ATN',
    type: tx.type != null ? String(tx.type) : null,
    transactionTypes: classifyTransaction(tx, methodName),
    method: methodName,
    rawInput: tx.input ?? null,
    decodedInput,
    result: tx.status ? 'success' : 'failed',
    gas: tx.gas ? BigInt(tx.gas) : null,
    gasUsed,
    gasPrice: tx.gasPrice ? BigInt(tx.gasPrice) : null,
    maxFeePerGas: tx.maxFeePerGas ? BigInt(tx.maxFeePerGas) : null,
    maxPriorityFeePerGas: tx.maxPriorityFeePerGas ? BigInt(tx.maxPriorityFeePerGas) : null,
    effectiveGasPrice:
      (tx as any).effectiveGasPrice != null ? BigInt((tx as any).effectiveGasPrice) : null,
    fee,
    burnFee,
    nonce: BigInt(tx.nonce),
    cumulativeGasUsed: tx.cumulativeGasUsed ? BigInt(tx.cumulativeGasUsed) : null,
    contractAddress: tx.contractAddress ?? null,
    transactionIndex: tx.transactionIndex,
  });
}
