import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';

const Images = ({imageObjects, removeImage, uploading}) => 
<div>
  {imageObjects.map((image, i) =>
    <div key={i} className='fadein'>
      { uploading && <Spinner/>}
      <div 
        onClick={() => removeImage(image.public_id)} 
        className='delete'
      >
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
      <img src={image.secure_url} alt='' style={{width: '10rem', height: '5rem', objectFit: 'contain', overflow: 'hidden'}} />
    </div>
  )}
</div>;

export default Images;