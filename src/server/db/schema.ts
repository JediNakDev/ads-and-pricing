import { text, integer, pgTableCreator } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ads-and-pricing_${name}`);

export const pricing = createTable("pricing", {
  name: text("name").primaryKey(),
  iPhone15ProMax: integer("iPhone15ProMax").notNull(),
  iPhone15Pro: integer("iPhone15Pro").notNull(),
  iPhone15Plus: integer("iPhone15Plus").notNull(),
  iPhone15: integer("iPhone15").notNull(),
});
