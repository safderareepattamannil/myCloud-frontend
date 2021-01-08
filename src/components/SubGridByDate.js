import { useState } from "react";
import PopupModal from "./PopupModal";
import SelectModal from "./SelectModal";

const SubGridByDate = ({ imagePreview }) => {
    // Handle double click select
    const [doubleSelect, setDoubleSelect] = useState(-1);
    const handleDoubleClick = (id) => {
        console.log("double click");
        setDoubleSelect(id);
        console.log(doubleSelect);
    };
    // Handle multi-selecting
    const [selectedImages, setSelectedImages] = useState([]);
    const handleSelect = (id) => {
        if (selectedImages.includes(id)) {
            console.log("here");
            let filtered = selectedImages.filter((uuid) => uuid !== id);
            setSelectedImages([...filtered]);
        } else {
            setSelectedImages([...selectedImages, id]);
        }
        console.log(id);
        console.log(selectedImages);
    };

    // Popup Modal for Multiselect

    const unselectAll = () => {
        setSelectedImages([]);
    };

    const renderSelectModal = () => {
        if (selectedImages.length > 1) {
            return (
                <SelectModal
                    selectedItems={selectedImages.length}
                    unselectAll={unselectAll}
                />
            );
        }
    };

    const renderPopupModal = () => {
        if (doubleSelect) {
            return <PopupModal id={doubleSelect} imagePreview={imagePreview} />;
        }
    };

    return (
        <div className="grid-box">
            {renderPopupModal()}
            {renderSelectModal()}


            <ul className="image-container">
                {imagePreview.map((image) => (
                    <li className="grid-item" key={image.id}>
                        <img
                            src={image.imageUrl}
                            className={
                                selectedImages.includes(image.id)
                                    ? "grid-item-selected"
                                    : "nothing"
                            }
                            onClick={() => handleSelect(image.id)}
                            onDoubleClick={() => handleDoubleClick(image.id)}
                            alt="img"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubGridByDate;
