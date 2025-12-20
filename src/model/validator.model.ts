import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
  Index as Index_,
} from 'typeorm';

@Entity_({ name: 'validators' })
export class Validator {
  constructor(props?: Partial<Validator>) {
    Object.assign(this, props);
  }

  @PrimaryColumn_({ name: 'sqd_id', type: 'text' })
  id!: string;

  @Index_()
  @Column_({ name: 'node_address', type: 'text', nullable: false })
  nodeAddress!: string;

  @Column_('text', { name: 'treasury', nullable: true })
  treasury?: string;

  @Index_()
  @Column_('text', { name: 'oracle_address', nullable: true })
  oracleAddress?: string;

  @Column_('text', { name: 'enode', nullable: true })
  enode?: string;

  @Column_('text', { name: 'commission_rate', nullable: true })
  commissionRate?: string;

  @Column_('text', { name: 'bonded_stake', nullable: true })
  bondedStake?: string;

  @Column_('text', { name: 'unbonding_stake', nullable: true })
  unbondingStake?: string;

  @Column_('text', { name: 'unbonding_shares', nullable: true })
  unbondingShares?: string;

  @Column_('text', { name: 'self_bonded_stake', nullable: true })
  selfBondedStake?: string;

  @Column_('text', { name: 'self_unbonding_stake', nullable: true })
  selfUnbondingStake?: string;

  @Column_('text', { name: 'self_unbonding_shares', nullable: true })
  selfUnbondingShares?: string;

  @Column_('text', { name: 'self_unbonding_stake_locked', nullable: true })
  selfUnbondingStakeLocked?: string;

  @Column_('text', { name: 'liquid_state_contract', nullable: true })
  liquidStateContract?: string;

  @Column_('text', { name: 'liquid_supply', nullable: true })
  liquidSupply?: string;

  @Column_('text', { name: 'registration_block', nullable: true })
  registrationBlock?: string;

  @Column_('text', { name: 'total_slashed', nullable: true })
  totalSlashed?: string;

  @Column_('text', { name: 'jail_release_block', nullable: true })
  jailReleaseBlock?: string;

  @Column_('text', { name: 'consensus_key', nullable: true })
  consensusKey?: string;

  @Column_('text', { name: 'conversion_ratio', nullable: true })
  conversionRatio?: string;

  @Column_('text', { name: 'possible_slash', nullable: true })
  possibleSlash?: string;

  @Column_('text', { name: 'coverage_amount', nullable: true })
  coverageAmount?: string;

  @Column_('text', { name: 'coverage_percent', nullable: true })
  coveragePercent?: string;

  @Column_('boolean', { name: 'slash_coverage', nullable: true })
  slashCoverage?: boolean;

  @Column_('text', { name: 'state', nullable: true })
  state?: string;
}
