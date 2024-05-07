import React from "react";
import imgOne from "./img/whyUsImg/Rectangle 5.png";
import imgTwo from "./img/whyUsImg/Rectangle 6.png";
import imgThree from "./img/whyUsImg/Rectangle 7.png";
import imgFour from "./img/whyUsImg/Rectangle 8.png";

export default function SecondComponent() {
  return (
    <div>
      <div className="secondComponent" id="second">
        <div className="whyUs">
          <h1>Почему мы?</h1>
        </div>
        <div className="whyUsImages">
          <div className="whyUsImg1 whyUsImg">
            <img src={imgOne} alt="#" />
            <p>Бережно относимся чужим преимуществам</p>
          </div>
          <div className="whyUsImg2 whyUsImg">
            <img src={imgTwo} alt="#" />
            <p>Организуем качественную услугу</p>
          </div>
          <div className="whyUsImg3 whyUsImg">
            <img src={imgThree} alt="#" />
            <p>Доставим груз вовремя</p>
          </div>
          <div className="whyUsImg4 whyUsImg">
            <img src={imgFour} alt="#" />
            <p>Квалифицировнные сотрудники</p>
          </div>
        </div>
      </div>
    </div>
  );
}
