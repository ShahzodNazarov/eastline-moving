import React, { useEffect } from "react";
import imgFour from "../img/source/Rectangle 65 (1).png";
import Header from "../header";
import FooterComponent from "../footer";

export default function ServiceCompFour() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="serviceComp">
      <Header />
      <div className="innerBox">
        <div className="innerInnerBox">
          <h1>Квартирный переезд</h1>
          <img src={imgFour} alt="#" className="img-fluid" />
          <p>
            Нужна грузовая машина для перевозки? y нас вы можете также заказать
            отдельно транспортные средства (газель, лабо) для ваших грузов.
            Бесплатно проконсультируем и подадим подходящее для ваших объемов
            транспортное средство.
          </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
