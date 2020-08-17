import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Component/Header/Header'
import HomePage from './Pages/HomePage/HomePage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ReviewPage from './Pages/ReviewPage/ReviewPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import Footer from './Component/Footer/Footer';


function App() {
  return (
  <Router>
     <Header/>
     <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route exact path="/services" component={ServicesPage}/>
       <Route exact path="/about" component={AboutPage}/>
       <Route exact path="/review" component={ReviewPage}/>
       <Route exact path="/contact" component={ContactPage}/>
     </Switch>
     <Footer/>
  </Router>
  );
};
export default App;
