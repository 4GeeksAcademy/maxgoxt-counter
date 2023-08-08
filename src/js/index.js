//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home";

setInterval(CounterSec, 100);
let dsec = 0
let secs = 0
let mins = 0
let hrs = 0
//render your react application
function CounterSec() {
    ReactDOM.render(<Home dsec={dsec} secs={secs} mins={mins} hrs={hrs}/>, document.querySelector("#app"));
    dsec++
    if (dsec > 9) {
        secs ++
        dsec = 0
        if (secs > 9) {
            mins ++
            secs = 0
            if (mins > 9) {
                hrs ++
                mins = 0
                if (hrs > 9) {
                    mins ++
                    secs = 0
                }
            }
        }
    }
};
