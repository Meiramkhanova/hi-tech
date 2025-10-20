import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async (params) => {
  console.log("Current locale:", params.locale);
  console.log("params", params);

  // if (!params.locale || !locales.includes(params.locale)) notFound();
  const locale = params.locale !== undefined ? params.locale : "en";

  return {
    locale: locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
