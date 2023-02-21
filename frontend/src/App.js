import { createBrowserRouter, Route,Router } from "react-router-dom";
import NoteListPage from "./Pages/NoteListPage";
import UserListPage from "./Pages/UserListPage";
import "./App.css";
import Header from "./Components/Header";
import AddButton from "./Components/AddButton";

function App() {
  return (
      <div className="container ">
        <div className="app">
          <Header />
          <NoteListPage/>
          {/* <Route path="
          /user" component={UserListPage} /> */}
          <AddButton />
        </div>
      </div>
  );
}

export default App;
