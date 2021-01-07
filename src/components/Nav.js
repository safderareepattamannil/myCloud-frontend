import React from 'react';
import axios from 'axios';
import {useState} from 'react';

export default function Nav() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    

    // Handle File uploading
    const handleFileSelect = (e) => {
        let filesSelected = [];
        for(let i in e.target.files){
            filesSelected.push(e.target.files[i]);
        }
        setSelectedFiles([...filesSelected]);

    }

    const uploadFiles = () =>{
        let data = new FormData();
        selectedFiles.forEach(file => data.append('files',file));
        axios.post('http://localhost:8342/upload', data).then((response) => {
            //succesfull upload
            console.log("Upload was succesful: " + response.data);
        }).catch((err) => {
            console.log(err.response.data)
        })        
    }
    // End of File Upload Logic


    return ( 
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search"/>
            </div>
            <input type="file" onChange={handleFileSelect} multiple/>
            <button onClick={uploadFiles}>Upload</button>
        </div>
        );

}
