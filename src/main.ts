import 'dotenv/config';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { processor, ProcessorContext } from './processor';
import { handleBlock } from './handlers/block.handler';

processor.run(new TypeormDatabase(), async (ctx: ProcessorContext<any>) => {
  for (const block of ctx.blocks) {
    await handleBlock(ctx, block);
  }
});
