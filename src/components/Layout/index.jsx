import { Sidebar } from "../Sidebar";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
