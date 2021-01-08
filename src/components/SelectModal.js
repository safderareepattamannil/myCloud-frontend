import React from "react";

export default function SelectModal({ selectedItems }) {
    return (
        <div>
            <div className="selected-count-modal">
                <div className="selectOptions">
                    <div>{selectedItems} Selected</div>
                    <div>Download</div>
                    <div className={"alert"}>Delete</div>
                </div>
            </div>
        </div>
    );
}
