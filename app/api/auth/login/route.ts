import { NextResponse } from "next/server";

const API_URL = process.env.BACKEND_URL || "http://localhost:5000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch(`http://localhost:3003/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
