import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/adminpage";
import Login from "./pages/login";
import Country from "./pages/addcountry";
import City from "./pages/addcity";
import Zone from "./pages/addzone";
import Property from "./pages/addproperty";
import Category from "./pages/addcategory";
import FindRules from "./pages/findrules";
import Countries from "./components/countries";
import Cities from "./components/cities";
import Zones from "./components/zones";
import Properties from "./components/properties";
import Categories from "./components/categories";
import Zonerules from "./components/zoneRules";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/adminpage" component={AdminPage} />
      <Route path="/addcountry" component={Country}/>
      <Route path="/addcity" component={City}/>
      <Route path="/addzone" component={Zone}/>
      <Route path="/addproperty" component={Property}/>
      <Route path="/addcategory" component={Category}/>
      <Route path="/countries" component={Countries} />
      <Route path="/findrules" component={FindRules} />
      <Route path="/cities" component={Cities} />
      <Route path="/zones" component={Zones} />
      <Route path="/properties" component={Properties} />
      <Route path="/categories" component={Categories} />
      <Route path="/zonerules" component={Zonerules} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default App;
