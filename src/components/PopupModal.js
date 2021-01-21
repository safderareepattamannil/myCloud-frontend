import React from 'react'

export default function PopupModal({id,imagePreview, onDoubleClick}) {
    return (
        <div className="popup-modal" onDoubleClick={onDoubleClick}>
            <div className="image-popup-container">
                {imagePreview.map((image)=>{
                    if(image.id === id){
                       return ( <img src={image.imageUrl} alt="img" key={image.id}/>)
                    } return null;
                })}
            </div>
        </div>
    )
}
