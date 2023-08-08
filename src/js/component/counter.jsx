import React from "react";
import reactDom from "react-dom";

export const Counter = ({dsec, secs, mins, hrs}) => {
    return (
        <div className="d-flex justify-content-around bg-dark">
            <i class="fa fa-clock text-white fs-1 my-auto"></i>
            <h1 className="text-white" style={{fontFamily: 'Times New Roman'}}>{hrs}</h1>
            <h1 className="text-white" style={{fontFamily: 'Times New Roman'}}>{mins}</h1>
            <h1 className="text-white" style={{fontFamily: 'Times New Roman'}}>{secs}</h1>
            <h1 className="text-white" style={{fontFamily: 'Times New Roman'}}>{dsec}</h1>
        </div>
    )
}

