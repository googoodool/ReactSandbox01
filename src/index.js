import React from "react";
import ReactDom from "react-dom";

let status = "Good morning";
const d = new Date(2022, 4, 23, 8);
let hour = d.getHours();

const sty = {
  color: "red",
  fontSize: "70px"
};
if (hour >= 12 && hour < 18) {
  status = "Good afternoon";
  sty.color = "green";
} else if (hour >= 18 && hour <= 23) {
  status = "Good Evening";
  sty.color = "orange";
}

ReactDom.render(
  <h1 style={sty}>
    {status} : {hour}
  </h1>,
  document.getElementById("root")
);
