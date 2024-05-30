import "./style.scss";
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import { Mycontex } from "./contex/mycontex";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
const domNode = document.getElementById("root");
const root = createRoot(domNode);


root.render(
  <Mycontex>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </Mycontex>
);
