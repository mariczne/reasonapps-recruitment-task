import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { Patient, PatientsRepository } from "./patient.entity";

@Injectable()
export class PatientsService {
  constructor(@InjectRepository(Patient) private readonly patientsRepository: PatientsRepository) {}

  public findOneById(id: number) {
    return this.patientsRepository.findOneOrFail({ id });
  }
}
