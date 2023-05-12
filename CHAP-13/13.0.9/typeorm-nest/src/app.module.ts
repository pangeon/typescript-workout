import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PledgeModule } from './pledge/pledge.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pledge } from './pledge/pledge.entity';

@Module({
  imports: [
    PledgeModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [Pledge],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
