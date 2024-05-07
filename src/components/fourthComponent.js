import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";


import Carousel from 'react-bootstrap/Carousel';
import one from './img/Logos/british-council.png'
import two from './img/Logos/centil.png'
import three from './img/Logos/egs-logo-black.jpg'
import four from './img/Logos/zte-logo.png'
import five from './img/Logos/europol.png'
import six from './img/Logos/france.png'
import seven from './img/Logos/legalmax.png'
import eight from './img/Logos/north-west.png'
import nine from './img/Logos/safia.jpg'
import ten from './img/Logos/transceka-logo.png'

export default function FourthComponent() {
    const splideRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        if (splideRef.current) {
          splideRef.current.go("+1", true); 
        }
      }, 3000);
      return () => clearInterval(interval);
    }, []);

  return <div className="fourthComponent" id="fourth">
     <div className="fourthTop">
        <h1>Партнеры</h1>
     </div>
     <div className="fourthBottom">
     <Splide
        options={{
          type: "loop",
          perPage: 5,
          perMove: 1,
          gap: "2rem",
          autoWidth: true,
          focus: "center",
          pagination: false,
          arrows: false,
            breakpoints: {
              768: {
                perPage: 3,
              },
              576: {
                perPage: 1,
              },
            },
        }}
        ref={splideRef}
      >
        <SplideSlide>
          <img
            src={one}
            alt="Slide 1"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={two}
            alt="Slide 2"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={three}
            alt="Slide 3"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={four}
            alt="Slide 4"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={five}
            alt="Slide 5"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={six}
            alt="Slide 6"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={seven}
            alt="Slide 7"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={eight}
            alt="Slide 8"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={nine}
            alt="Slide 9"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={ten}
            alt="Slide 10"
            style={{
              width: "200px",
              height: "100px",
            }}
            className="img-fluid"
          />
        </SplideSlide>
      </Splide>
     </div>
  </div>;
}
