import React from "react";

export const Display = (props) => {
    const { tab } = props;
    const { isSelected, message } = tab;

    return (
        <div className="frame"
            style={isSelected ? { height: "300px", width: "300px", border: "2px solid black", color: "white" } : { display: "none" }}
        >
            {
                isSelected && <p>{message}</p>
            }
        </div>
    )
}