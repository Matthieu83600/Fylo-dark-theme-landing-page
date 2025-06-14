import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <Image
          src="/images/logo.svg"
          alt="Fylo Logo"
          width={108}
          height={31}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
      </div>
      <div className="footer__content">
        <div className="footer__container top">
          <div className="footer__container-adress">
            <Image src="/images/icon-location.svg" alt="Location Icon" width={24} height={24} loading="lazy" />
            <p className={`${openSans.variable}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
          </div>
          <div className="footer__container-contact">
            <div>
              <Image src="/images/icon-phone.svg" alt="Phone Icon" width={24} height={24} loading="lazy" />
              <p className={`${openSans.variable}`}>+1-543-123-4567</p>
            </div>
            <div>
              <Image src="/images/icon-email.svg" alt="Phone Icon" width={24} height={24} loading="lazy" />
              <p className={`${openSans.variable}`}>example@fylo.com</p>
            </div>
          </div>
        </div>
        <div className="footer__links">
          <ul>
            <li className={`${openSans.variable}`}>About Us</li>
            <li className={`${openSans.variable}`}>Jobs</li>
            <li className={`${openSans.variable}`}>Press</li>
            <li className={`${openSans.variable}`}>Blog</li>
            <li className={`${openSans.variable}`}>Contact Us</li>
            <li className={`${openSans.variable}`}>Terms</li>
            <li className={`${openSans.variable}`}>Privacy</li>
          </ul>
        </div>
        <div className="footer__socials">
          <Image
            src="/images/icon-facebook.svg"
            alt="Facebook Icon"
            width={24}
            height={24}
            loading="lazy"
            className="socials-icon"
          />
          <Image
            src="/images/icon-twitter.svg"
            alt="Twitter Icon"
            width={24}
            height={24}
            loading="lazy"
            className="socials-icon"
          />
          <Image
            src="/images/icon-instagram.svg"
            alt="Instagram Icon"
            width={24}
            height={24}
            loading="lazy"
            className="socials-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
