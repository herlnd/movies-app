import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface carouselType {
  displayElements: JSX.Element[];
}

const Carousel = ({ displayElements }: carouselType) => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const items = useRef<HTMLDivElement | null>(null);
  const [dragStatus, setDragStatus] = useState<boolean | 'x'>('x');

  useEffect(() => {
    console.log(carousel.current?.offsetWidth, items.current?.offsetWidth);
    if (carousel.current!.offsetWidth >= items.current!.offsetWidth) {
      setDragStatus(false);
    }

    if (carousel.current!.offsetWidth < items.current!.offsetWidth) {
      setDragStatus('x');
    }
  }, []);

  return (
    <motion.div
      ref={carousel}
      className='w-full h-full bg-slate-400 overflow-hidden cursor-grab'
    >
      <motion.div
        drag='x'
        dragElastic={0}
        dragConstraints={carousel}
        ref={items}
        className='w-fit h-fit flex items-center justify-start gap-2 lg:gap-10 bg-red-200'
      >
        {displayElements.map((item) => {
          return (
            <ol>
              <motion.div id='item'>{item}</motion.div>
            </ol>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
