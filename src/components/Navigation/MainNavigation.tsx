import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className='flex items-center justify-between px-2 py-4 lg:px-8 lg:py-6'>
      <h1 className='text-slate-100 text-base normal-case font-bold lg:text-2xl'>
        <NavLink to='/'>Movies App</NavLink>
      </h1>
    </header>
  );
};

export default MainNavigation;
