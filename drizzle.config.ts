import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/drizzle/db.schema.ts',
  out: './db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
