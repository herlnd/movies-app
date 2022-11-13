import { GitHubIcon } from '../Icons';

const Footer = () => {
  return (
    <footer className='w-full flex justify-center items-center p-4 bg-black text-slate-100 text-sm lg:text-base'>
      <div className='flex items-center justify-center gap-2'>
        <span>
          © 2022. Made by{' '}
          <a href='https://github.com/herlnd' className='font-bold'>
            herlnd 🗿
          </a>
        </span>
        <span>|</span>
        <span>
          <a href='https://github.com/herlnd/react-movies-app'>
            <GitHubIcon />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
