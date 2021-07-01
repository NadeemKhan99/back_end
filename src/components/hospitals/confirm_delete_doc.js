import React, { useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import Header from './../header.js'
import axios from 'axios'

function DeleteDoc() {



    let [backed, setbacked] = useState(false)



    let { state } = useLocation()








    let [check, setcheck] = useState(false)
    function submitting(e) {
        e.preventDefault()
        var headers = {
            "Content-Type": "application/json;charset=UTF-8",
        }

        let values = {
            user_id: state.data.user_id,
            hospital_id: state.data.hospital_id,
            status: state.data.status
        }


        axios.post(
            'http://localhost/admin_panel/delete_doctor.php', values, headers
        ).then(
            res => {
                if (res.data.signal === 1) {


                    setcheck(true)
                    alert(res.data.id)
                }
                else
                    alert(res.data.id)
            }
        );
    }







    if (backed || check) {
        return (
            <Redirect to="/all_hospitals" />
        )
    }


    return (
        <div>
            <Header />

            <div className="doctor_form"  >
                <div className="mb-2 p-2">
                    <h1>Are you sure?</h1>
                </div>
                <div className="row mb-2 p-2">
                    <div className="col-lg-6 col-sm-6">
                        <button onClick={() => setbacked(true)} className="btn btn-secondary float-right">Back</button>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <button onClick={(e) => submitting(e)} className="btn btn-success float-left">Update</button>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default DeleteDoc;





























