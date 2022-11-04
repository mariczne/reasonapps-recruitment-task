import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { PatientsModule } from "./patients/patients.module";

@Module({
  imports: [MikroOrmModule.forRoot(), PatientsModule],
})
export class AppModule {}
