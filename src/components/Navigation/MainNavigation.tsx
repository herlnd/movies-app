import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className='p-8 flex items-center justify-between'>
      <h1 className='btn btn-ghost text-slate-100 normal-case text-2xl'>
        <NavLink to='/'>Movies App</NavLink>
      </h1>
    </header>
  );
};

export default MainNavigation;
