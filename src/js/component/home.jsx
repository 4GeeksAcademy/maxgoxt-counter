import React from "react";
import reactDom from "react-dom";
import { Counter } from "./counter";
//include images into your bundle

//create your first component
export const Home = ({dsec, secs, mins, hrs, dia}) => {
    return (
		<div className="d-flex justify-content-around bg-black" style={{paddingLeft: 500, paddingRight: 500}}>
        <Counter char={<i class="fa fa-clock text-white fs-1 my-auto"></i>}/>
        <Counter char={dia}/>
        <Counter char={hrs}/>
        <Counter char={mins}/>
        <Counter char={secs}/>
        <Counter char={dsec}/>
        </div>
    )
}

