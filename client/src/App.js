
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";

import './global.css'
import Register from "./pages/register/register";
import Student from "./pages/student/student";
import Recovery from "./pages/recovery/recovery";
import Explore from "./components/explore/explore";
import Root from "./pages/root/root";

const App = () => {
  return(
      <BrowserRouter>
          <Switch>
              <Route path={'/'} exact>
                  <Redirect to={'/login'} />
              </Route>
              <Route path={'/login'} component={Login} />
              <Route path={'/register'} component={Register} />
              <Route path={'/home'}>
                  <Root> <Explore /> </Root>
              </Route>
              <Route path={'/student-register'} component={Student} />
              <Route path={'/recovery'} component={Recovery} />
          </Switch>
      </BrowserRouter>
  )
}

export default App;
