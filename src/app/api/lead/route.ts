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
      body: JSON.stringify({
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone,
        },
      }),
    });

    const data = await strapiRes.json();

    console.log("Response from Strapi:", data);

    if (!strapiRes.ok) {
      console.error("Strapi error:", data);

      let message =
        "Не удалось отправить данные. Пожалуйста, попробуйте позже.";

      if (data?.error?.name === "ValidationError") {
        const field = data?.error?.details?.errors?.[0]?.path?.[0];
        const errorMsg = data?.error?.details?.errors?.[0]?.message;

        if (field === "email" && errorMsg === "This attribute must be unique") {
          message = "Пользователь с таким email уже зарегистрирован.";
        }
      }

      return NextResponse.json({ success: false, message }, { status: 400 });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in lead API:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Не удалось отправить заявку. Попробуйте позже.",
      },
      { status: 500 }
    );
  }
}
