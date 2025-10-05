"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LeadFormData, leadSchema } from "@/entities/lab-registration/lead";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/ui/Button";
import { Headline } from "@/shared/ui/Headline";
import LeadSuccess from "./LeadSuccess";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result?.message || "Не удалось отправить заявку. Попробуйте позже."
        );
      }
    } catch (err) {
      console.error("Ошибка сети:", err);
      setErrorMessage(
        "Ошибка соединения. Проверьте интернет и попробуйте снова."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return <LeadSuccess />;
  }

  return (
    <div className="lab-form-wrapper flex flex-col gap-6 md:gap-8 pt-16">
      <Headline>Регистрация на лабораторию</Headline>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lab-form w-full flex flex-col gap-6 md:gap-8">
        <div className="name-field w-full">
          <input
            {...register("name")}
            placeholder="ФИО"
            className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
          />
          {errors.name && (
            <p className="text-red-600 pt-0.5">{errors.name.message}</p>
          )}
        </div>

        <div className="email-tel-wrapper w-full flex flex-col lg:flex-row md:items-center gap-6 md:gap-8">
          <div className="email-field w-full lg:w-1/2">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
            />
            {errors.email && (
              <p className="text-red-600 pt-0.5">{errors.email.message}</p>
            )}
          </div>

          <div className="tel-field w-full lg:w-1/2 ">
            <input
              {...register("phone")}
              type="tel"
              placeholder="Телефон"
              className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
            />
            {errors.phone && (
              <p className="text-red-600 pt-0.5">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {errorMessage && (
          <p className="text-red-600 text-sm font-medium text-center">
            {errorMessage}
          </p>
        )}

        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
              Отправка...
            </span>
          ) : (
            "Отправить"
          )}
        </Button>
      </form>
    </div>
  );
}
