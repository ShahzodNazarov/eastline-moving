import React from "react";
import FirstComponent from "./components/firstComponent";
import Header from "./components/header";
import SecondComponent from "./components/secondComponent";
import ThirdComponent from "./components/thirdComponent";
import FourthComponent from "./components/fourthComponent";
import FifthComponent from "./components/fifthComponent";
import SixthComponent from "./components/sixthComponent";
import SeventhComponent from "./components/SeventhComponent";
import FooterComponent from "./components/footer";
import SeventhCopy from "./components/seventhCopy";


export default function MainApp() {
  return <div>
        <Header />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixthComponent />
      <SeventhCopy/>
      <FooterComponent/>
  </div>;
}
