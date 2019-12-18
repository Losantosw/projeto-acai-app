import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import SignIn           from '../src/pages/SignIn/SignIn';
import SignUp           from '../src/pages/SignUp/SignUp';
import ForgotPass       from '../src/pages/ForgotPass/ForgotPass';
import ResetPass        from '../src/pages/ResetPass/ResetPass';

import EditUser         from '../src/pages/User/EditUser';
import ListUser         from '../src/pages/User/ListUser';

import Dashboard        from '../src/pages/Dashboard/Dashboard';

import CreateAcai       from '../src/pages/Acai/CreateAcai';
import EditAcai         from '../src/pages/Acai/EditAcai';
import ListAcai         from '../src/pages/Acai/ListAcai';
import ShowAcai         from '../src/pages/Acai/ShowAcai';

import CreateInfoCup    from '../src/pages/InfoCup/CreateInfoCup';
import EditInfoCup      from '../src/pages/InfoCup/EditInfoCup';
import ListInfoCup      from '../src/pages/InfoCup/ListInfoCup';
import ShowInfoCup      from '../src/pages/InfoCup/ShowInfoCup';

import CreateAdditional from '../src/pages/Additional/CreateAdditional';
import EditAdditional   from '../src/pages/Additional/EditAdditional';
import ListAdditional   from '../src/pages/Additional/ListAdditional';
import ShowAdditional   from '../src/pages/Additional/ShowAdditional';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/forgotpass' component={ForgotPass} />
        <Route exact path='/resetpass' component={ResetPass} />

        <Route exact path='/dashboard' component={Dashboard} />

        <Route exact path='/user/edit/:id' component={EditUser} />
        <Route exact path='/user/list' component={ListUser} />

        <Route path='/acai/create' component={CreateAcai} />
        <Route path='/acai/edit/:id' component={EditAcai} />
        <Route path='/acai/show/:id' component={ShowAcai} />
        <Route path='/acai/list' component={ListAcai}/>

        <Route path='/infocup/create' component={CreateInfoCup} />
        <Route path='/infocup/edit/:id' component={EditInfoCup} />
        <Route path='/infocup/show/:id' component={ShowInfoCup} />
        <Route path='/infocup/list' component={ListInfoCup}/>

        <Route path='/additional/create' component={CreateAdditional} />
        <Route path='/additional/edit/:id' component={EditAdditional} />
        <Route path='/additional/show/:id' component={ShowAdditional} />
        <Route path='/additional/list' component={ListAdditional}/>

      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
