"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LeadFormData, leadSchema } from "@/entities/lab-registration/lead";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) setSubmitted(true);
  };

  if (submitted) return <p>Спасибо за заявку!</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Имя" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} type="email" placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("phone")} type="tel" placeholder="Телефон" />
      {errors.phone && <p>{errors.phone?.message}</p>}

      <button type="submit">Отправить</button>
    </form>
  );
}
