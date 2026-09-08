import express, { type Express, type Request, type Response } from "express";
import pool from "./db";
import imageRouter from "./image";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();
    res.status(200).send("Database connection is healthy");
  } catch (err) {
    console.error("Database connection error", err);
    res.status(500).send("Database connection error");
  }
});

app.use("/api/images", imageRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Apa Kabar Dunia ♀");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
