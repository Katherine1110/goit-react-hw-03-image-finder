import React, { Component } from 'react';
import styles from '../../styles.module.css';

const ImageGalleryItem = ({ webformatURL, id, onClick }) => {
  // console.log(id);
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        key={id}
        src={webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
        onClick={() => onClick(id)}
        onLoad={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
        }
      />
    </li>
  );
};

export default ImageGalleryItem;
