import { Button } from "@mui/material";
import { EmailIcon, VpnKeyIcon } from "../components/icons";
import styles from "../components/styles";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center h-[100vh] bg-lightGreen">
      <form
        noValidate
        autoComplete="off"
        className={styles.loginForm}
        onSubmit={handleSubmit}
      >
        <h2 className={styles.loginHeading}>User Login</h2>
        <div className="border-solid border-2 border-darkGreen flex flex-row items-center p-[3px]">
          <EmailIcon className={`${styles.navIcons} text-darkGreen m-2`} />
          <input
            type="email"
            placeholder="Email"
            className={styles.loginInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-solid border-2 border-darkGreen flex flex-row items-center p-[3px] ">
          <VpnKeyIcon className={`${styles.navIcons} text-darkGreen m-2`} />
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "darkGreen",
            width: "350px",
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
