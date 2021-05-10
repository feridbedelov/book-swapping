import { FaSpinner } from "react-icons/fa";
import "./index.scss";

export const Spinner = ({ ...props }) => {
  return <FaSpinner className="spinner" {...props} />;
};
