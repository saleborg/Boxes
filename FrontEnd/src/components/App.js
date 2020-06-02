import React from "react";
import { Route, HashRouter } from "react-router-dom";
import AddBoxPage from "./boxes/AddBoxPage"; // eslint-disable-line import/no-named-as-default
import ListBoxesPage from "./boxes/ListBoxesPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <HashRouter>
        <Route exact path="/" component={ListBoxesPage} />
        <Route path="/addbox" component={AddBoxPage} />
        <Route path="/listboxes" component={ListBoxesPage} />
      </HashRouter>

      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
