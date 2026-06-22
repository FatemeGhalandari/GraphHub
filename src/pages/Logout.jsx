import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { isDemoMode } from "../config/appMode";

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    const out = async () => {
      try {
        // const currentUser = auth.currentUser;
        // const userId = currentUser.uid;
        if (auth?.currentUser) {
          await auth.signOut();
        }
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("user");
        navigate(isDemoMode ? "/" : "/login");
      } catch (error) {
        console.error("Error logging out:", error.message);
        dispatch({ type: "LOGOUT" });
        navigate(isDemoMode ? "/" : "/login");
      }
    };
    out();
  }, [dispatch, navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
