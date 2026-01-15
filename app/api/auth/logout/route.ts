import { NextResponse } from "next/server";
import { deleteSession } from "@/app/lib/auth";

export const POST = async () => {
  await deleteSession();

  return NextResponse.json({ success: true });
};
