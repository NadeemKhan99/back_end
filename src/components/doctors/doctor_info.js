import React, { useState, useEffect, Fragment } from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import Header from './../header.js'
import './doctor_info.css'
import { get_doctor_info } from './../api/my_requests'

function DoctorInfo() {


    let history = useHistory()
    let [doc_data, set_doc_data] = useState()


    let { state } = useLocation()




    let values = {
        user_id: state.data.user_id,
    }


    useEffect(() => {
        async function get_info(values) {
            let real_data = await get_doctor_info(values);

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
            pathname: "/all_doctors"
        })
    }








    return (
        <div>
            <Header />
            <h2 align="center">Doctor Info</h2>
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
                    !doc_data ? ""
                        :
                        <Fragment>
                            <div className="row">
                                <div className="col">
                                    Experience<h5>{doc_data.experience}</h5>
                                </div>
                                <div className="col">
                                    Fee<h5>{doc_data.fees}</h5>
                                </div>
                                <div className="col">
                                    Qualification<h5>{doc_data.qualification}</h5>
                                </div>
                            </div>

                            <hr></hr>
                            <div className="row">

                                <div className="col">
                                    <span>status: <h5>{state.data.status}</h5></span>
                                </div>
                                <div className="col">
                                    Speciality<span><h5>{doc_data.speciality}</h5></span>
                                </div>
                            </div>
                            <hr></hr>
                        </Fragment>

                }




                {
                    doc_data ?
                        <div>


                            {
                                doc_data.clinic === "nothing" ?
                                    <div className="col">
                                        <h5>No clinic</h5>
                                    </div>
                                    :
                                    <Fragment>
                                        <div className="row">
                                            <div className="col">
                                                <h5>{doc_data.clinic}</h5>
                                            </div>

                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col">
                                                Start
                                                    <h5>{doc_data.start[0]}</h5>
                                            </div>
                                            <div className="col">
                                                End
                                                    <h5>{doc_data.end[0]}</h5>
                                            </div>
                                        </div>
                                    </Fragment>
                            }


                            <hr></hr>
                            <h3 >Hospital Sittings</h3>
                            <hr></hr>
                            {
                                doc_data.hospital_name.length !== 0 ?
                                    rows.map((data, key) => {
                                        return (
                                            <div className="row" key={key}>
                                                <div className="col">
                                                    {doc_data.hospital_name[key] ? <h5>{doc_data.hospital_name[key]}</h5> : ""}
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <h6>No sittings</h6>
                            }


                        </div>


                        :
                        ""
                }







            </div>
            <button onClick={()=>backing()}  className="btn btn-primary backed">Back</button>

        </div>
    );
}
export default DoctorInfo;





























