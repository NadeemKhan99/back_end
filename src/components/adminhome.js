import React from 'react'
import {Link } from 'react-router-dom'
import Header from './header.js';
import './../css/adminHome.css';
import Footer from './footer.js'
function AdminHome(){
   
        return (
            <div>
                <Header/>
                <div className="adminHome-class">
                    <div className="side-bar">
                        <table className="customers">
                            <thead>
                            <tr>
                                <th className="customers-heading-left">Sr.No</th>
                                <th className="customers-heading-right">Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td><Link to="/all_users">Users</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><Link to="/all_doctors">Doctors</Link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><Link to="/all_hospitals">Hospitals</Link></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><Link to="/all_labs">Labs</Link></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><Link to="/change_password">Change Password</Link></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td><Link to="/new_admin">Add new Admin</Link></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td><Link to="/admins">Admin Accounts</Link></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td><Link to="/cities">Add Cities</Link></td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                
                </div>
                <br></br>
                <br></br>
            <Footer/>
            </div>
        );
    }
export default AdminHome;