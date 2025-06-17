import { cookies } from "next/headers";
import pool from "@/lib/db";

export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;

  if (!userId) {
    return new Response(JSON.stringify({ user: null }), {
      status: 401,
    });
  }

  const res = await pool.query(
    "SELECT id, name, email FROM users WHERE id = $1",
    [userId]
  );
  const user = res.rows[0];

  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
