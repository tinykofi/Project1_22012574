// lib/currentUser.js
import { cookies } from "next/headers";
import pool from "@/lib/db";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;

  if (!userId) return null;

  const result = await pool.query(
    "SELECT name, email FROM users WHERE id = $1",
    [userId]
  );

  return result.rows[0] || null;
}
