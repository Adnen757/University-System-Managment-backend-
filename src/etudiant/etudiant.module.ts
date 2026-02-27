import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { Etudiant } from './entities/etudiant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presence } from 'src/presence/entities/presence.entity';

@Module({
     imports:[TypeOrmModule.forFeature([Etudiant,Presence])],
  
  controllers: [EtudiantController],
  providers: [EtudiantService],
})
export class EtudiantModule {}
