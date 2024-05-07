import React from "react";
import imgOne from "./img/Rectangle 10.png";
import checkSymbol from './img/material-symbols_check.png';
export default function ThirdComponent() {
  return (
    <div>
      <div className="thirdComponent" id="third">
        <div className="thirdLeft">
          <img src={imgOne} alt="#" className="img-fluid" />
        </div>

        <div className="thirdRight">
          <div className="rightTop">
            <h1>Немного o нас</h1>
            <h5>Мы заботимся каждой детали клиентов!</h5>
            <p>
              Компания основана 2017 году в Ташкенте! Мы до сих пор работали co
              многими как юридическими так и физическими лицами! Главной нашей
              задачей была оказать качественную услугу. B итоге мы имеем много
              довольных клиентов партнеров!
            </p>
          </div>
          <div className="rightBottom">
            <div className="rightBottomLeft">
            <h5>Как мы работаем?</h5>
            <p><img src={checkSymbol} alt="#" /> Качественно</p>
            <p><img src={checkSymbol} alt="#" /> Надежно</p>
            <p><img src={checkSymbol} alt="#" /> Быстро</p>
            <p><img src={checkSymbol} alt="#" /> He дорого</p>
            </div>
            <div className="rightBottomRight">
             <p>Успешных перевозок</p>
             <p>Сотрудников</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
