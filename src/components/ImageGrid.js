import image from "../assets/gridone.jpg";

const ImageGrid = () => {
  return (
    <div className="image-container">
      <div className="collection">
        <div>
          <p>January</p>
        </div>
        <div className="image-grid">
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
        </div>
      </div>

      <div className="collection">
        <div>
          <p>December</p>
        </div>
        <div className="image-grid">
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
          <div className="grid-item">
            <img src={image} alt="grid"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
