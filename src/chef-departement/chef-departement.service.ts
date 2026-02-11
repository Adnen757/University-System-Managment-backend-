import { Injectable } from '@nestjs/common';
import { CreateChefDepartementDto } from './dto/create-chef-departement.dto';
import { UpdateChefDepartementDto } from './dto/update-chef-departement.dto';

@Injectable()
export class ChefDepartementService {
  create(createChefDepartementDto: CreateChefDepartementDto) {
    return 'This action adds a new chefDepartement';
  }

  findAll() {
    return `This action returns all chefDepartement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chefDepartement`;
  }

  update(id: number, updateChefDepartementDto: UpdateChefDepartementDto) {
    return `This action updates a #${id} chefDepartement`;
  }

  remove(id: number) {
    return `This action removes a #${id} chefDepartement`;
  }
}
