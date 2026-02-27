import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
constructor(
   @InjectRepository (Note) private noteRepository:Repository<Note>
  ){

  }


 async create(createNoteDto: CreateNoteDto):Promise<Note> {

      const newNote =await this.noteRepository.create(createNoteDto)
   return this.noteRepository.save(newNote)
  }




async  findAll() :Promise<Note[]>{
       const note=await this.noteRepository.find()
                  if(note.length===0){
                    throw new NotFoundException("data not found")
                  }
                  return note
  }





 async findOne(id: number) :Promise<Note>{
    const note =await this.noteRepository.findOneBy({id})
if(!note){
  throw new NotFoundException("note not found")
}
return note
  }






 async update(id: number, updateNoteDto: UpdateNoteDto):Promise<Note> {
         const note =await this.noteRepository.findOneBy({id})
if(!note){
  throw new NotFoundException("note not found")
}
const updatenote= await this.noteRepository.preload({...updateNoteDto,id})
if(!updatenote){
  throw new NotFoundException(`can not update a #${id} note `)

}
return this.noteRepository.save(updatenote)
  }





async  remove(id: number) {
          const note =await this.noteRepository.findOneBy({id})
if(!note){
  throw new NotFoundException("note not found")
 
}
 await this.noteRepository.delete(id)
 return id
  }
}
