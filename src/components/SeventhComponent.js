import React, { useRef } from "react";
import email from "./img/email.png";
import phone from "./img/ph_phone-light.png";
import location from "./img/carbon_location.png";

export default function SeventhComponent() {
  let nameRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();
  let textRef = useRef();
  function sendMessageEmail(params) {
    let Obj = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      text: textRef.current.value,
    };
    console.log(Obj);
  }
  return (
    <div className="seventhComp" id="seventh">
      <div className="seventhLeft">
        <h1>Адрес</h1>
        <h4>Контактная информация</h4>
        <p>
          {" "}
          <img src={location} alt="" /> ул.Себзар M17/18, 4дoм, 3кв
        </p>
        <p>
          {" "}
          <img src={email} alt="" /> info@eastline.uz
        </p>
        <p>
          {" "}
          <img src={phone} alt="" /> +998 93 399 9058
        </p>
      </div>
      <div className="seventhRight">
        <h1>y вас возникли вопросы?</h1>
        <h6>Можете писать нам по почте info@eastline.uz</h6> <br />
        <div className="seventRightBottom">
          <div className="twoInput">
            <input
              type="text"
              className="form-control"
              placeholder="Имя*"
              ref={nameRef}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Телефон*"
              ref={phoneRef}
              required
            />
          </div>{" "}
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={emailRef}
            required
          />{" "}
          <br />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Сообщение"
            className="form-control"
            ref={textRef}
            required
          ></textarea>{" "}
          <br />
          <button onClick={sendMessageEmail}>Отправить</button>
        </div>
      </div>
    </div>
  );
}
