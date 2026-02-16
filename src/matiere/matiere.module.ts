import { Module } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { MatiereController } from './matiere.controller';
import { Matiere } from './entities/matiere.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Matiere])],
  controllers: [MatiereController],
  providers: [MatiereService],
})
export class MatiereModule {}
