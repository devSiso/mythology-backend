import { Module } from '@nestjs/common';
import { DragonsService } from './dragons.service';
import { DragonsController } from './dragons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dragons } from './dragons.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dragons])],
  providers: [DragonsService],
  controllers: [DragonsController]
})
export class DragonsModule {}
