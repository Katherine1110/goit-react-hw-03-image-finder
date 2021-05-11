import React, { Component } from "react";
// import axios from "axios";
import pixabayApi from "./api/pixabayApi";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import ErrorItem from "./components/ErrorItem/ErrorItem";
import Modal from "./components/Modal/Modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    pictures: [],
    selectedPicture: undefined,
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchImages();
    }
  }

  onChangeQuery = (query) => {
    console.log(query);
    this.setState({
      pictures: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  searchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    pixabayApi
      .fetchImages(options)
      .then((pictures) => {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = (id) => {
    if (id) {
      this.setState(({ pictures }) => ({
        selectedPicture: pictures.find((picture) => picture.id === id)
          .largeImageURL,
      }));
    } else {
      this.setState({
        selectedPicture: undefined,
      });
    }
  };

  render() {
    const { pictures, isLoading, error, selectedPicture } = this.state;
    const shouldLoadMoreBtn = pictures.length > 0 && !isLoading;

    return (
      <>
        {error && <ErrorItem />}
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        <ImageGallery
          onClick={this.toggleModal}
          pictures={this.state.pictures}
        />
        {shouldLoadMoreBtn && <Button onClick={this.searchImages} />}
        {selectedPicture && (
          <Modal onClose={this.toggleModal}>{selectedPicture}</Modal>
        )}
      </>
    );
  }
}

export default App;
