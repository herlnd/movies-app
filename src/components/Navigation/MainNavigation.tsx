import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className='flex items-center justify-between p-4 lg:py-6 lg:px-8'>
      <h1 className='text-slate-100 text-base normal-case font-bold lg:text-2xl'>
        <NavLink to='/'>Movies App</NavLink>
      </h1>
    </header>
  );
};

export default MainNavigation;
