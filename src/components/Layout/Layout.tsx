import Footer from './Footer';

interface Layout {
  children: JSX.Element;
}

const Layout = (props: Layout) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <main className='w-full h-full lg:max-w-[1440px]'>
        {props.children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
