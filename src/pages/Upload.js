import React, {useEffect, useState} from 'react'
import "./Upload.css"

const Upload = ({visible}) => {

	const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(true);

  const [isClosed, setIsClosed] = useState(visible);

	const changeHandler = (event) => {
    event.preventDefault();
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);

	};

    const handleUpload = (event) => {
        event.preventDefault();
        if(isFilePicked){
            const data = new FormData();
            data.append("file", selectedFile);
    
            fetch("http://localhost:5000/upload", {method: "post", body: data}).then(response => {
                console.log(response);
              })
              .catch(error => {
                console.error(error);
              });
        }


    }
    const handleClose = () => {

      setIsClosed(!isClosed)

    }

    useEffect(()=>{
      setIsClosed(!isClosed);
    },[visible]);

  return (
    <div className={`${!isClosed ? "static-upload" : "disable" }`}>
      <div className='upload-title'>
        <h1 onClick={handleClose}>🗙</h1>
      </div>
        <div className='upload-container'>
          <div className='select-upload-box'>
            <input className="choose-upload-btn" type="file" name="file" onChange={changeHandler}></input>
          </div>
            <button className='main-upload-btn' onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )
}

export default Upload