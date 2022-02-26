
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";

import './global.css'
import Register from "./pages/register/register";
import Student from "./pages/student/student";
import Recovery from "./pages/recovery/recovery";
import Explore from "./components/explore/explore";
import Root from "./pages/root/root";
import DetailProduct from "./pages/detail-product/detailProduct";

const App = () => {
  return(
      <BrowserRouter>
          <Switch>
              <Route path={'/'} exact>
                  <Redirect to={'/login'} />
              </Route>
              <Route path={'/login'} component={Login} />
              <Route path={'/register'} component={Register} />
              <Route path={'/student-register'} component={Student} />
              <Route path={'/recovery'} component={Recovery} />
              {/*
                Private Routes
              */}
              <Route path={'/home'} exact>
                  <Root> <Explore /> </Root>
              </Route>
              <Route path={'/home/:product_id'}>
                  <Root>
                      <DetailProduct />
                  </Root>
              </Route>
          </Switch>
      </BrowserRouter>
  )
}

export default App;
