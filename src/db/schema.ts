import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }),
  name: varchar('name', { length: 255 }),
  education: varchar('education', { length: 255 }),
  university: varchar('university', { length: 255 }),
  field: varchar('field', { length: 255 }),
  linkedin: varchar('linkedin', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
