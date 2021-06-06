import "./index.scss";
import { FaBan } from "react-icons/fa";

export const Empty = ({ title, description, ...props }) => {
  return (
    <div className="empty-case-wrapper" {...props}>
      <h3>{title}</h3>
      <p>{description}</p>
      <FaBan className="icon-add" />
    </div>
  );
};
