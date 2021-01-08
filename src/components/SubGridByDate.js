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
    const renderSelectModal = () => {
        if (selectedImages.length > 0) {
            return <SelectModal selectedItems={selectedImages.length}/>;
        }
    };

    return (
        <div className="grid-box">
            {renderSelectModal()}
            <div className="image-container">
                {imagePreview.map((image) => (
                    <div className="grid-item" key={image.id}>
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubGridByDate;
