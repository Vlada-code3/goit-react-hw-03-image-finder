import React from 'react'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, getImage }) => {
    return (
        <>
            <li className="ImageGalleryItem">
                <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" onClick={getImage} data-image={image.largeImageURL} />
            </li>
        </>
    );
}

// ImageGalleryItem.propTypes = {
//     image: PropTypes.shape({
//         webformatURL: PropTypes.string,
//     })
// }
export default ImageGalleryItem;