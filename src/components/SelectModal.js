import React from "react";

export default function SelectModal({ selectedItems, unselectAll }) {

    return (
        <div>
            <div className="selected-count-modal">
                <div className="selectOptions">
                    <div onClick={unselectAll} class="unselect-button">X</div>
                    <div>{selectedItems} Selected</div>
                    <div>Download</div>
                    <div className={"alert"}>Delete</div>
                </div>
            </div>
        </div>
    );
}
