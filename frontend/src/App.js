import "./App.css";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Switch>
            <Route path="/" exact>
              <Content />
            </Route>
            <Route path="/side">
              <Sidebar />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
