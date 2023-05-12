import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pledge } from './pledge.entity';
import { PledgeController } from './pledge.controller';
import { PledgeService } from './pledge.service';

@Module({
  controllers: [PledgeController],
  imports: [TypeOrmModule.forFeature([Pledge])],
  providers: [PledgeService],
})
export class PledgeModule {}
