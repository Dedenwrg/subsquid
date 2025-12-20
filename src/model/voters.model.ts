import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
  Index as Index_,
} from 'typeorm';

@Entity_({ name: 'oracle_voter' })
export class OracleVoter {
  constructor(props?: Partial<OracleVoter>) {
    Object.assign(this, props);
  }

  @PrimaryColumn_({ name: 'sqd_id', type: 'text' })
  id!: string;

  @Index_()
  @Column_('text', { name: 'voter', nullable: true })
  voter?: string;

  @Index_()
  @Column_('text', { name: 'round', nullable: false })
  round!: string;

  @Column_('text', { name: 'commit', nullable: false })
  commit!: string;

  @Column_('text', { name: 'performance', nullable: false })
  performance!: string;

  @Column_('text', { name: 'non_reveal_count', nullable: false })
  nonRevealCount!: string;

  @Column_('boolean', { name: 'is_voter', nullable: false })
  isVoter!: boolean;

  @Column_('boolean', { name: 'report_available', nullable: false })
  reportAvailable!: boolean;
}
