import React from 'react'

export default function PopupModal({id,imagePreview}) {
    return (
        <div className="popup-modal">
            <div className="image-popup-container">
                {imagePreview.map((image)=>{
                    if(image.id === id){
                       return ( <img src={image.imageUrl} alt="img" key={image.id}/>)
                    }
                })}
            </div>
        </div>
    )
}
