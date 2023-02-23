import NoteListPage from "./Pages/NoteListPage";
import UserListPage from "./Pages/UserListPage";
import "./App.css";
import Header from "./Components/Header";
import AddButton from "./Components/AddButton";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
const router=createBrowserRouter([
  {path:"/", element:<Header/>, errorElement:<ErrorPage/>},
  {path:"/notes", element:<NoteListPage/>},
  {path:"/users", element:<UserListPage/>},
])

function App() {
  return (
      <div className="container ">
        <div className="app">
          <h1>Welcome to Home Page</h1>
          <RouterProvider router={router}/>
        </div>
      </div>
  );
}

export default App;
