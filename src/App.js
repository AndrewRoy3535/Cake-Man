import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./component/Navbar/Navbar";
import Checkout from "./pages/Checkout";
import SignUpAndSignIn from "./pages/signUpAndSignIn";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='py-24'>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/checkout' component={Checkout} exact />
        <Route path='/Login' component={SignUpAndSignIn} exact />
      </Switch>
    </div>
  );
}

export default App;
