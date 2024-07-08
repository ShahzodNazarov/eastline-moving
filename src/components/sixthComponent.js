import React from "react";
import RectangleOne from './img/services/Rectangle 20.png'
import RectangleTwo from './img/services/Rectangle 24.png'
import RectangleThree from './img/services/Rectangle 27.png'
import RectangleFour from './img/services/Rectangle 31.png'
import RectangleFive from './img/services/Rectangle 32.png'
import RectangleSix from './img/newPhotos/Rectangle 68.png'
import RectangleSeven from './img/newPhotos/Rectangle 72.png'
import RectangleEight from './img/newPhotos/Rectangle 73.png'


import { useNavigate } from "react-router-dom";
export default function SixthComponent() {
  let navigate = useNavigate();
  return (
    <div className="sixthComp" id="sixth">
      <h1>
        <div className="sixthTop">
          <h1>Услуги</h1>
        </div>
        <div className="sixthBottom">
             <div className="box">
                <img src={RectangleOne} alt="#" className="img-fluid"/>
                <h1>Квартирный переезд</h1>
                <p>Квартирный переезд - это процесс перемещения из одной квартиры в...</p>
                <button onClick={()=>(navigate('/service-1'))}>Читать</button>
             </div>
             <div className="box">
                <img src={RectangleTwo} alt="#" className="img-fluid"/>
                <h1>Офисный переезд</h1>
                <p>Офисный переезд - это процесс перемещения офиса или рабочего...</p>
                <button onClick={()=>(navigate('/service-2'))}>Читать</button>
             </div>
             <div className="box">
                <img src={RectangleThree} alt="#" className="img-fluid"/>
                <h1>Услуги грузчиков</h1>
                <p>Наши профессиональные грузчики имеют большой опыт транспортировки...</p>
                <button onClick={()=>(navigate('/service-3'))}>Читать</button>
             </div>
             <div className="box">
                <img src={RectangleFour} alt="#" className="img-fluid"/>
                <h1>Грузоперевозки</h1>
                <p>Нужна грузовая машина для перевозки? y нас вы можете также заказать...</p>
                <button onClick={()=>(navigate('/service-4'))}>Читать</button>
             </div>
             <div className="box">
                <img src={RectangleFive} alt="#" className="img-fluid"/>
                <h1>Разборка-сборка мебели</h1>
                <p>Сборка мебели - это процесс составления отдельных элементов и...</p>
                <button onClick={()=>(navigate('/service-5'))}>Читать</button>
             </div>

             
             <div className="box">
                <img src={RectangleSix} alt="#" className="img-fluid"/>
                <h1>Кондиционер монтаж</h1>
                <p>Кондиционер монтаж - это процесс составления отдельных элементов и...</p>
                <button onClick={()=>(navigate('/service-6'))}>Читать</button>
             </div>
             <div className="box">
                <img src={RectangleSeven} alt="#" className="img-fluid"/>
                <h1>Уборка (женщины)</h1>
                <p>Нужна грузовая машина для перевозки? y нас вы можете также заказать...</p>
                <button onClick={()=>(navigate('/service-7'))}>Читать</button>
             </div>
             <div className="box">
                <img src={RectangleEight} alt="#" className="img-fluid"/>
                <h1>Женская помощь</h1>
                <p>Женская помощь - это процесс составления отдельных элементов и...</p>
                <button onClick={()=>(navigate('/service-8'))}>Читать</button>
             </div>
        </div>
      </h1>
    </div>
  );
}
