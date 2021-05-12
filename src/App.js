import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Button from './components/button/Button';
import ImageGallery from './components/imageGallery/ImageGallery';
import Modal from './components/modal/Modal';
import SearchBar from './components/searchBar/SearchBar';
import fetchImages from './components/services/imageApi';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ImageLoader from './components/loader/Loader';


class App extends Component {
  state = {
    
      searchQuery: '',
      images: [],
      pageNumber: 1,
      error: '',
      isLoading: false,
      isModalOpen: false,
      largeImageId: null,
      // largeImage: [],
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;
    if (prevState.pageNumber !== pageNumber) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }

    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages()
    }
    

  }
  fetchImages = () => {
    const { searchQuery, pageNumber } = this.state;
    this.setState({ isLoading: true });

    fetchImages
      .fetchImagesApi(searchQuery, pageNumber)
      .then(images => {
        if (images.length === 0) {
          this.setState({ found: false });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            pageNumber: prevState.pageNumber + 1,
            
          }));
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
    
    
  };

 
  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, pageNumber: 1, images: [] });
  }
  onLoadMore = () => {
    this.setState((prevState) => ({ pageNumber: prevState.pageNumber + 1 }))
  }

  getImage = evt => {
    this.setState({
      largeImageURL: evt.target.dataset.image
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };


  render() {
    const { images, isLoading, isModalOpen, largeImageURL} = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} getImage={this.getImage} />
        { isLoading && <ImageLoader />}
        {images.length > 0 &&
          <Button onClick={this.fetchImages} />
        }
        <Modal open={isModalOpen} onClose={this.toggleModal} largeImageURL={largeImageURL} />


        </>
    );
  }
}

export default App;