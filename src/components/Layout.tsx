import { Outlet, Link } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={"/"}>Start</Link> | <Link to={"/animals"}>Alla djur</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
