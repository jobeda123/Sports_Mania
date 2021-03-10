import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/leagueDetail/id=:idLeague">
            <LeagueDetail />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
