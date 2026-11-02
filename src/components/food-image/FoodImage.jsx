import { useState } from "react";
import "./FoodImage.css";

function FoodImage({ src, alt, className }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`food-image__fallback ${className}`}
        role="img"
        aria-label={`${alt} photo unavailable`}
      >
        Photo unavailable
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}

export default FoodImage;
