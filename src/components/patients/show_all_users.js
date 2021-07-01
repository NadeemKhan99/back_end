import React, { useState, useEffect } from 'react'
import {  Redirect } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Header from './../header.js'
import Footer from './../footer.js'
import { get_all_users } from './../api/my_requests'
import './../../index.css'

function AllUsers() {


    let [backed,setback] = useState(false)
    let history = useHistory()
    let [users, setusers] = useState("")


    let [flag,setflag] = useState(false)

    let patient = 1



    let rows = []
    let i = 1




    useEffect(() => {
        async function get_users(patient) {
            let real_data = await get_all_users(patient);

            setusers(real_data);
        }
        get_users(patient);
    }, [flag]);





    if(backed)
    {
        return(
            <Redirect to="adminhome"/>
        )
    }


    while (i <= users['counter']) {
        rows.push(i)
        i++
    }



    function changeStatus(e,key)
    {

        e.preventDefault()
        let status = ""
        users.status[key] === "active" ? status = "cancel" : status = "active"

        let my_data = {
            user_id: users.user_id[key],
            status: status
        }
        setflag(true)
        


        history.push({
            pathname: "/change_it",
            state:{
                data: my_data,
                user: 1
            }
        })


    }






    return (
        <div>
            <Header />
            <h2 align="center">Users</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Change Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        rows.map((data, key) => {

                            let cancel_approve = ""
                            users.status[key] === "cancel" ? cancel_approve = "approve" : cancel_approve = "block"

                            return (
                                <tr key={key}>
                                    <th scope="row">{data}</th>
                                    <td>{users.name[key]}</td>
                                    <td>{users.email[key]}</td>
                                    <td>{users.address[key]}</td>
                                    <td>{users.city[key]}</td>
                                    <td>0{users.phone[key]}</td>
                                    <td>{users.status[key]}</td>
                                    <td><button className="btn btn-danger" onClick={(e)=>changeStatus(e,key)}>{cancel_approve}</button></td>
                                </tr>
                            )
                        })

                    }


                </tbody>
            </table>

            <button className="btn btn-primary backed"  onClick={()=>setback(true)}>Home</button>

            <Footer />
        </div>
    );
}
export default AllUsers;