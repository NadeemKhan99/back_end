import React, { useState, useEffect, Fragment } from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import Header from './../header.js'
import axios from 'axios'
// import './doctor_info.css'
import { get_cities } from './../api/my_requests'

function AddCity() {


    let history = useHistory()

    let [city,setcity] = useState("")

    let [doc_data, set_doc_data] = useState()


    useEffect(() => {
        async function get_info() {
            let real_data = await get_cities();

            set_doc_data(real_data);
        }
        get_info();
    }, [city,doc_data]);





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
            pathname: "/adminhome"
        })
    }

    function insert_data(e)
    {
        e.preventDefault()
        if(city.trim())
        {
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }
    
            let values = {
                user_id: city.toLowerCase()
            }
    
    
            axios.post(
                'http://localhost/admin_panel/add_city.php', values, headers
            ).then(
                res => {
                    if (res.data.signal === 1) {
    
                        alert(res.data.id)
                    }
                    else
                        alert(res.data.id)

                    setcity("")
                }
            );

        }
        else{
            alert("Enter data in the field")
        }
    }


    function remove_it(e,key)
    {
        e.preventDefault()
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }
    
            let values = {
                city: doc_data.cities[key]
            }
    
    
            axios.post(
                'http://localhost/admin_panel/remove_city.php', values, headers
            ).then(
                res => {
                    if (res.data.signal === 1) {
    
                        alert(res.data.id)
                    }
                    else
                        alert(res.data.id)

                    setcity("")
                }
            );

    }













    return (
        <div>
            <Header />
            <h2 align="center">ADD City</h2>
            <div className="review_form">
                <div className="row">
                    <div className="col col-10">
                        <input type="text" className="form-control" value={city} onChange={(e)=>setcity(e.target.value)} placeholder="Enter city..."/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary float-left" onClick={(e)=>insert_data(e)}>Enter</button>
                    </div>
                </div>
            </div>
            <div>    





                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">City</th>
                        <th scope="col">Change Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        rows.map((data, key) => {

                            return (
                                <tr key={key}>
                                    <th scope="row">{data}</th>
                                    <td>{doc_data.cities[key]}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary" onClick={(e)=>remove_it(e,key)}>Remove</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })

                    }


                </tbody>
            </table>



            </div>
            <button onClick={()=>backing()}  className="btn btn-primary backed">Back</button>

        </div>
    );
}
export default AddCity;





























