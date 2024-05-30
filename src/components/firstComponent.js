import bigImg1 from "./img/Rectangle 1.png";
import bigImg2 from "./img/Rectangle 3.png";
import bigImg3 from "./img/Rectangle 2.png";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function FirstComponent() {
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
              <h3>от 255 000 сумов</h3>
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
                занятие, требующее правильной организации.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
