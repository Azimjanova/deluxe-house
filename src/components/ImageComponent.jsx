import React from 'react';
import { useSelector } from 'react-redux';

const ImageComponent = () => {
    const imageText = useSelector((state) => state.image.text);

    return (
        <div style={{ fontFamily: 'Arial', textAlign: 'center' }}>
            <h1>{imageText}</h1>
        </div>
    );
};



export default ImageComponent;