import React from 'react'
import ImageGalleryItem from './ImageGalleryItem';


const ImageGallery = ({ images, getImage }) => {
    return (
        <>
            <ul className="ImageGallery">
                {images.map((image) => (
                    <ImageGalleryItem
                        image={image}
                        key={image.id}
                        getImage={getImage}
                    />
                ))}
            </ul>
        </>
    );
}

export default ImageGallery;