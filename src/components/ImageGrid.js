import { useState } from "react";
import SubGridByDate from "./SubGridByDate";

const ImageGrid = () => {
    const [imagePreview, setimagePreview] = useState([
        { imageUrl: "../assets/gridone.jpg", date: "January", id: 1 },
        { imageUrl: "../assets/gridone.jpg", date: "January", id: 2 },
        { imageUrl: "../assets/gridone.jpg", date: "January", id: 3 },
        { imageUrl: "../assets/gridone.jpg", date: "January", id: 4 },
        { imageUrl: "../assets/gridone.jpg", date: "January", id: 5 },

    ]);

    return (
        <div className="image-grid">
            <SubGridByDate imagePreview={imagePreview}/>
        </div>
    );
};

export default ImageGrid;
