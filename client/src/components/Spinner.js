import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const Spinner = () => {
  return(
    <div className='spinner fadein'>
      <FontAwesomeIcon icon={faSyncAlt} size='3x' color='#3B5998' />
    </div>
  )
}

export default Spinner;