import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { Patient } from "./patient.entity";
import { PatientsService } from "./patients.service";

@Module({
  providers: [PatientsService],
  imports: [MikroOrmModule.forFeature([Patient])],
})
export class PatientsModule {}
