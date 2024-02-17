import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const out = async () => {
      try {
        // const currentUser = auth.currentUser;
        // const userId = currentUser.uid;
        await auth.signOut();
        localStorage.removeItem("user");
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error.message);
        navigate("/login");
      }
    };
    out();
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
