import { Module } from '@nestjs/common';
import { ChefDepartementService } from './chef-departement.service';
import { ChefDepartementController } from './chef-departement.controller';

@Module({
  controllers: [ChefDepartementController],
  providers: [ChefDepartementService],
})
export class ChefDepartementModule {}
