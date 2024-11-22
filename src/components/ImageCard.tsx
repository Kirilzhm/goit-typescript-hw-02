import React from "react";
import styles from "./ImageCard.module.css";

type ImageCardProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

const ImageCard = ({ src, alt, onClick }: ImageCardProps) => {
  return (
    <div className={styles.galleryImgBox} onClick={onClick}>
      <img className={styles.galleryImage} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
