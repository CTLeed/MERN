import React from "react";

export const Tab = (props) => {
    const { tab, index, tabClickHandler } = props;
    const { name, isSelected } = tab;

    return (
        <div className="frame">
            <button
                className="custom-btn btn-3"
                onClick={(e) => {
                    tabClickHandler(e, index)
                }}
                key={index}
            >
                <span>{tab.name}</span>
            </button>
        </div>
    );
}