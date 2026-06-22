import {
  SearchIcon,
  LanguageIcon,
  DarkModeIcon,
  FullscreenIcon,
  NotificationsIcon,
  ChatIcon,
  FormatListBulletedIcon,
} from "./Icons";
import styles from "./styles";
import avatar from "../assets/avatar.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const notifications = [
  {
    title: "New order received",
    detail: "ASUS ROG Strix order is ready for review.",
    time: "5 min ago",
  },
  {
    title: "Inventory alert",
    detail: "Dell XPS 13 stock is running low.",
    time: "18 min ago",
  },
];

const messages = [
  {
    from: "Maya Chen",
    detail: "Can you confirm the updated dashboard totals?",
    time: "12 min ago",
  },
];

const Navbar = () => {
  let [darkMode, setDarkMode] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel((currentPanel) => (currentPanel === panel ? null : panel));
  };

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
      className={`${styles.borderBottom} flex h-[50px] flex-row items-center text-[14px] text-textColor dark:bg-[#222] dark:text-white`}
    >
      <div className="flex w-[100%] flex-row items-center justify-between px-[20px]">
        <div
          className={`${styles.fullBorder} flex flex-row items-center p-[3px] `}
        >
          <input
            type="text"
            placeholder="Search..."
            className="border-none bg-transparent text-[13px] outline-none"
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
            <button
              type="button"
              aria-label="Show notifications"
              className="flex border-none bg-transparent p-0 text-navItemColor dark:text-textColor"
              onClick={() => togglePanel("notifications")}
            >
              <NotificationsIcon className={`${styles.navIcons}`} />
            </button>
            <div className={`${styles.notif}`}>2</div>
            {openPanel === "notifications" && (
              <div className="absolute right-0 top-[32px] z-20 w-[280px] rounded-md border border-borderColor bg-white p-3 text-navItemColor shadow-lg dark:border-navItemColor dark:bg-[#222] dark:text-textColor">
                <h3 className="mb-2 text-[14px] font-bold">Notifications</h3>
                {notifications.map((notification) => (
                  <div
                    key={notification.title}
                    className="border-b border-solid border-borderColor py-2 last:border-b-0 dark:border-navItemColor"
                  >
                    <p className="text-[13px] font-semibold">
                      {notification.title}
                    </p>
                    <p className="text-[12px] text-textColor">
                      {notification.detail}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400">
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={`${styles.navItem} relative`}>
            <button
              type="button"
              aria-label="Show messages"
              className="flex border-none bg-transparent p-0 text-navItemColor dark:text-textColor"
              onClick={() => togglePanel("messages")}
            >
              <ChatIcon className={`${styles.navIcons}`} />
            </button>
            <div className={`${styles.notif}`}>1</div>
            {openPanel === "messages" && (
              <div className="absolute right-0 top-[32px] z-20 w-[280px] rounded-md border border-borderColor bg-white p-3 text-navItemColor shadow-lg dark:border-navItemColor dark:bg-[#222] dark:text-textColor">
                <h3 className="mb-2 text-[14px] font-bold">Messages</h3>
                {messages.map((message) => (
                  <div
                    key={message.from}
                    className="border-b border-solid border-borderColor py-2 last:border-b-0 dark:border-navItemColor"
                  >
                    <p className="text-[13px] font-semibold">
                      {message.from}
                    </p>
                    <p className="text-[12px] text-textColor">
                      {message.detail}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-400">
                      {message.time}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={`${styles.navItem}`}>
            <FormatListBulletedIcon className={`${styles.navIcons}`} />
          </div>
          <Link to="/users/test" className={`${styles.navItem}`}>
            <img
              src={avatar}
              alt="avatar"
              className={`${styles.navIcons} h-[30px] w-[30px] rounded-[50%]`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
