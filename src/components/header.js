import axios from "axios";
import email from "./img/email.png";
import { Link } from "react-scroll";
import youtube from "./img/youtube.png";
import "react-responsive-modal/styles.css";
import phone from "./img/ph_phone-light.png";
import { GoArrowSwitch } from "react-icons/go";
import { Modal } from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import instagram from "./img/mdi_instagram.png";
import React, { useRef, useState } from "react";
import location2 from "./img/carbon_location.png";
import facebook from "./img/iconoir_facebook.png";
import { Navbar, Nav, Button } from "react-bootstrap";
import telegram from "./img/basil_telegram-outline.png";
import eastlinelogo from "./img/eastline-black-logo 1.png";
import SixthComponent from "./sixthComponent";

export default function Header() {
  let size = localStorage.getItem('count');
  const [open, setOpen] = useState(false);
  let [openOne, setOpenOne] = useState(false);
  let [openTwo, setOpenTwo] = useState(false);
  let [countWorker,setCountWorker]=useState(JSON.parse(size)??0);
  let navigate = useNavigate();
  let location = useLocation();
  let nameRef = useRef();
  let phoneRef = useRef();
  let textRef = useRef();
  
  function sendQuestion() {
    setOpen(!open);
  }
  console.log(location.pathname);
  function sendMessageEmail() {
    let Obj = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      text: textRef.current.value,
    };
    console.log(Obj);
    let url = "https://example/check";
    axios
      .post(url, Obj)
      .then((response) => {
        console.log("POST request was successful!");
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("POST request failed:", error);
      });
  }

  function backToMain(element) {
    navigate("/");
  }

  function defaultComp() {}

  function increment(params) {
      setCountWorker(++countWorker);
      localStorage.setItem('count',JSON.stringify(countWorker));
  }
  function decrement(params) {
    if (countWorker>0) {
      setCountWorker(--countWorker);
    }
  }
  return (
    <div className="headerComponentContainer">
      <div className="headerTop">
        <div className="headerTopLeft">
          <ul>
            <li>
              <img src={location2} alt="#" /> ул.Себзор M17/18, 4дoм, 3кв
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/?pli=1#inbox">
                <img src={email} alt="#" /> info@eastline.uz
              </a>
            </li>
            <li>
              <a href="">
                <img src={phone} alt="#" /> +998 93 399 9051
              </a>
            </li>
          </ul>
        </div>
        <div className="headerTopRight">
          <ul>
            <li>
              <a href="https://instagram.com/eastline.pereezd">
                <img src={instagram} alt="#" />
              </a>
            </li>
            <li>
              <a href="https://t.me/eastline_express_uzb">
                <img src={telegram} alt="#" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61557130479519">
                <img src={facebook} alt="#" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@EastlinePereezd">
                <img src={youtube} alt="#" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* import bootstrap navbar  */}
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        style={{ margin: "0% 5%" }}
      >
        <Navbar.Brand href="https://eastline.uz">
          <img src={eastlinelogo} alt="Logo 1" className="brand-logo mr-2" />
        </Navbar.Brand>
        <Navbar.Brand href="https://eastline.uz" className="navbarBreand">
          <h6>
            УСЛУГИ <br /> ПЕРЕЕЗДА
          </h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto " style={{}}>
            <hr />
            <button className="calculator" onClick={() => setOpenOne(!openOne)}>
              Калькулятор 
            </button>
            <hr />
            <Link
              onClick={location.pathname != "/" ? backToMain : defaultComp}
              to="third"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              type="button"
              className="textHover"
            >
              O нас
            </Link>
            <hr />
            <Link
              onClick={location.pathname != "/" ? backToMain : defaultComp}
              to="fourth"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              type="button"
              className="textHover"
            >
              Партнеры
            </Link>
            <hr />
            <Link
              onClick={location.pathname != "/" ? backToMain : defaultComp}
              to="fifth"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              type="button"
              className="textHover"
            >
              Галерея
            </Link>
            <hr />
            <Link
              onClick={location.pathname != "/" ? backToMain : defaultComp}
              to="sixth"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              type="button"
              className="textHover"
            >
              Услуги
            </Link>
            <hr />
            <Link
              onClick={location.pathname != "/" ? backToMain : defaultComp}
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              type="button"
              className="textHover"
            >
              Контакты
            </Link>
            <hr />
          </Nav>
          <Button className="askQuestionButton" onClick={sendQuestion}>
            Задать вопрос
          </Button>
          <Modal
            open={open}
            onClose={() => setOpen(!open)}
            center
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
          >
            <div>
              <h5>Задать вопрос</h5>
              <label htmlFor="inpName">
                <h6>Имя</h6>
              </label>
              <input
                id="inpName"
                type="text"
                className="form-control"
                placeholder="Имя*"
                ref={nameRef}
                required
              />
              <label htmlFor="inpPhone">
                <h6>Номер телефона</h6>
              </label>
              <input
                id="inpPhone"
                type="text"
                className="form-control"
                placeholder="Телефон*"
                ref={phoneRef}
                required
              />
              <label htmlFor="inpPhone">
                <h6>Сообщение</h6>
              </label>
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="5"
                placeholder="Сообщение"
                className="form-control"
                ref={textRef}
                required
              ></textarea>
              <br />
              <button onClick={sendMessageEmail} className="btnBottom">
                Отправить
              </button>
            </div>
          </Modal>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        open={openOne}
        onClose={() => setOpenOne(!openOne)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModalOne",
        }}
      >
        <h1>Калькулятор</h1>
        <div className="rowTop">
          <div>
            <label htmlFor="rowTopInputLeft">Адрес погрузки</label>
            <input type="text" className="form-control" id="rowTopInputLeft"
            placeholder="погрузки" />
          </div>
          <button><GoArrowSwitch /></button>
          <div>
            <label htmlFor="rowTopInputRight">Адрес выгрузки</label>
            <input type="text" className="form-control" id="rowTopInputRight"
            placeholder="выгрузки" />
          </div>
        </div>

        <div className="rowMiddleOne">
          <div>
            <label htmlFor="rowMiddleOneInputLeft">Выбрать машину</label>
            <select id="rowMiddleOneInputLeft" className="form-select">
              <option value="choose">choose...</option>
            </select>
          </div>
          <button>==</button>
          <div>
            <label htmlFor="rowMiddleOneInputRight">Когда</label>
            <input
              type="date"
              className="form-control"
              id="rowMiddleOneInputRight"
            />
          </div>
        </div>

        <div className="rowMiddleTwo">
          <div className="middleTwoLeft">
            <label htmlFor="rowMiddleTwoInputLeft">Грузчики</label>
            <div className="leftDivMiddleTwo" id="rowMiddleTwoInputLeft">
              <h5>{countWorker}</h5>
              <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
              </div>
            </div>
          </div>
          <button className="btnMiddleTwo">==</button>
          <div className="middleRightTwo">
            <label htmlFor="rowMiddleTwoInputRight">Номер телефона</label>
            <input
              type="text"
              className="form-control"
              id="rowMiddleTwoInputRight"
              placeholder="+998"
            />
          </div>
        </div>

        <div className="rowBottom">
          <label htmlFor="rowBottom">Комментарий к заказу</label>
          <textarea
            rows={5}
            id="rowBottom"
            className="form-control"
            placeholder="write text here"
          ></textarea>
        </div>

        <button className="buttonBottom">Оформить</button>
        {/* <button onClick={() => setOpenTwo(!openTwo)}>och</button> */}
      </Modal>

      <Modal
        open={openTwo}
        onClose={() => setOpenTwo(!openTwo)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <h1>alek</h1>
      </Modal>
    </div>
  );
}
