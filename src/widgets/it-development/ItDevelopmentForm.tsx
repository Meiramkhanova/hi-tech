"use client";

import {
  DeveloperFormData,
  developerSchema,
} from "@/entities/developer-register/developer";
import Button from "@/shared/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ItDevelopmentForm() {
  const t = useTranslations("Forms");

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeveloperFormData>({
    resolver: zodResolver(developerSchema),
  });

  const onSubmit = async (data: DeveloperFormData) => {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const body = {
        ...data,
      };

      const res = await fetch("/api/it-developers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(result?.message || t("ErrorMsg"));
      }
    } catch (err) {
      console.error("Ошибка сети:", err);
      setErrorMessage(t("NetworkErrMsg"));
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-4xl">
        <div className="bg-theprimary/5 border border-green-20 rounded-2xl p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-theprimary mx-auto mb-4" />

          <h2 className="text-2xl font-semibold text-theprimary mb-2">
            {t("thanksForRequest")}
          </h2>
          <p className="text-theprimary mb-6">{t("contactLater")}</p>

          <div className="return-to-form-btn w-full flex justify-center">
            <Button
              variant="form"
              size="base"
              onClick={() => setSubmitted(false)}>
              {t("sendRequestAgain")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="development-form lab-form w-full flex flex-col gap-6 md:gap-8">
      <div className="name-email-tel-wrapper w-full grid grid-cols-1 2xl:grid-cols-3 gap-6 md:gap-8">
        <div className="name-field w-full">
          <input
            {...register("name")}
            placeholder={t("name")}
            className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
          />

          {errors.name && (
            <p className="text-red-600 pt-0.5">{errors.name.message}</p>
          )}
        </div>

        <div className="email-field w-full">
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
          />

          {errors.email && (
            <p className="text-red-600 pt-0.5">{errors.email.message}</p>
          )}
        </div>

        <div className="phone-field w-full">
          <input
            {...register("phone")}
            placeholder={t("telephone")}
            className="w-full bg-gray-100 h-14 flex items-center rounded-2xl pl-6 md:pl-8"
          />

          {errors.phone && (
            <p className="text-red-600 pt-0.5">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="textarea-wrapper">
        <textarea
          {...register("message")}
          placeholder={t("textareaDesc")}
          className="w-full bg-gray-100 rounded-2xl pl-6 md:pl-8 py-4 min-h-32"
        />

        {errors.message && (
          <p className="text-red-600 pt-0.5">{errors.message.message}</p>
        )}
      </div>

      {errorMessage && (
        <p className="text-red-600 text-sm font-medium text-center">
          {errorMessage}
        </p>
      )}

      <Button className="w-full sm:w-fit" type="submit" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
            {t("sending")}
          </span>
        ) : (
          t("discussProject")
        )}
      </Button>
    </form>
  );
}

export default ItDevelopmentForm;
