import React, { useState } from 'react'
import {Redirect,useLocation } from 'react-router-dom'
import Header from './../header.js'
import axios from 'axios'

function UpdateStatus() {



    let [backed,setbacked] = useState(false)



    let {state} = useLocation()

    let user_doc_hos_lab = state.user
    

    let path_name = ["/all_users","/all_doctors","/all_hospitals","/all_labs","/admins"]

    




    let [check, setcheck] = useState(false)
    function submitting(e) {
        e.preventDefault()
        var headers = {
            "Content-Type": "application/json;charset=UTF-8",
        }

        let values = {
            user_id: state.data.user_id,
            status: state.data.status,
            user: state.user
        }

    


        axios.post(
            'http://localhost/admin_panel/change_user_status.php', values, headers
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







    if(backed || check)
    {

    
            return(
                <Redirect to={path_name[user_doc_hos_lab - 1]} />
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
                            
                            <button onClick={(e) => submitting(e)} className="btn btn-success float-right">Change</button>
                            

                        </div>
                        <div className="col-lg-6 col-sm-6">
                            
                            <button onClick={()=>setbacked(true)} className="btn btn-secondary float-left">Back</button>
                            

                        </div>
                    </div>

            
            </div>
            {/* <button className="btn btn-secondary" onClick={() => callback(false)}>Back</button> */}
            {/* <Footer /> */}
        </div>
    );
}
export default UpdateStatus;





























