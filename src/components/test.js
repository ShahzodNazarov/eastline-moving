import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import rectangleOne from "./img/working-progres/Rectangle 14.png";
import rectangleTwo from "./img/working-progres/Rectangle 15.png";
import rectangleThree from "./img/working-progres/Rectangle 16.png";
import rectangleFour from "./img/working-progres/Rectangle 17.png";
import rectangleFive from "./img/working-progres/Rectangle 18.png";
import rectangleSix from "./img/working-progres/Rectangle 19.png";

export default function Test() {
  const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 450,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
      breakpoint: 0,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
];
  return (
    <div className="test">
       <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
                <img src={rectangleOne} alt="#" className='img-fluid'/>
                <img src={rectangleTwo} alt="#" className='img-fluid'/>
                <img src={rectangleThree} alt="#" className='img-fluid'/>
                <img src={rectangleFour} alt="#" className='img-fluid'/>
                <img src={rectangleFive} alt="#" className='img-fluid'/>
                <img src={rectangleSix} alt="#" className='img-fluid'/>
            </Slide>
        </div>
    </div>
  );
}
