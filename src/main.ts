import 'dotenv/config';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { processor } from './processor';
import { handleBlock } from './handlers/block.handler'; // Ubah import

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  for (const block of ctx.blocks) {
    await handleBlock(ctx, block);
  }
});
