import React from "react";
import eastlineLogo from "./img/eastline-white-logo 1.png";
import instagram from "./img/mdi_instagram.png";
import telegram from "./img/basil_telegram-outline.png";
import facebook from "./img/iconoir_facebook.png";
import youtube from "./img/youtube.png";
import email from "./img/email.png";
import phone from "./img/ph_phone-light.png";
import location from "./img/carbon_location.png";

import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-scroll";

export default function FooterComponent() {
  return (
    <div className="footer" id="footer">
      <MDBFooter className="innerFooter" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="">
            <MDBRow>
              <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
                <img src={eastlineLogo} alt="#" />
              </MDBCol>

              <MDBCol
                lg="4"
                md="4"
                className="mb-4 mb-md-0 d-flex flex-column mbdCol"
              >
                <h5 className="text-uppercase">Меню</h5>

                <Link
                  to="first"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  type="button"
                  className="textHover text-white"
                >
                  Главная
                </Link>
                <Link
                  to="third"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  type="button"
                  className="textHover text-white"
                >
                  O нас
                </Link>
                <Link
                  to="fourth"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  type="button"
                  className="textHover text-white"
                >
                  Партнеры
                </Link>
                <Link
                  to="fifth"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  type="button"
                  className="textHover text-white"
                >
                  Галерея
                </Link>
                <Link
                  to="sixth"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  type="button"
                  className="textHover text-white"
                >
                  Услуги
                </Link>
              </MDBCol>

              <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Контакты</h5>

                <ul className="list-unstyled mb-0 ">
                  <li>
                    <a
                      href="https://yandex.uz/maps/org/63207708216/?ll
                      =69.277945%2C41.323080&mode=search&sctx=ZAAAAAgBE
                      AAaKAoSCUSlETP7UVFAEQIOoUrNqkRAEhIJ2xMktrsHwD8RjN
                      toAG%2BBsD8iBgABAgMEBSgKOABA31BIAWJGcmVhcnI9c2NoZ
                      W1lX0xvY2FsL0dlby9NZWRpYUZsb3cvU3Rvcmllc0NvbnRlbn
                      RUeXBlPW5vbl9kaXNjb3Zlcnlfb3Jnc2oCdXqdAc3MTD2gAQC
                      oAQC9AR8nMFfCAQy4rOS76wG%2Fluu1sgSCAghlYXN0bGluZY
                      oCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.277945%
                      2C41.323080&sspn=0.074932%2C0.064490&text=eastline&z=13.39"
                      className="text-white"
                    >
                      <img src={location} alt="#" /> ул.Себзар M17/18, 4дoм, 3кв
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mail.google.com/mail/u/0/?pli=1#inbox"
                      className="text-white"
                    >
                      <img src={email} alt="#" /> info@eastline.uz
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <img src={phone} alt="#" /> +998 93 399 9058
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
        <div
          className=" p-3 align-center d-flex justify-content-evenly flex-wrap-reverse"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div>© 2024 Eastline Express Bce права защищены.</div>
          <section className="mb-3 d-flex gap-4">
            <a href="https://instagram.com/eastline.pereezd">
              <img src={instagram} alt="#" />
            </a>
            <a href="https://t.me/eastline_express_uzb">
              <img src={telegram} alt="#" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61557130479519">
              <img src={facebook} alt="#" />
            </a>
            <a href="https://youtube.com/@EastlinePereezd">
              <img src={youtube} alt="#" />
            </a>
          </section>
        </div>
      </MDBFooter>
    </div>
  );
}
