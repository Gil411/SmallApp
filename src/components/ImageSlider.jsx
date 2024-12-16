import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    'https://travelquest.co.kr/wp-content/uploads/2023/07/%EA%B5%AD%EB%82%B4%EC%97%AC%ED%96%89%EC%A7%80-8-1024x683.jpg',
    'https://content.skyscnr.com/m/2e19e9559240d2e1/original/GettyImages-543345654.jpg?resize=2560px:1708px',
    'https://content.skyscnr.com/m/6ffdce716afb3a6b/original/GettyImages-532667921.jpg?resize=1800px:1800px&quality=100',
    'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/BIxnZhx3zXSqhHOqDs6iuZTNLtw',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider p-3">
      <div className="container">

        <div className="card mb-3 shadow-sm">
          <h2 className="my-3 fw-semibold text-primary text-center">
            Image Slider
          </h2>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="card-img-top"
          />

          <div className="card-body">

            <div className="row gap-1 text-center">
              <div className="col">
                <button
                  className="btn btn-outline-primary rounded-pill px-3 py-2"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                >
                  <i className="fas fa-chevron-left"></i> Prev
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-outline-primary rounded-pill px-3 py-2"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                >
                  Next <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ImageSlider;
