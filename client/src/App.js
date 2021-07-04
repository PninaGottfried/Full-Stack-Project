import './App.css';
import Error404 from './component/Error404/error404'
import Home from './component/home/Home';
import Shop from './component/shop/shop'
import About from './component/About/About'
import Status from './component/status/status'
import Nav from './component/nav/nav';
import Footer from './component/footer/footer'
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div dir="rtl">
      <Nav />
      <div className="app-body">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Shop' component={Shop} />
            <Route exact path='/StatusCheck' component={Status} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
