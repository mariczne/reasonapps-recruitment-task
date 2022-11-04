import { Controller, Get, Param } from "@nestjs/common";
import { PatientsService } from "./patients.service";

@Controller("patients")
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get(":id")
  findOneById(@Param("id") id: string) {
    return this.patientsService.findOneById(Number(id));
  }
}
