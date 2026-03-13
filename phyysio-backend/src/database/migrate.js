import fs from 'fs';
import path from 'path';
import getPool from './database.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runMigrations() {
    let pool;
    try {
        const migrationsPath = path.join(__dirname, "../migrations");

        const files = fs.readdirSync(migrationsPath).sort();

        for (const file of files) {
            pool = await getPool();
            const result = await pool.query(
                "SELECT * FROM migrations WHERE filename = $1",
                [file]
            );

            if (result.rows.length === 0) {
                const sql = fs.readFileSync(
                    path.join(migrationsPath, file),
                    "utf8"
                );

                console.log(`Running migration: ${file}`);

                await pool.query(sql);

                await pool.query(
                    "INSERT INTO migrations(filename) VALUES($1)",
                    [file]
                );
            }
        }

        console.log("Migrations completed");
    } catch (error) {
        console.error('Error running migrations:', error);
    }finally{
        await pool.end();
        process.exit();
    }
}

runMigrations();