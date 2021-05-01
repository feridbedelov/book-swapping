import { Sidebar } from "../Sidebar";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-container">{children}</div>
    </div>
  );
};

export default Layout;
