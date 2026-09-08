import { Router, type Request, type Response } from "express";
import pool from "../db";

const router = Router();

router.get("/recent-images", async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM "cdn-image" ORDER BY "createAt" DESC LIMIT 10',
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "No recent images found" });
    }

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching recent images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
