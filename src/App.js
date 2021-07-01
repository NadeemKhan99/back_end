import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminLogin from "./components/adminlogin";
import AdminHome from './components/adminhome';
import AllUsers from './components/patients/show_all_users';
import UpdateStatus from './components/patients/update_status';
import AllDoctors from './components/doctors/show_all_doctors';
import DoctorInfo from './components/doctors/doctor_info';
import AllLabs from './components/labs/show_all_labs';
import LabInfo from './components/labs/lab_info';
import UpdatePassword from './components/account_change/change_password';
import NewAdmin from './components/account_change/add_new_admin';
import AllAdmins from './components/account_change/admin_accounts';
import AllHospitals from './components/hospitals/show_all_hospitals';
import HospitalInfo from './components/hospitals/hospitals_info';
import DeleteDoc from './components/hospitals/confirm_delete_doc';
import AddCity from './components/cities/add.city';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AdminLogin} />
            <Route exact path="/adminhome" component={AdminHome} />
            <Route exact path="/all_users" component={AllUsers} />
            <Route exact path="/all_doctors" component={AllDoctors} />
            <Route exact path="/doc_info" component={DoctorInfo} />
            <Route exact path="/lab_info" component={LabInfo} />
            <Route exact path="/all_labs" component={AllLabs} />
            <Route exact path="/change_it" component={UpdateStatus} />
            <Route exact path="/change_password" component={UpdatePassword} />
            <Route exact path="/new_admin" component={NewAdmin} />
            <Route exact path="/admins" component={AllAdmins} />
            <Route exact path="/all_hospitals" component={AllHospitals} />
            <Route exact path="/hospital_info" component={HospitalInfo} />
            <Route exact path="/delete_doc" component={DeleteDoc} />
            <Route exact path="/cities" component={AddCity} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
