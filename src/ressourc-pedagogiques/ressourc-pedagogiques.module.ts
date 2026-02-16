import { Module } from '@nestjs/common';
import { RessourcPedagogiquesService } from './ressourc-pedagogiques.service';
import { RessourcPedagogiquesController } from './ressourc-pedagogiques.controller';

@Module({
  controllers: [RessourcPedagogiquesController],
  providers: [RessourcPedagogiquesService],
})
export class RessourcPedagogiquesModule {}
