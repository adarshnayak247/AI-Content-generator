import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  FormData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  templateslug:varchar("templateSlug").notNull(),
  createdBy: varchar("createdBy"),
  createdAt: varchar("createdAt"),
});
