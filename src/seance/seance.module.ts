import { Module } from '@nestjs/common';
import { SeanceService } from './seance.service';
import { SeanceController } from './seance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seance } from './entities/seance.entity';
import { Salle } from 'src/salle/entities/salle.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Seance,Salle])],
  controllers: [SeanceController],
  providers: [SeanceService],
})
export class SeanceModule {}
