import Footer from './Footer';

interface Layout {
  children: JSX.Element;
}

const Layout = (props: Layout) => {
  return (
    <main className='bg-[#171717] text-slate-100 min-h-screen max-w-screen flex flex-col justify-between items-center xl:max-w-[1440px] xl:mx-auto'>
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;
