import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "3%" }}>
        <ul style={{ marginTop: "10px" }}>
          <NavLink to="/home" style={{ color: "white" }}>
            Home
          </NavLink>
        </ul>
        <ul style={{ marginTop: "10px" }}>
          <NavLink to="/register" style={{ color: "white" }}>
            Register
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
