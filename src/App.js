import loadable from '@loadable/component';
import { Route, Switch } from 'react-router';

// Components
import Loader from "./components/loader";
const Background = loadable(() => import("./components/background"), {fallback: <Loader/>});
const Home = loadable(() => import("./components/home"), {fallback: <Loader/>});
const CssTemplate = loadable(() => import("./components/cssTemplate"), {fallback: <Loader/>});

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Background />
          <Home />
        </Route>
        <Route path="/cssTemplate"
          render={props => <CssTemplate {...props} loadable={loadable} Loader={Loader} />}
        />
      </Switch>
    </div>
  );
}

export default App;