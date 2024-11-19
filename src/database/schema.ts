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
  id: text("id").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  ipAddress: text("ip_address").notNull(),
  country: text("country").notNull(),
  city: text("city").notNull(),
  region: text("region").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});
