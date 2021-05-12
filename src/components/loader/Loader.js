import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from "react-loader-spinner";

class ImageLoader extends Component {
    render() {
        return (
            <div className="loader">
                <Loader type="Hearts" color="#3023e7" height={80} width={80} />
            </div>
        );
    }
}

export default ImageLoader;