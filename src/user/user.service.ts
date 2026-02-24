import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository:Repository<User>
  ){

  }



  async create (createUserDto: CreateUserDto) :Promise<User> {
   const newuser =await this.userRepository.create(createUserDto)
   return this.userRepository.save(newuser)
  }

  async findAll() :Promise <User[]> {
const user=await this.userRepository.find()
if(user.length===0){
  throw new NotFoundException("data not found")
}
return user
  }




  async findOne(id: number) :Promise<User> {

const user =await this.userRepository.findOneBy({id})
if(!user){
  throw new NotFoundException("user not found")
}
return user
  }




  async update(id: number, updateUserDto: UpdateUserDto):Promise<User> {
    const user =await this.userRepository.findOneBy({id})
if(!user){
  throw new NotFoundException("user not found")
}
const updateuser= await this.userRepository.preload({...updateUserDto,id})
if(!updateuser){
  throw new NotFoundException(`can not update a #${id} user`)

}
return this.userRepository.save(updateuser)
  }

  
  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ email });
    if(!user){
      throw new NotFoundException('user not found')
    }
    return user
  }
  




  async remove(id: number) {
   const user =await this.userRepository.findOneBy({id})
if(!user){
  throw new NotFoundException("user not found")
 
}
 await this.userRepository.delete(id)
 return id
  }
}
