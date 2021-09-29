import logo from './logo.svg';
import './App.css';
import TopBar from './layouts/NavBar/TopBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Explore from './views/Explore/Explore';
import MyPage from './views/MyPage/MyPage';
import MyBids from './views/MyBids/MyBids';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
          <Switch>
            <Route exact path="/">
              <Explore />
            </Route>
          
            <Route path="/my-page">
              <MyPage />
            </Route>

            <Route path="/my-bids">
              <MyBids />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
