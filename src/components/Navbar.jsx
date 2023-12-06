import {
  SearchIcon,
  LanguageIcon,
  DarkModeIcon,
  FullscreenIcon,
  NotificationsIcon,
  ChatIcon,
  FormatListBulletedIcon,
} from "../components/Icons";
import styles from "./styles";
const Navbar = () => {
  return (
    <div
      className={`${styles.borderBottom} h-[50px] flex flex-row items-center text-[14px] text-textColor`}
    >
      <div className="flex flex-row items-center px-[20px] justify-between w-[100%]">
        <div className="flex flex-row items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-transparent text-[13px]"
          />
          <SearchIcon />
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-row">
            <LanguageIcon />
            <p>English</p>
          </div>
          <div>
            <DarkModeIcon />
          </div>
          <div>
            <FullscreenIcon />
          </div>
          <div>
            <NotificationsIcon />
          </div>
          <div>
            <ChatIcon />
          </div>
          <div>
            <FormatListBulletedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
