import { NextResponse } from "next/server";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3003/api/user";

export async function POST(request: Request) {
  const body = await request.json();
  // const res = await fetch(`${API_URL}/signin`, {
  const res = await fetch(`http://localhost:3003/api/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ message: data.message }, { status: res.status });
  }

  return NextResponse.json(data);
}
