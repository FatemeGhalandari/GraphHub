import {
  DashboardIcon,
  PersonIcon,
  AccountCircleIcon,
  SettingsIcon,
  LogoutIcon,
  StackedLineChartIcon,
  NotificationsIcon,
  HealthAndSafetyIcon,
  MonetizationOnIcon,
  InventoryIcon,
  ShoppingCartIcon,
  PsychologyIcon,
} from "./icons";
import styles from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  let [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  let [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [lightMode]);
  return (
    <div className="flex min-h-[100vh] flex-1 flex-col border-r-[0.5px] border-solid border-r-borderColor bg-secondary dark:border-r-navItemColor dark:bg-[#222] ">
      <div
        className={`${styles.borderBottom} flex h-[50px] items-center justify-center`}
      >
        <Link to="/" className={`${styles.logo}`}>
          GraphHub
        </Link>
      </div>
      <div className="pl-[10px]">
        <ul className="m-0 list-none p-0">
          <p className={`${styles.paragraph}`}>Main</p>
          <Link to="/">
            <li className={`${styles.li}`}>
              <DashboardIcon className={`${styles.icon}`} />
              <span className={`${styles.span}`}>Dashboard</span>
            </li>
          </Link>
          <p className={`${styles.paragraph}`}>Lists</p>
          <Link to="/users">
            <li className={`${styles.li}`}>
              <PersonIcon className={`${styles.icon}`} />
              <span className={`${styles.span}`}>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li className={`${styles.li}`}>
              <InventoryIcon className={`${styles.icon}`} />
              <span className={`${styles.span}`}>Products</span>
            </li>
          </Link>
          <Link to="/orders">
            <li className={`${styles.li}`}>
              <ShoppingCartIcon className={`${styles.icon}`} />
              <span className={`${styles.span}`}>Orders</span>
            </li>
          </Link>
          <Link to="/earnings">
            <li className={`${styles.li}`}>
              <MonetizationOnIcon className={`${styles.icon}`} />
              <span className={`${styles.span}`}>Earnings</span>
            </li>
          </Link>
          <p className={`${styles.paragraph}`}>Useful</p>
          <Link to="/stats">
            <li className={`${styles.li}`}>
              <StackedLineChartIcon className={`${styles.icon}`} />
              <span className={`${styles.span}`}>Stats</span>
            </li>
          </Link>
          <li className={`${styles.li}`}>
            <NotificationsIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Notification</span>
          </li>
          <p className={`${styles.paragraph}`}>Service</p>
          <li className={`${styles.li}`}>
            <HealthAndSafetyIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>System Health</span>
          </li>
          <li className={`${styles.li}`}>
            <PsychologyIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Logs</span>
          </li>
          <li className={`${styles.li}`}>
            <SettingsIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Settings</span>
          </li>
          <p className={`${styles.paragraph}`}>User</p>
          <Link to="/users/test">
            <li className={`${styles.li}`}>
              <AccountCircleIcon className={`${styles.icon}`} />
              <span className={`${styles.span}`}>Profile</span>
            </li>
          </Link>
          <li className={`${styles.li}`}>
            <LogoutIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="m-[10px] flex items-center">
        <div
          className={`${styles.colorOptions} bg-secondary`}
          onClick={() => setLightMode(!lightMode)}
        ></div>
        <div
          className={`${styles.colorOptions} bg-primary`}
          onClick={() => setDarkMode(!darkMode)}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
