// import React, { useState } from 'react';
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };
//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className='slider'>
//       <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//       <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? 'slide active' : 'slide'}
//             key={index}
//           >
//             {index === current && (
//               <img src={slide.image} key={index} alt='basi' className='image' />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default ImageSlider;

// import React from 'react';
// import ImageGallery from 'react-image-gallery';

// const ImageSlider = () => {
//   const images = [
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//   ];

//   return (
//     <div>
//       <ImageGallery items={images} />
//     </div>
//   );
// };

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const ImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        <div className='embla__slide'>Slide 1</div>
        <div className='embla__slide'>Slide 2</div>
        <div className='embla__slide'>Slide 3</div>
      </div>
    </div>
  );
};

export default ImageSlider;
