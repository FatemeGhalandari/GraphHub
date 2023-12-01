import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>
      <Route path="users">
        <Route index element={<List />} />
        <Route path=":productId" element={<Single />} />
        <Route path="new" element={<New />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
