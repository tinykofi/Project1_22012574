import pool from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const res = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (res.rows.length === 0) {
      return new Response("User not found", { status: 404 });
    }

    const user = res.rows[0];
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return new Response("Invalid password", { status: 401 });
    }

    return new Response("Login successful", { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return new Response("Internal error", { status: 500 });
  }
}
