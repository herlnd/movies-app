import Footer from './Footer';

interface Layout {
	children: JSX.Element;
}

const Layout = (props: Layout) => {
	return (
		<>
			{props.children}
			<Footer />
		</>
	);
};

export default Layout;
