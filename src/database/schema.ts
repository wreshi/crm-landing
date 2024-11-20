import {
  pgTable,
  text,
  integer,
  timestamp,
  boolean,
  varchar,
  jsonb,
  pgSchema,
} from "drizzle-orm/pg-core";

const waitingListSchema = pgSchema("waiting_list");

export const submissionsTable = waitingListSchema.table("submissions", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  ipAddress: text("ip_address"),
  country: text("country"),
  city: text("city"),
  region: text("region"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});
