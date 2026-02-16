import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RessourcPedagogiquesService } from './ressourc-pedagogiques.service';
import { CreateRessourcPedagogiqueDto } from './dto/create-ressourc-pedagogique.dto';
import { UpdateRessourcPedagogiqueDto } from './dto/update-ressourc-pedagogique.dto';

@Controller('ressourc-pedagogiques')
export class RessourcPedagogiquesController {
  constructor(private readonly ressourcPedagogiquesService: RessourcPedagogiquesService) {}

  @Post()
  create(@Body() createRessourcPedagogiqueDto: CreateRessourcPedagogiqueDto) {
    return this.ressourcPedagogiquesService.create(createRessourcPedagogiqueDto);
  }

  @Get()
  findAll() {
    return this.ressourcPedagogiquesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ressourcPedagogiquesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRessourcPedagogiqueDto: UpdateRessourcPedagogiqueDto) {
    return this.ressourcPedagogiquesService.update(+id, updateRessourcPedagogiqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ressourcPedagogiquesService.remove(+id);
  }
}
