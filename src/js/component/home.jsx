import React from "react";
import reactDom from "react-dom";
import { Counter } from "./counter";
//include images into your bundle

//create your first component
export const Home = ({dsec, secs, mins, hrs}) => {
    return (
		<div className="text-center">
        <Counter dsec={dsec} secs={secs} mins={mins} hrs={hrs}/></div>
    )
}

