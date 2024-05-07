import React, { useEffect } from "react";
import imgThree from "../img/source/Rectangle 65(0).png";
import Header from "../header";
import FooterComponent from "../footer";

export default function ServiceCompThree() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="serviceComp">
      <Header />
      <div className="innerBox">
        <div className="innerInnerBox">
          <h1>Квартирный переезд</h1>
          <img src={imgThree} alt="#" className="img-fluid" />
          <p>
            Наши профессиональные грузчики имеют большой опыт транспортировки
            грузов самых разных форм и тяжестей, и выполнят работу любого объёма
            c профессиональным оборудованием бережно и без лишних хлопот.
          </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
