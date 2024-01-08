import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
import { productInputs, userInputs } from "./components/formSource";
import PropTypes from "prop-types";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<Login />} />
      <Route
        index
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="users">
        <Route
          index
          element={
            <RequireAuth>
              <List />
            </RequireAuth>
          }
        />
        <Route
          path=":userId"
          element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <New inputs={userInputs} title="Add New User" />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="products">
        <Route
          index
          element={
            <RequireAuth>
              <List />
            </RequireAuth>
          }
        />
        <Route
          path=":productId"
          element={
            <RequireAuth>
              <Single />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <New inputs={productInputs} title="Add New Product" />
            </RequireAuth>
          }
        />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

RequireAuth.propTypes = {
  children: PropTypes.any.isRequired,
};
export default App;
