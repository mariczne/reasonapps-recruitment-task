import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { Patient } from "./patient.entity";
import { PatientsController } from "./patients.controller";
import { PatientsService } from "./patients.service";

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [MikroOrmModule.forFeature([Patient])],
})
export class PatientsModule {}
