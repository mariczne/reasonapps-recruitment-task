import { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { randFirstName, randLastName, randEmail, randPastDate, seed } from "@ngneat/falso";
import { Patient } from "../../src/patients/patient.entity";

export class DatabaseSeeder extends Seeder {
  static SEED_VALUE = "don't you ever change <3";

  async run(em: EntityManager): Promise<void> {
    seed(DatabaseSeeder.SEED_VALUE);

    const patients = [...Array(100).keys()].map(() => {
      const firstName = randFirstName({ withAccents: false });
      const lastName = randLastName({ withAccents: false });

      return new Patient({
        firstName,
        lastName,
        email: randEmail({ firstName, lastName }),
        dateOfBirth: randPastDate({ years: 100 }),
      });
    });

    em.persistAndFlush(patients);
  }
}
