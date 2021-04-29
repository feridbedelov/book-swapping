import "./index.scss";

export const Tabs = (props) => {
  const { tabs, active, onTabClick } = props;

  return (
    <div key="tabs" className="tabs">
      {tabs.map((tab, index) => (
        <div
          role="button"
          aria-hidden
          onClick={() => onTabClick(index + 1)}
          key={index}
          className={`tab-style ${active === index + 1 && "active-tab-style"}`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};
