import { defineConfig } from "@mikro-orm/sqlite";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

export default defineConfig({
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  dbName: "ra-task.sqlite3",
  type: "sqlite",
  metadataProvider: TsMorphMetadataProvider,
});
