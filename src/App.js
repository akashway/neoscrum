import React from 'react';
import './App.css';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard'
import SubmitDashboard from './components/SubmitDashboard'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
    <Router>

      <div className="App">
        {/* <RegistrationPage/> */}
        {/* <Dashboard/> */}
        {/* <login/> */}
        <Switch>
        <Route path="/" exact component={RegistrationPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/submitdashboard" exact component={SubmitDashboard}/>
        <Route path="/forgetpassword" exact component={ForgetPassword}/>
        </Switch>
      </div>

    </Router>
  );
}

 export default App;

