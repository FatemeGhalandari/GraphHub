import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import PropTypes from "prop-types";

// initial state
const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// create context
const AuthContext = createContext(INITIAL_STATE);

// provider component
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]); //whenever the current user changed, save the details to local storage

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
export { AuthContext, AuthProvider };
