import { NextResponse } from "next/server";
import { createSession } from "@/app/lib/auth";
import { findUserByEmail, verifyPassword } from "@/app/lib/users";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const user = findUserByEmail(email);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isValidPassword = await verifyPassword(password, user.passwordHash);

  if (!isValidPassword) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await createSession({
    id: user.id,
    email: user.email,
    name: user.name
  });

  return NextResponse.json({
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  });
};
