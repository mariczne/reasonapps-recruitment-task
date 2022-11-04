import { DateType, Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { EntityRepository } from "@mikro-orm/sqlite";

type PatientCtorParams = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
};

@Entity()
export class Patient {
  @PrimaryKey()
  id: number;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Unique()
  @Property()
  email: string;

  @Property({ type: DateType })
  dateOfBirth: Date;

  constructor({ firstName, lastName, email, dateOfBirth }: PatientCtorParams) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }
}

export type PatientsRepository = EntityRepository<Patient>;
