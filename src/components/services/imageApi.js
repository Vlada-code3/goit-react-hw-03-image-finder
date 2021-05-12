
import axios from 'axios';
import PropTypes from 'prop-types';

const fetchImagesApi = (searchQuery, page = 1) => {
    return axios
        .get(
            `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=21139960-6a394b07a806e5d76da1f60b2&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => response.data.hits);
};

fetchImagesApi.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};

export default { fetchImagesApi}

