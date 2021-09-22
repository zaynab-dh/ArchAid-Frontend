import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/adminpage";
import Login from "./pages/login";
import Country from "./pages/addcountry";
import City from "./pages/addcity";
import Zone from "./pages/addzone";
import Property from "./pages/addproperty";
import Category from "./pages/addcategory";
import EditCountry from "./pages/editcountry";
import EditCity from "./pages/editcity";
import FindRules from "./pages/findrules";
import ProjectTest from "./pages/projecttest";
import Countries from "./components/countries";
import Countries1 from "./components/countries1";
import Cities from "./components/cities";
import Cities1 from "./components/cities1";
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
      <Route path="/editcountry/:id" component={EditCountry}/>
      <Route path="/editcity/:id" component={EditCity}/>
      <Route path="/countries" component={Countries} />
      <Route path="/countries1" component={Countries1} />
      <Route path="/findrules" component={FindRules} />
      <Route path="/projecttest" component={ProjectTest} />
      <Route path="/cities" component={Cities} />
      <Route path="/cities1" component={Cities1} />
      <Route path="/zones" component={Zones} />
      <Route path="/properties" component={Properties} />
      <Route path="/categories" component={Categories} />
      <Route path="/zonerules/:id" component={Zonerules} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default App;
