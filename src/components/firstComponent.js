import bigImg1 from "./img/Rectangle 1.png";
import bigImg2 from "./img/Rectangle 3.png";
import bigImg3 from "./img/Rectangle 2.png";
import React, { Component, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Modal } from "react-responsive-modal";
import { GoArrowSwitch } from "react-icons/go";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FirstComponent() {
  useEffect(() => {
    localStorage.removeItem("count");
  }, []);
  let size = localStorage.getItem("count");
  const [summ, setSumm] = useState(0);
  let [carValue, setCarValue] = useState(0);
  const [takeLoad, setTakeLoad] = useState("");
  const [takeHour, setTakeHour] = useState(1);
  const [unload, setUnload] = useState("");
  const [TruckValue, setTruckValue] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textareaValue, setTextAreaValue] = useState("");
  let [openOne, setOpenOne] = useState(false);
  let [countWorker, setCountWorker] = useState(0);

  function increment() {
    setCountWorker(++countWorker);
    localStorage.setItem("count", JSON.stringify(countWorker));
    let select = document.querySelector("#selectHour");
    let workers = localStorage.getItem("count");
    if (countWorker > 0) {
      select.setAttribute("disabled", "true");
      select.classList.add("changeColorSelect");
      if (takeHour == 1) {
        let value = summ + 150000 * takeHour;
        setSumm(value);
        // localStorage.setItem('summValue',value);
      } else {
        let value = summ + (110000 * takeHour + 40000);
        setSumm(value);
        // localStorage.setItem('summValue',value);
      }
    }
  }

  function decrement(params) {
    let workers = localStorage.getItem("count");
    let select = document.querySelector("#selectHour");

    if (countWorker == 1 && TruckValue == "none") {
      select.removeAttribute("disabled");
      select.classList.remove("changeColorSelect");
    }

    if (countWorker > 0) {
      setCountWorker(--countWorker);
      localStorage.setItem("count", JSON.stringify(countWorker));
    }

    if (workers > 0) {
      if (takeHour == 1) {
        let value = summ - 150000 * takeHour;
        setSumm(value);
        // localStorage.setItem('summValue',value);
      } else {
        let value = summ - (110000 * takeHour + 40000);
        setSumm(value);
        // localStorage.setItem('summValue',value);
      }
    }
  }

  function checkEmpty() {
    if (takeLoad != "" && unload != "" && TruckValue != "") {
      return true;
      console.log(takeLoad);
    } else return false;
  }

  function getAlert(sms) {
    setOpenOne(false);
    toast.success(`🦄 ${sms}! `, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  function changeLoadValue() {
    let valueLoad = takeLoad;
    let valueUnload = unload;
    setTakeLoad(valueUnload);
    setUnload(valueLoad);
  }

  function sendApplication() {
    let obj = {
      takeLoad,
      unload,
      TruckValue,
      dateTime,
      countWorker,
      numberValue,
      textareaValue,
      hour: takeHour,
    };
    if (checkEmpty()) {
      getAlert("request send succesfullt");
    } else getAlert("sending message error");

    console.log(obj);
  }

  function sendHour(event) {
    setTakeHour(event.target.value);
  }

  function changeTruckValue(event) {
    setTruckValue(event);
    let select = document.querySelector("#selectHour");
    select.setAttribute("disabled", "true");
    select.classList.add("changeColorSelect");

    if (event == "none") {
      setCarValue(0);
      if (countWorker == 0) {
        select.removeAttribute("disabled");
        select.classList.remove("changeColorSelect");
      }
    }

    if (event == "Лабо") {
      let value = 100000 * takeHour + 100000;
      setCarValue(value);
    }

    if (event == "Газель") {
      let value = 150000 * takeHour + 100000;
      setCarValue(value);
    }

    if (event == "Тент высокый 3 метра") {
      let value = 150000 * takeHour + 100000;
      setCarValue(value);
    }
    if (event == "Тент высокый 4 метра") {
      let value = 170000 * takeHour + 100000;
      setCarValue(value);
    }
    if (event == "Тент высокый 5 метра") {
      let value = 200000 * takeHour + 100000;
      setCarValue(value);
    }
    if (event == "Исузу 5 тонн") {
      let value = 2400000;
      setCarValue(value);
    }
    if (event == "Исузу 10 тонн") {
      let value = 2800000;
      setCarValue(value);
    }
    if (event == "Фура 22 тонны") {
      let value = 3200000;
      setCarValue(value);
    }
  }

  return (
    <div className=" firstComp" id="first">
      <Carousel className="grCol">
        <Carousel.Item interval={3000}>
          <div className="image-container">
            <div className="image-background"></div>
          </div>
          <Carousel.Caption className="bigImgText">
            <div className="wrapper">
              <h1>Квартирный переезд</h1>
              <p>
                Eastline Express - компания, которая доставит ваши домашние вещи
                туда, куда вам нужно.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="imgFirst"></div>
          <div className="image-container">
            <div className="image-background image-background-two"></div>
          </div>

          <Carousel.Caption className="bigImgText">
            <div className="wrapper">
              <h1>Услуги грузчиков</h1>
              <p>
                Грузчики по сути дела являются ключевыми фигурами в ходе
                грузоперевозок. <br /> Они выполняют практически весь перечень
                работ при переезде.
              </p>
              {/* <h3>от 255 000 сумов</h3> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="image-container">
            <div className="image-background image-background-three"></div>
          </div>

          <Carousel.Caption className="bigImgText">
            <div className="wrapper">
              <h1>Офисный переезд</h1>
              <p>
                Переезд из одного офиса в другой - это всегда очень хлопотное
                занятие, <br /> требующее правильной организации.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="newCalculator customModalOne">
        <h1>Калькулятор</h1>
        <div className="rowTop">
          <div>
            <label htmlFor="rowTopInputLeft">Адрес погрузки</label>
            <input
              value={takeLoad}
              onChange={(e) => {
                setTakeLoad(e.target.value);
              }}
              type="text"
              className="form-control"
              id="rowTopInputLeft"
              placeholder="погрузки"
            />
          </div>
          <button onClick={changeLoadValue}>
            <GoArrowSwitch />
          </button>
          <div>
            <label htmlFor="rowTopInputRight">Адрес выгрузки</label>
            <input
              value={unload}
              onChange={(e) => {
                setUnload(e.target.value);
              }}
              type="text"
              className="form-control"
              id="rowTopInputRight"
              placeholder="выгрузки"
            />
          </div>
        </div>

        <div className="rowMiddleOne">
          <div>
            <label htmlFor="rowMiddleOneInputRight">Когда</label>
            <input
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              type="date"
              className="form-control"
              id="rowMiddleOneInputRight"
            />
          </div>
          <button>==</button>

          <div>
            <label htmlFor="rowMiddleOneInputLeft">Выбрать машину</label>
            <select
              id="rowMiddleOneInputLeft"
              className="form-select"
              onChange={(e) => changeTruckValue(e.target.value)}
            >
              <option value="none">Выбрать...</option>
              <option value="Лабо">Лабо / Висота 1,3м / Весь, 0,5т</option>
              <option value="Газель">Газель / Висота 1,5м / Весь, 1,5т</option>
              <option value="Тент высокый 3 метра">
                Тент высокый 3 метра / Весь, 1,5т
              </option>
              <option value="Тент высокый 4 метра">
                Тент высокый 4 метра / Весь, 1,5т
              </option>
              <option value="Тент высокый 5 метра">
                Тент высокый 5 метра / Весь, 1,5т
              </option>
              <option value="Исузу 5 тонн">
                Исузу 5 тонн час нет только суточный
              </option>
              <option value="Исузу 10 тонн">
                Исузу 10 тонн час нет только суточный
              </option>
              <option value="Фура 22 тонны">
                Фура 22 тонны час нет только суточный
              </option>
            </select>
          </div>
        </div>

        <div className="rowMiddleTwo">
          <div className="middleTwoLeft">
            <label htmlFor="rowMiddleTwoInputLeft">Грузчики</label>
            <div className="leftDivMiddleTwo" id="rowMiddleTwoInputLeft">
              <h5>{countWorker}</h5>
              <div>
                <button onClick={decrement}>-</button>
                <button onClick={() => increment()}>+</button>
              </div>
            </div>
          </div>
          <button className="btnMiddleTwo">==</button>
          <div className="middleRightTwo">
            <label htmlFor="rowMiddleTwoInputRight">Номер телефона</label>
            <input
              value={numberValue}
              onChange={(e) => setNumberValue(e.target.value)}
              type="text"
              className="form-control"
              id="rowMiddleTwoInputRight"
              placeholder="+998"
            />
          </div>
        </div>
        <div className="selectHour">
          <label htmlFor="selectHour">сколько часов</label>
          <select
            id="selectHour"
            onChange={(event) => sendHour(event)}
            className="form-select"
          >
            <option value="1">1 - Один час</option>
            <option value="2">2 - Два часа</option>
            <option value="3">3 - Три часа </option>
            <option value="4">4 - Четыре часа </option>
            <option value="5">5 - Пять часов </option>
          </select>
        </div>
        <div className="rowBottom">
          <label htmlFor="rowBottom">Комментарий к заказу</label>
          <textarea
            value={textareaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
            rows={3}
            id="rowBottom"
            className="form-control"
            placeholder="write text here"
          ></textarea>
        </div>

        <button className="buttonBottom" onClick={sendApplication}>
          Оформить за {summ + carValue + " сум"}
        </button>
      </div>
    </div>
  );
}
