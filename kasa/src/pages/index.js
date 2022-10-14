import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="App">Page d'accueil</div>
      <Outlet />
    </>
  );
};

export default Layout;
