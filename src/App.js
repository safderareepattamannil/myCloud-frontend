import "./App.css";
import ImageGrid from "./components/ImageGrid";
import Nav from "./components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";

function App() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [renderGrid, setRenderGrid] = useState(0);

    // Handle File uploading
    const handleFileSelect = (e) => {
        let filesSelected = [];
        for (let i in e.target.files) {
            filesSelected.push(e.target.files[i]);
        }
        setSelectedFiles([...filesSelected]);
    };

    const uploadFiles = () => {
        let data = new FormData();
        selectedFiles.forEach((file) => data.append("files", file));
        axios
            .post("http://localhost:8342/upload", data)
            .then((response) => {
                //succesfull upload
                console.log("Upload was succesful: " + response.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
        // Render grid on file change
        renderGrid === 0 ? setRenderGrid(1) : setRenderGrid(0);
    };
    // End of File Upload Logic

    const [imagePreview, setImagePreview] = useState([]);
    console.log(imagePreview);
    useEffect(() => {
        axios.get("http://localhost:8342/getfiles").then((res) => {
            const fileNames = res.data;
            const previewInfo = [];
            const baseUrl = "http://localhost:8342/uploads/";
            let lastId = 0;
            fileNames.forEach((file) => {
                previewInfo.push({
                    imageUrl: baseUrl + file,
                    id: lastId,
                });
                lastId += 1;
            });
            setImagePreview([...previewInfo]);
        });
    }, [renderGrid]);


    return (
        <div className="App">
            <div className="container">
                <Nav
                    handleFileSelect={handleFileSelect}
                    uploadFiles={uploadFiles}                />
                <h1>
                    <strong>Hello, </strong>Safder
                </h1>
                <ImageGrid imagePreview={imagePreview} />
            </div>
        </div>
    );
}

export default App;
