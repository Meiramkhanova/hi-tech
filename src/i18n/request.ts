import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

// const locales = ["en", "kk", "ru"];

export default getRequestConfig(async ({ requestLocale }) => {
  // console.log("Current locale:", params.locale);
  // if (!params.locale || !locales.includes(params.locale)) notFound();
  // const locale = params.locale !== undefined ? params.locale : "en";

  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale: locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
