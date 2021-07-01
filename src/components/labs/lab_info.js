import React, { useState, useEffect, Fragment } from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import Header from './../header.js'
import './../doctors/doctor_info.css'
import { get_lab_info } from './../api/my_requests'

function LabInfo() {


    let history = useHistory()
    let [doc_data, set_doc_data] = useState()


    let { state } = useLocation()




    let values = {
        user_id: state.data.user_id
    }



    // let [check, setcheck] = useState(false)


    useEffect(() => {
        async function get_info(values) {
            let real_data = await get_lab_info(values);

            set_doc_data(real_data);
        }
        get_info(values);
    }, [state]);







    let rows = []
    let i = 1

    if (doc_data) {
        while (i <= doc_data['counter']) {
            rows.push(i)
            i++
        }
    }



    function backing()
    {
        history.push({
            pathname: "/all_labs"
        })
    }








    return (
        <div>
            <Header />
            <h2 align="center">Lab Info</h2>
            <div className="review_form">
                <div className="row">
                    <div className="col">
                        <h5>{state.data.name}</h5>
                    </div>
                    <div className="col">
                        <h5>{state.data.email}</h5>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <h5>0{state.data.phone}</h5>
                    </div>
                    <div className="col">
                        <h5>{state.data.address}</h5>
                    </div>
                    <div className="col">
                        <h5>{state.data.city}</h5>
                    </div>
                </div>
                <hr></hr>

                {
                    !doc_data ? <h2>Loading...</h2>
                        :
                        <Fragment>
                
                            <div className="row">

                                <div className="col">
                                    <span>Status <h5>{state.data.status}</h5></span>
                                </div>
                                <div className="col">
                                    Services<span><h5>{doc_data.services}</h5></span>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col">
                                    Fee<span><h5>{doc_data.fee}</h5></span>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">

                                <div className="col">
                                    <span>Start <h5>{doc_data.start}</h5></span>
                                </div>
                                <div className="col">
                                    End<span><h5>{doc_data.end}</h5></span>
                                </div>
                            </div>                            
                        </Fragment>

                }









            </div>
            <button onClick={()=>backing()}  className="btn btn-primary backed">Back</button>

        </div>
    );
}
export default LabInfo;





























