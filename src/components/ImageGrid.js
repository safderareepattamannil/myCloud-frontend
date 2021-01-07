import { useState, useEffect } from "react";
import axios from "axios";
import SubGridByDate from "./SubGridByDate";

const ImageGrid = () => {
    const [imagePreview, setImagePreview] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8342/getfiles").then((res) => {
            const fileNames = res.data;
            const previewInfo = [];
            const baseUrl = "http://localhost:8342/uploads/";
            fileNames.forEach((file) => {
                previewInfo.push({
                    imageUrl: baseUrl + file,
                    id: imagePreview[0] ? imagePreview[0].id + 1 : 0,
                });
            });
            setImagePreview([...previewInfo]);
        });
    }, []);

    return (
        <div className="image-grid">
            <SubGridByDate imagePreview={imagePreview} />
        </div>
    );
};

export default ImageGrid;
