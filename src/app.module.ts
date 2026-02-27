import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DepartementModule } from './departement/departement.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { ChefDepartementModule } from './chef-departement/chef-departement.module';
import { AnnonceModule } from './annonce/annonce.module';
import { SalleModule } from './salle/salle.module';
import { SeanceModule } from './seance/seance.module';
import { AnneeUniversitaireModule } from './annee-universitaire/annee-universitaire.module';
import { SemestreModule } from './semestre/semestre.module';
<<<<<<< HEAD
import { PresenceModule } from './presence/presence.module';
import { JustificatifAbsenceModule } from './justificatif-absence/justificatif-absence.module';
import { MatiereModule } from './matiere/matiere.module';
import { NoteModule } from './note/note.module';
import { RessourcPedagogiquesModule } from './ressourc-pedagogiques/ressourc-pedagogiques.module';
import { MessageModule } from './message/message.module';
import { AdministrateurModule } from './administrateur/administrateur.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer/dist/mailer.module';
=======
import { EvaluationModule } from './evaluation/evaluation.module';
import { NotificationModule } from './notification/notification.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
>>>>>>> hamed/feature-auth-hamed

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    //database:"projet1",
    autoLoadEntities: true,
    entities: [__dirname + "/**/*.entity{.ts,.js}"


<<<<<<< HEAD


  }),
  MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use TLS
        tls: {
  rejectUnauthorized: false
},
        auth: {
          user: "adnenhajlaoui2@gmail.com",
          pass: "xsyq ehaw vysq ogxj",
        },
      },
      defaults: {
        from: process.env.MAIL_FROM,
      },
    }),
  
  ConfigModule.forRoot({isGlobal:true}), UserModule, DepartementModule, EtudiantModule, ProfesseurModule, ChefDepartementModule, AnnonceModule, SalleModule, SeanceModule, AnneeUniversitaireModule, SemestreModule, PresenceModule, JustificatifAbsenceModule, MatiereModule, NoteModule, RessourcPedagogiquesModule, MessageModule, AdministrateurModule, AuthModule],
=======
    ],
    synchronize: true,



  }), MailerModule.forRoot({
    transport: {
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      tls: {
        rejectUnauthorized: false
      },
      auth: {
        user: "hamedblg29@gmail.com",
        pass: "fwan skfx vfhm gswd",
      },
    },
    // defaults: {
    //   from:"Hamed  <hamedblg29@gmail.com>",
    // },
  }), ConfigModule.forRoot({ isGlobal: true }), UserModule, DepartementModule, EtudiantModule, ProfesseurModule, ChefDepartementModule, AnnonceModule, SalleModule, SeanceModule, AnneeUniversitaireModule, SemestreModule, EvaluationModule, NotificationModule, AuthModule],
>>>>>>> hamed/feature-auth-hamed
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
