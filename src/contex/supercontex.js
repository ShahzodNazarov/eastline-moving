import React, { useContext } from "react";
import { contex } from "./mycontex";

export default function Supercontex() {
  return useContext(contex);
}
