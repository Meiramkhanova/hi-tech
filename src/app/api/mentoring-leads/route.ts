import { MentoringFormData } from "@/entities/mentoring-register/lead";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

function log(
  level: "info" | "error",
  message: string,
  meta: Record<string, unknown> = {}
) {
  const entry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...meta,
  };

  console[level === "error" ? "error" : "log"](JSON.stringify(entry));
}

export async function POST(req: Request) {
  const requestId = randomUUID();
  const startedAt = Date.now();
  try {
    const body: MentoringFormData = await req.json();

    log("info", "mentoring-leads:incoming", {
      requestId,
      method: "POST",
      endpoint: "/api/mentoring-leads",
      payload: {
        name: body?.name,
        email: body?.email,
        phone: body?.phone,
      },
    });

    const url = `${process.env.NEXT_PUBLIC_API_URL}/mentoring-leads`;
    const strapiRes = await fetch(url, {
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

    if (!strapiRes.ok) {
      let message =
        "Не удалось отправить данные. Пожалуйста, попробуйте позже.";

      if (data?.error?.name === "ValidationError") {
        const field = data?.error?.details?.errors?.[0]?.path?.[0];
        const errorMsg = data?.error?.details?.errors?.[0]?.message;

        if (field === "email" && errorMsg === "This attribute must be unique") {
          message = "Пользователь с таким email уже зарегистрирован.";
        }
      }

      log("error", "mentoring-leads:strapi_error", {
        requestId,
        method: "POST",
        endpoint: "/api/mentoring-leads",
        upstreamUrl: url,
        upstreamStatus: strapiRes.status,
        upstreamBody: data,
        durationMs: Date.now() - startedAt,
      });

      return NextResponse.json({ success: false, message }, { status: 400 });
    }

    log("info", "mentoring-leads:success", {
      requestId,
      method: "POST",
      endpoint: "/api/mentoring-leads",
      upstreamStatus: strapiRes.status,
      durationMs: Date.now() - startedAt,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    log("error", "mentoring-leads:unhandled_error", {
      requestId,
      method: "POST",
      endpoint: "/api/mentoring-leads",
      error:
        error instanceof Error
          ? { name: error.name, message: error.message, stack: error.stack }
          : String(error),
      durationMs: Date.now() - startedAt,
    });
    return NextResponse.json(
      {
        success: false,
        message: "Не удалось отправить заявку. Попробуйте позже.",
      },
      { status: 500 }
    );
  }
}
