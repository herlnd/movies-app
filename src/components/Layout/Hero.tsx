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
			className='hero min-h-screen'
			style={{
				backgroundImage: `url(${imgUrl})`,
			}}
		>
			<div className='hero-overlay bg-opacity-60 flex flex-col'>
				<MainNavigation />
				<div className='flex-col justify-center items-center'>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Hero;
