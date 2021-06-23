import userReducer from "./userReducer";

const initialState = {
    uploading: false,
    photos: [],
}

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addPhotos': 
            return {...state, photos: action.payload};
        case 'uploading': 
            return {...state, uploading: action.payload};
        default: 
            return state;
    };
};

export default photoReducer;