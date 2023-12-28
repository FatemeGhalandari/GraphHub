import { Button } from "@mui/material";
import { EmailIcon, VpnKeyIcon } from "../components/icons";
import styles from "../components/styles";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form noValidate autoComplete="off" className={styles.loginForm}>
        <h2 className={styles.loginHeading}>User Login</h2>
        <div className="border-solid border-2 border-darkGreen flex flex-row items-center p-[3px]">
          <EmailIcon className={`${styles.navIcons} text-green m-2`} />
          <input
            type="email"
            placeholder="email"
            className={styles.loginInput}
          />
        </div>
        <div className="border-solid border-2 border-darkGreen flex flex-row items-center p-[3px] ">
          <VpnKeyIcon className={`${styles.navIcons} text-green m-2`} />
          <input
            type="password"
            placeholder="password"
            className={styles.loginInput}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "green",
            width: "300px",
            height: "40px",
            marginTop: "20px",
          }}
        >
          Login
        </Button>
        {error && (
          <span className="text-red-500 text-[13px] m-0 font-bold">
            Wrong email or password!
          </span>
        )}{" "}
      </form>
    </div>
  );
};

export default Login;
