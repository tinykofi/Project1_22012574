import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("user_id");

  return new Response("Logged out", { status: 200 });
}
