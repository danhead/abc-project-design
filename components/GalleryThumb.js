import React from "react";
import Image from "next/image";
import styles from "./GalleryThumb.module.css";

export default function GalleryThumb({ image, label, onClick }) {
  return (
    <button className={styles.block} onClick={onClick} aria-label={label}>
      <Image src={image} layout="fill" objectFit="fill" aria-hidden="true" />
    </button>
  );
}
