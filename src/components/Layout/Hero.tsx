import MainNavigation from '../Navigation/MainNavigation';
import defaultImg from '../../assets/heroBgImg.jpg';

interface Hero {
  bgImg?: string;
  children: JSX.Element;
}

const Hero = (props: Hero) => {
  const imgUrl = props.bgImg ? props.bgImg : defaultImg;

  return (
    <div
      className='hero h-1/4 md:h-1/3 xl:h-1/2'
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className='hero-overlay bg-opacity-60 flex flex-col lg:pb-8'>
        <MainNavigation />
        <div className='flex-col justify-center items-center'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
