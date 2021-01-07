
import SubGridByDate from "./SubGridByDate";

const ImageGrid = ({imagePreview}) => {

    return (
        <div className="image-grid">
            <SubGridByDate imagePreview={imagePreview} />
        </div>
    );
};

export default ImageGrid;
