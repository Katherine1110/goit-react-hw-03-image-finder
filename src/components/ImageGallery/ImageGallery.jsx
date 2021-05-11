import React from 'react';
import ImageGalaryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../../styles.module.css';

const ImageGallery = ({ pictures, onClick }) => {
  //   console.log(pictures);
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(picture => (
        <ImageGalaryItem
          webformatURL={picture.webformatURL}
          id={picture.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
