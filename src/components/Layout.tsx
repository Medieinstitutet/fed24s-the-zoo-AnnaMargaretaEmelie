import { Outlet, NavLink } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Start
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/animals">Alla djur</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
