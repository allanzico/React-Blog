import React from 'react';
import NavBar from "./components/Layout/NavBar";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./components/Routes/Home";
import About from "./components/Routes/About";
import Contact from "./components/Routes/Contact";
import Post from "./components/Routes/Post";



function App() {
  return (

      <BrowserRouter>
        <div className="App">
          <NavBar/>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/:post_id" component={Post}/>
         </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
