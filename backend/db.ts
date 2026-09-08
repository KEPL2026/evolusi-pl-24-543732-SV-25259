import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "porto123",
  database: process.env.DB_NAME || "postgres",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring database client", err.stack);
  }
  console.log("Successfully connected to PostgreSQL");
  release();
});

export default pool
