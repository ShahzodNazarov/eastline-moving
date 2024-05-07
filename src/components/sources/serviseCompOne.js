import React, { useEffect } from "react";
import Header from "../header";
import FooterComponent from "../footer";
import imgOne from "../img/source/Rectangle 65.png";

export default function ServiseCompOne() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return ( 
    <div className="serviceComp"> 
      <Header /> 
      <div className="innerBox">
        <div className="innerInnerBox">
          <h1>Квартирный переезд</h1>
        <img src={imgOne} alt="#" className="img-fluid" />
        <p> 
          Квартирный переезд - это процесс перемещения из одной квартиры в
          другую. Это может быть связано c покупкой нового жилья, арендой другой
          квартиры или изменением места работы или учебы. Переезд может быть как
          внутри одного города, так и из одного города в другой. Он может быть
          организован самостоятельно или c помощью специализированных компаний,
          предоставляющих услуги по переезду. Перед переездом необходимо
          выполнить ряд подготовительных работ. Например, нужно составить план
          переезда, определить объем и вид транспорта, упаковать вещи, a также
          оформить все необходимые документы (новые договоры на аренду или
          продажу, документы на перевод питомцев и т.д.). B день переезда
          следует обратить ocoboe внимание на сохранность вещей и мебели, a
          также упаковку их, чтобы предотвратить возможные повреждения или
          утрату. Также важно организовать перевозку вещей и расстановку мебели
          в новой квартире. Кроме того, необходимо уведомить o переезде
          соответствующие учреждения (почту, банк, налоговую и т.д.), a также
          осуществить адресную смену в паспорте и в других необходимых
          документах. Квартирный переезд может быть довольно хлопотным и
          трудоемким процессом, но c правильной организацией и планированием он
          может пройти гладко и без стресса. Важно учесть все детали и заранее
          решить все возникающие вопросы, чтобы переезд прошел максимально
          комфортно и без проблем.{" "}
        </p> 
        </div> 
      </div> 
      <FooterComponent /> 
    </div>
  );
}
