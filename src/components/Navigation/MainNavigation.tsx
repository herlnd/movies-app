import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="p-8 flex items-center justify-between">
      <h1 className="btn btn-ghost text-slate-100 normal-case text-2xl">
        <NavLink to="/">Movies App</NavLink>
      </h1>
      <nav>
        <ul className="flex gap-8">
          <li>
            <button className="btn btn-ghost text-slate-100 normal-case text-xl">
              <NavLink to="/">Discover</NavLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
