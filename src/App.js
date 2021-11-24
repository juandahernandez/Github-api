import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Home from "./Pages/home/Home";
import Followers from "./Pages/Followers/Followers";
import Following from "./Pages/Following/Following";
import Repos from "./Pages/Repos/Repos";
import Header from "./Components/Custom/Header/Header";
import Error404 from "./Pages/Error404/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:id/following" exact>
            <Following />
          </Route>
          <Route path="/:id/followers" exact>
            <Followers />
          </Route>
          <Route path="/:id/repos" exact>
            <Repos />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*" exact>
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
