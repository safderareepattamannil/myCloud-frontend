import { useState } from "react";
import SelectModal from "./SelectModal";

const SubGridByDate = ({ imagePreview }) => {
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
        if (selectedImages.length > 0) {
            return (
                <SelectModal
                    selectedItems={selectedImages.length}
                    unselectAll={unselectAll}
                />
            );
        }
    };

    return (
        <div className="grid-box">
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
                            alt="img"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubGridByDate;
