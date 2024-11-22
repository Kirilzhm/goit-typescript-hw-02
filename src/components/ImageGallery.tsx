import React from "react";
import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: {
    id: string;
    urls: { small: string; regular: string };
    alt_description: string;
  }[];
  onImageClick: (image: {
    id: string;
        urls: { small: string; regular: string };
        alt_description: string;
  }) => void;
};

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => { 
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryLi}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
