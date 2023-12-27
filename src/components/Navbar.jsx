import {
  SearchIcon,
  LanguageIcon,
  DarkModeIcon,
  FullscreenIcon,
  NotificationsIcon,
  ChatIcon,
  FormatListBulletedIcon,
} from "./icons";
import styles from "./styles";
import avatar from "../assets/avatar.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  let [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  //   document.documentElement.classList.toggle("dark", isDarkMode);
  // };
  return (
    <div
      className={`${styles.borderBottom} h-[50px] flex flex-row items-center text-[14px] text-textColor dark:text-white dark:bg-[#222]`}
    >
      <div className="flex flex-row items-center px-[20px] justify-between w-[100%]">
        <div
          className={`${styles.fullBorder} flex flex-row items-center p-[3px] `}
        >
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-transparent text-[13px]"
          />
          <SearchIcon className={`${styles.navIcons}`} />
        </div>
        <div className="flex flex-row ">
          <div className={`${styles.navItem}`}>
            <LanguageIcon className={`${styles.navIcons}`} />
            <p className="ml-1 dark:text-textColor">English</p>
          </div>
          <div className={`${styles.navItem}`}>
            <DarkModeIcon
              className={`${styles.navIcons}`}
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>
          <div className={`${styles.navItem}`}>
            <FullscreenIcon className={`${styles.navIcons}`} />
          </div>
          <div className={`${styles.navItem} relative`}>
            <NotificationsIcon className={`${styles.navIcons}`} />
            <div className={`${styles.notif}`}>2</div>
          </div>
          <div className={`${styles.navItem} relative`}>
            <ChatIcon className={`${styles.navIcons}`} />{" "}
            <div className={`${styles.notif}`}>1</div>
          </div>
          <div className={`${styles.navItem}`}>
            <FormatListBulletedIcon className={`${styles.navIcons}`} />
          </div>
          <div className={`${styles.navItem}`}>
            <img
              src={avatar}
              alt="avatar"
              className={`${styles.navIcons} w-[30px] h-[30px] rounded-[50%]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
