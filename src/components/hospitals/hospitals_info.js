import React, { useState, useEffect, Fragment } from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import Header from './../header.js'
import './../doctors/doctor_info.css'
import { get_hospital_info } from './../api/my_requests'

function HospitalInfo() {


    let history = useHistory()
    let [doc_data, set_doc_data] = useState()


    let { state } = useLocation()



    let hospital_id = state.data.email


    let values = {
        user_id: state.data.user_id,
    }


    useEffect(() => {
        async function get_info(values) {
            let real_data = await get_hospital_info(values);

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
            pathname: "/all_hospitals"
        })
    }



    console.log(doc_data)


    function changeStatus(e, key) {

        e.preventDefault()

        let my_data = {
            user_id: doc_data.user_id[key],
            hospital_id: hospital_id,
            status: doc_data.status[key]
        }

        


        history.push({
            pathname: "/delete_doc",
            state: {
                data: my_data
            }
        })


    }







    return (
        <div>
            <Header />
            <h2 align="center">Hospital Info</h2>
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
                                    Hospital Name<h5>{doc_data.hospital_name}</h5>
                                </div>
                                <div className="col">
                                    # of doctors<h5>{doc_data.no_doc}</h5>
                                </div>
                            </div>

                            <hr></hr>
                            <div className="row">

                                <div className="col">
                                    <span>status: <h5>{state.data.status}</h5></span>
                                </div>
                                <div className="col">
                                    Treatment<span><h5>{doc_data.treated}</h5></span>
                                </div>
                            </div>
                            <hr></hr>
                        </Fragment>

                }

            </div>
            <button onClick={()=>backing()}  className="btn btn-primary backed">Back</button>

            <h3 align="center">Doctors Detail</h3>
            <p>Number of doctors:   <b>{doc_data? doc_data.status.length : "0"}</b></p>


            {
                doc_data ?

                    rows.map((data, key) => {
                        return (
                            <div className="review_form" key={key}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <b>{doc_data.name[key]}</b>
                                        </div>
                                        <div className="col">
                                            <b>{doc_data.email[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            +92 {doc_data.phone[key]}
                                        </div>
                                        <div className="col">
                                            {doc_data.address[key]}
                                        </div>
                                        <div className="col">
                                            <b>{doc_data.city[key]}</b>
                                        </div>
                                    </div>
                                </div>


                                {
                                    doc_data.status[key] === "cancel" ? 
                                    <input type="button" className="btn btn-primary" onClick={(e)=> changeStatus(e,key)} value="Active Account"/>
                                    :
                                    <input type="button" className="btn btn-danger" onClick={(e)=> changeStatus(e,key)} value="Cancel Account"/>

                                }

                            </div>
                        )

                    })
                    :
                    <div className="review_form">
                        <h1>No doctors yet!</h1>
                    </div>
            }


        </div>
    );
}
export default HospitalInfo;





























