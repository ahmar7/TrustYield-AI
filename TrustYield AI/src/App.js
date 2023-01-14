import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/home/home";
import Services from "./pages/services/services";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
    </div>
  );
}

export default App;
