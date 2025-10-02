// app/api/lead/route.ts
import { LeadFormData } from "@/entities/lab-registration/lead";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: LeadFormData = await req.json();

    const strapiRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: body }),
    });

    const data = await strapiRes.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
