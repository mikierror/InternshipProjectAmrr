import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carousel({ images }) {
  const fallbackImg = "https://picsum.photos/400/300?grayscale&blur=1"; // more reliable

  const handleError = (e) => {
    if (e.target.src !== fallbackImg) {
      e.target.src = fallbackImg;
    }
  };

  return (
    <Swiper spaceBetween={16} slidesPerView={1} className="rounded-xl overflow-hidden">
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img || fallbackImg}
            alt={`slide-${i}`}
            onError={handleError}
            className="w-full h-[40vh] object-cover bg-gray-100 dark:bg-gray-800 rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
