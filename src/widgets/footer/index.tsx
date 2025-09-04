import { navlinks } from "@/shared/config/navigation";
import Container from "@/shared/ui/Container";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    id: 1,
    contactTitle: "Адрес",
    contactLabel: "г. Алматы, ул. Жандосова 55",
  },
  {
    id: 2,
    contactTitle: "Телефон",
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
    contactTitle: "Приёмная комиссия",
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

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper bg-theprimary text-white py-12 rounded-t-2xl">
        <Container>
          <div className="wrapper flex flex-col gap-28">
            <div className="footer-top-wrapper w-full flex gap-32">
              <div className="footer-nav-item flex flex-col gap-6">
                <div className="footer-item-name uppercase">Навигация</div>

                <div className="footer-item-info flex flex-col gap-6 md:gap-8">
                  {navlinks.map((navlink) => (
                    <Link
                      href={navlink.link}
                      key={navlink.id}
                      className="navlink">
                      {navlink.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="footer-contact-item flex flex-col gap-6">
                <div className="footer-item-name uppercase">Контакты</div>

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
                <div className="footer-item-name uppercase">Соцсети</div>

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

            <div className="footer-bottom flex items-center gap-24">
              <Image
                src="/assets/narxozLogo.png"
                alt="narxoz-logo"
                width={400}
                height={116}
                className="w-[25rem] h-28 object-cover"
              />

              <div className="logo-hi-tech flex items-center gap-2">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={86}
                  height={86}
                  className="size-[5.4rem]"
                />

                <div className="hi-tech-text uppercase text-5xl">
                  Hi tech <br /> institute
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
