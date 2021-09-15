import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Countries from "./components/countries";
import Cities from "./components/cities";
import Properties from "./components/properties";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/countries" component={Countries} />
      <Route path="/cities" component={Cities} />
      <Route path="/properties" component={Properties} />
    </Switch>
  );
};

export default App;
