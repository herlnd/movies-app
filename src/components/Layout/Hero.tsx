import MainNavigation from '../Navigation/MainNavigation';
import defaultImg from '../../assets/heroBgImg.jpg';

interface Hero {
  bgImg?: string;
  children: JSX.Element;
}

const Hero = (props: Hero) => {
  const imgUrl = props.bgImg ? props.bgImg : defaultImg;

  return (
    <section
      className='hero'
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
    </section>
  );
};

export default Hero;
