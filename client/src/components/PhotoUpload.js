import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import '../scss/styles.scss';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/diwmmmiwe/image/upload';

const PhotoUpload = ({setListing, listing}) => {
  
  const [uploading, setUploading] = useState(false);
  const [imageObjects, setImageObjects] = useState([]);

  useEffect(() => {
    const urls = imageObjects.map(obj => obj.secure_url);
    setListing(prev => {
      return {...prev, photo: urls}
    });
  }, [uploading, imageObjects]);

  useEffect(() => {
    console.log(listing);
  }, [listing, uploading]);

  /* as files are uploaded, updates the state to show the spinner or, 
  when completed, the imageObjects you've uploaded. Sends each file in a fetch
  request to cloudinary api, creating stable urls */
  const onChange = async (e) => {
    // sets contents to spinner until complete
    await setUploading(true);
    const files = await Array.from(e.target.files);
    const imageArray = [];

    files.forEach(async file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'FriendAFriend');
      
      const res = await fetch(`${CLOUDINARY_URL}`, {
          method: 'POST',
          body: formData
        });
        const image = await res.json();
        console.log(image);
        await imageArray.push(image);
        setImageObjects(prev => [...prev, image]);
      });
    // with all of that done, stop displaying the spinner
    await setUploading(false);
  };

  const removeImage = (id) => {
    setImageObjects(prev => {
      return prev.filter(image => image.public_id !== id);
    });
  }

  // const content = () => {
  //   switch(true) {
  //     case uploading:
  //       return <Spinner />
  //     case imageObjects.length > 0:
  //       return <Images imageObjects={imageObjects} removeImage={removeImage} />
  //     default:
  //       return <p>Upload an image!</p>
  //   }
  // };

    return (
      <div>
        <div className='buttons'>
          <Images 
            imageObjects={imageObjects} 
            removeImage={removeImage}
            uploading={uploading}/>
          <Buttons onChange={onChange}></Buttons>
        </div>
      </div>
    )
};

export default PhotoUpload;