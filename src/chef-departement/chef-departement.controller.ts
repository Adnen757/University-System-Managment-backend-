import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChefDepartementService } from './chef-departement.service';
import { CreateChefDepartementDto } from './dto/create-chef-departement.dto';
import { UpdateChefDepartementDto } from './dto/update-chef-departement.dto';

@Controller('chef-departement')
export class ChefDepartementController {
  constructor(private readonly chefDepartementService: ChefDepartementService) {}

  @Post()
  create(@Body() createChefDepartementDto: CreateChefDepartementDto) {
    return this.chefDepartementService.create(createChefDepartementDto);
  }

  @Get()
  findAll() {
    return this.chefDepartementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chefDepartementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChefDepartementDto: UpdateChefDepartementDto) {
    return this.chefDepartementService.update(+id, updateChefDepartementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chefDepartementService.remove(+id);
  }
}
