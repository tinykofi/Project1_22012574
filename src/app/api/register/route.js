// src/app/api/register/route.js
import pool from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, hashedPassword]
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
