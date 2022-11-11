import { useRef } from 'react';
import { motion } from 'framer-motion';

interface carouselType {
  displayElements: JSX.Element[];
}

const Carousel = ({ displayElements }: carouselType) => {
  const carousel = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={carousel} className='w-full h-full overflow-hidden cursor-grab'>
      <motion.div
        drag='x'
        dragElastic={0}
        dragConstraints={carousel}
        className='w-fit'
      >
        <ol className='w-fit h-fit flex items-center justify-start gap-2 lg:gap-10'>
          {displayElements.map((item) => {
            return (
              <li>
                <motion.div id='item'>{item}</motion.div>
              </li>
            );
          })}
        </ol>
      </motion.div>
    </div>
  );
};

export default Carousel;
