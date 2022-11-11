import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from ".";
import styles from "./GalleryOverlay.module.css";
import { ArrowSvg, XMarkSvg } from "../icons";

export default function GalleryOverlay({
  onClose,
  onPrev,
  onNext,
  image,
  desc,
}) {
  const headingRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();
  useEffect(() => {
    headingRef.current.focus();
  }, []);
  const handleKeyUp = (e) => {
    switch (e.keyCode) {
      case 27:
        onClose();
        break;
      case 37:
        onPrev();
        break;
      case 39:
        onNext();
        break;
    }
  };
  return (
    <div className={styles.block} onKeyUp={handleKeyUp}>
      <button
        className={styles.hidden}
        onFocus={() => lastRef.current.focus()}
      />
      <h1 className={styles.hidden} tabIndex="-1" ref={headingRef}>
        {desc}
      </h1>
      <div className={styles.content}>
        <button
          className={styles.prev}
          aria-label="Previous image"
          onClick={onPrev}
          ref={firstRef}
        >
          <Icon size="lg" rotate="270">
            <ArrowSvg />
          </Icon>
        </button>
        <Image src={image} alt={desc} layout="fill" objectFit="contain" />
        <button
          className={styles.next}
          aria-label="Next image"
          onClick={onNext}
        >
          <Icon size="lg" rotate="90">
            <ArrowSvg />
          </Icon>
        </button>
        <button
          className={styles.close}
          aria-label="Close"
          onClick={onClose}
          ref={lastRef}
        >
          <Icon size="lg">
            <XMarkSvg />
          </Icon>
        </button>
      </div>
      <button
        className={styles.hidden}
        onFocus={() => firstRef.current.focus()}
      />
    </div>
  );
}
