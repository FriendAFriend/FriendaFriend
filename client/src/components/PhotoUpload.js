import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import '../scss/styles.scss';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/diwmmmiwe/image/upload';

class PhotoUpload extends Component {
  
  state = {
    uploading: false,
    images: []
  }

  onChange = (e) => {
    this.setState({ uploading: true });
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'FriendAFriend');
      console.log(formData);
      fetch(`${CLOUDINARY_URL}`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(image => {
          this.setState(prevState => { 
            return {
              uploading: prevState.uploading,
              images: [...prevState.images, image]
          }
        });
        });
    });
    this.setState(prevState => {
      return {
        uploading: false, 
        images: [...prevState.images]
      }
    });
    };

  removeImage = (id) => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }
  
  render() {
    const { uploading, images } = this.state;

    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    };

    return (
      <div>
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
};

export default PhotoUpload;