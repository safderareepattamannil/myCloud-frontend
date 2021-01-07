const SubGridByDate = ({imagePreview}) => {
    return (
        <div className="image-container">
            {imagePreview.map((image) => (
                <div className="grid-item" key={image.id}>
                    <img src={image.imageUrl} alt="img"/>
                </div>
            ))}
        </div>
    );
};

export default SubGridByDate;
