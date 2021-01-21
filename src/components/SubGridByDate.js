import { useState } from "react";
import PopupModal from "./PopupModal";
import SelectModal from "./SelectModal";

const SubGridByDate = ({ imagePreview }) => {
    // Handle double click select
    const [selectedImageId, setSelectedImageId] = useState(-1);
    const [toggleModal, setToggleModal] = useState(false);

    const duringPopUp = toggleModal ? "during-popup" : "";

    const handleModalPopupOnClick = (id) => {
        setSelectedImageId(id);
        setToggleModal(true);
    };
    // Handle multi-selecting
    const [selectedImages, setSelectedImages] = useState([]);

    const handleSelect = (id) => {
        if (selectedImages.includes(id)) {
            let filtered = selectedImages.filter((uuid) => uuid !== id);
            setSelectedImages([...filtered]);
        } else {
            setSelectedImages([...selectedImages, id]);
        }
    };

    // Popup Modal for Multiselect

    const unselectAll = () => {
        setSelectedImages([]);
    };

    return (
        <div className="grid-box">
            {toggleModal &&  <PopupModal id={selectedImageId} imagePreview={imagePreview} onDoubleClick={() => setToggleModal(false)}/>}
            {selectedImages.length > 1 && <SelectModal selectedItems={selectedImages.length} unselectAll={unselectAll}/>}


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
                            onDoubleClick={() => handleModalPopupOnClick(image.id)}
                            alt="img"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubGridByDate;
