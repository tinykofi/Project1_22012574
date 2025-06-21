import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await pool.query("SELECT calculate_outstanding_fees();");
    const data = result.rows[0].calculate_outstanding_fees;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching fees:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
