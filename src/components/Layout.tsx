import { Outlet, Link } from "react-router";

export function Layout() {
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
}
