import React, { useState } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import '../scss/styles.scss';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/diwmmmiwe/image/upload';

const PhotoUpload = (props) => {
  
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  /* as files are uploaded, updates the state to show the spinner or, 
  when completed, the images you've uploaded. Sends each file in a fetch
  request to cloudinary api, creating stable urls */
  const onChange = (e) => {
    // sets contents to spinner until complete
    setUploading(true);
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'FriendAFriend');
      
      fetch(`${CLOUDINARY_URL}`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(image => {
          setImages(prev => [...prev, image])
      });
    });
    // with all of that done, stop displaying the spinner
    setUploading(false);
  };

  const removeImage = (id) => {
    setImages(prev => {
      return prev.filter(image => image.public_id !== id);
    });
  }

  const content = () => {
    switch(true) {
      case uploading:
        return <Spinner />
      case images.length > 0:
        return <Images images={images} removeImage={removeImage} />
      default:
        return <Buttons onChange={onChange} />
    }
  };

    return (
      <div>
        <div className='buttons'>
          {content()}
          {uploading && <Spinner/>}
        </div>
      </div>
    )
};

export default PhotoUpload;