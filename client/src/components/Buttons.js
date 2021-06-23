import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label htmlFor='single'>
        <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
        {/* <div style={{background: 'lavender', height: '25px', width: '35px'}}></div> */}
      </label>
      <input type='file' id='single' onChange={props.onChange} /> 
    </div>
    
    <div className='button'>
      <label htmlFor='multi'>
        <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
        {/* <div style={{background: 'lavender', height: '25px', width: '35px'}}></div> */}
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>
  </div>