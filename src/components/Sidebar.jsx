import {
  DashboardIcon,
  PersonIcon,
  AccountCircleIcon,
  SettingsIcon,
  LogoutIcon,
  StackedLineChartIcon,
  NotificationsIcon,
  HealthAndSafetyIcon,
  LocalShippingIcon,
  InventoryIcon,
  ShoppingCartIcon,
  PsychologyIcon,
} from "./icons";
import styles from "./styles";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-1 border-solid border-r-[0.5px] border-r-borderColor min-h-[100vh] bg-secondary">
      <div
        className={`${styles.borderBottom} h-[50px] flex items-center justify-center`}
      >
        <Link to="/" className={`${styles.logo}`}>
          GraphHub
        </Link>
      </div>
      <div className="pl-[10px]">
        <ul className="list-none p-0 m-0">
          <p className={`${styles.paragraph}`}>Main</p>
          <li className={`${styles.li}`}>
            <DashboardIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Dashboard</span>
          </li>
          <p className={`${styles.paragraph}`}>Lists</p>
          <li className={`${styles.li}`}>
            <PersonIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Users</span>
          </li>
          <li className={`${styles.li}`}>
            <InventoryIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Products</span>
          </li>
          <li className={`${styles.li}`}>
            <ShoppingCartIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Orders</span>
          </li>
          <li className={`${styles.li}`}>
            <LocalShippingIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Delivery</span>
          </li>
          <p className={`${styles.paragraph}`}>Useful</p>
          <li className={`${styles.li}`}>
            <StackedLineChartIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Stats</span>
          </li>
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
          <li className={`${styles.li}`}>
            <AccountCircleIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Profile</span>
          </li>
          <li className={`${styles.li}`}>
            <LogoutIcon className={`${styles.icon}`} />
            <span className={`${styles.span}`}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center m-[10px]">
        <div className={`${styles.colorOptions} bg-secondary`}></div>
        <div className={`${styles.colorOptions} bg-primary`}></div>
      </div>
    </div>
  );
};

export default Sidebar;
