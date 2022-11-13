import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface carouselType {
  displayElements: JSX.Element[] | string;
}

const Carousel = ({ displayElements }: carouselType) => {
  return (
    <div className='overflow-hidden cursor-grab'>
      {typeof displayElements === 'string' ? (
        <div className='text-slate-300 font-bold cursor-auto pb-2'>
          {displayElements}
        </div>
      ) : (
        <Splide
          options={{
            autoWidth: true,
            gap: '1em',
            pagination: false,
            arrows: false,
          }}
        >
          {displayElements.map((item, index) => {
            return <SplideSlide key={index}>{item}</SplideSlide>;
          })}
        </Splide>
      )}
    </div>
  );
};

export default Carousel;
