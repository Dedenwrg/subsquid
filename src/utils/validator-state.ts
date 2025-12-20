export type ValidatorState =
  | 'ACTIVE'
  | 'PAUSED'
  | 'JAILED'
  | 'JAILBOUND'
  | 'JAILED_FOR_INACTIVITY'
  | 'JAILBOUND_FOR_INACTIVITY'
  | 'COMMITTEE_CANDIDATE'
  | 'UNKNOWN';

export function mapValidatorState(
  rawState: bigint | number | string,
  nodeAddress: string,
  committeeSet: Set<string>,
): ValidatorState {
  const stateNum = Number(rawState);

  let baseState: ValidatorState;

  switch (stateNum) {
    case 0:
      baseState = 'ACTIVE';
      break;
    case 1:
      baseState = 'PAUSED';
      break;
    case 2:
      baseState = 'JAILED';
      break;
    case 3:
      baseState = 'JAILBOUND';
      break;
    case 4:
      baseState = 'JAILED_FOR_INACTIVITY';
      break;
    case 5:
      baseState = 'JAILBOUND_FOR_INACTIVITY';
      break;
    default:
      baseState = 'UNKNOWN';
  }

  // 🔥 LOGIC KHUSUS INDEXER LAMA
  if (baseState === 'ACTIVE' && !committeeSet.has(nodeAddress.toLowerCase())) {
    return 'COMMITTEE_CANDIDATE';
  }

  return baseState;
}
