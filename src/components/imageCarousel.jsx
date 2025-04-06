import { useState } from "react";

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    if (!images || images.length === 0) {
      return <p>No images available</p>;
    }
  
    const nextImage = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    );
  }
  
  
  export default ImageCarousel;