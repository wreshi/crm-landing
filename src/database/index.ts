import * as schema from "./schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const databaseUrl: string = process.env.DATABASE_URL!;
const sql = neon(databaseUrl);

// Initialize the database with the appropriate drizzle function and schema
export const db = drizzle({
  client: sql as any,
  schema,
});
