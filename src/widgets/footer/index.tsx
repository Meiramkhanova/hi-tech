import Container from "@/shared/ui/Container";
import NavLinks from "../../shared/ui/NavLinks";
import { cn } from "@/lib/utils";
import AiInstitute from "@/shared/icons/AiInstitute";
import { getTranslations } from "next-intl/server";

async function Footer({ className }: { className?: string }) {
  const t = await getTranslations("Footer");

  const contacts = [
    {
      id: 1,
      contactTitle: t("address"),
      contactLabel: t("addressLocation"),
    },
    {
      id: 2,
      contactTitle: t("telephone"),
      contactLabel: "+7 (727) 123-45-67",
      contactLink: "tel:+77271234567",
    },
    {
      id: 3,
      contactTitle: "Email",
      contactLabel: "info@hti.kz",
      contactLink: "mailto:info@hti.kz",
    },
    {
      id: 4,
      contactTitle: t("admission"),
      contactLabel: "admission@hti.kz",
      contactLink: "mailto:admission@hti.kz",
    },
  ];

  const socials = [
    {
      id: 1,
      contactTitle: "Instagram",
      contactLabel: "hti_kz",
      contactLink: "https://www.instagram.com/hti_kz/",
    },
  ];

  return (
    <footer>
      <div
        className={cn(
          "footer-wrapper bg-theprimary text-white py-12 rounded-t-2xl mt-24",
          className
        )}>
        <Container>
          <div className="wrapper flex flex-col gap-14 2xl:gap-28">
            <div className="footer-top-wrapper w-full flex flex-col lg:flex-row gap-16 lg:gap-32">
              <div className="footer-nav-item flex-col gap-6 hidden 2xl:flex">
                <div className="footer-item-name uppercase">
                  {t("navigation")}
                </div>

                <NavLinks
                  className="gap-6 md:gap-8 flex flex-col items-start"
                  linkClassName="hover:text-white transition-none"
                />
              </div>

              <div className="footer-contact-item flex flex-col gap-6">
                <div className="footer-item-name uppercase">
                  {t("contacts")}
                </div>

                <div className="footer-item-info flex flex-col gap-6 md:gap-8">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="contact-title-label">
                      <div className="contact-title font-semibold">
                        {contact.contactTitle}
                      </div>

                      {contact.contactLink ? (
                        <a
                          className="block"
                          href={contact.contactLink}
                          target="_blank"
                          rel="noopener noreferrer">
                          {contact.contactLabel}
                        </a>
                      ) : (
                        <div className="contact-label">
                          {contact.contactLabel}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="footer-socials-item flex flex-col gap-6">
                <div className="footer-item-name uppercase">{t("socials")}</div>

                <div className="footer-item-info flex flex-col gap-6 md:gap-8">
                  {socials.map((social) => (
                    <div key={social.id} className="contact-title-label">
                      <div className="contact-title font-semibold">
                        {social.contactTitle}
                      </div>

                      {social.contactLink ? (
                        <a
                          className="block"
                          href={social.contactLink}
                          target="_blank"
                          rel="noopener noreferrer">
                          {social.contactLabel}
                        </a>
                      ) : (
                        <div className="contact-label">
                          {social.contactLabel}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-bottom flex flex-col md:flex-row md:items-center gap-6 md:gap-8 xl:gap-12">
              <div className="logos-wrapper flex items-center gap-6 md:gap-8 xl:gap-12">
                <AiInstitute className="w-40 h-fit" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
