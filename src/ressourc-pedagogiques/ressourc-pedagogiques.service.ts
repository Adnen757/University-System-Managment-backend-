import { Injectable } from '@nestjs/common';
import { CreateRessourcPedagogiqueDto } from './dto/create-ressourc-pedagogique.dto';
import { UpdateRessourcPedagogiqueDto } from './dto/update-ressourc-pedagogique.dto';

@Injectable()
export class RessourcPedagogiquesService {
  create(createRessourcPedagogiqueDto: CreateRessourcPedagogiqueDto) {
    return 'This action adds a new ressourcPedagogique';
  }

  findAll() {
    return `This action returns all ressourcPedagogiques`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ressourcPedagogique`;
  }

  update(id: number, updateRessourcPedagogiqueDto: UpdateRessourcPedagogiqueDto) {
    return `This action updates a #${id} ressourcPedagogique`;
  }

  remove(id: number) {
    return `This action removes a #${id} ressourcPedagogique`;
  }
}
