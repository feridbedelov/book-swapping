import { Slide, ToastContainer } from "react-toastify";
import { Sidebar } from "../Sidebar";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <div className="main-container">{children}</div>
      </div>
      <ToastContainer
        transition={Slide}
        style={{ maxWidth: 560, width: "auto" }}
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
};

export default Layout;
