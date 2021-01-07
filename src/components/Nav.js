import React from 'react';

export default function Nav({handleFileSelect, uploadFiles}) {


    return ( 
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search"/>
            </div>
            <label htmlFor="upload-button">
                <p className="add-photos-button">Add Photos</p>
            </label>
            <input className="hidden" id="upload-button" type="file" onChange={handleFileSelect} multiple/>
            <button onClick={uploadFiles}>Upload</button>
        </div>
        );

}
