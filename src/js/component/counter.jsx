import React from "react";

export const Counter = ({char}) => {
    return (
        <div className="my-4 bg-dark border rounded border-secondary border-3 px-3 py-4">
            <h1 className="text-white fw-semibold m-0" style={{fontFamily: 'Times New Roman'}}>{char}</h1>
        </div>
    )
}

