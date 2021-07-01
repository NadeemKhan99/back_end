import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import "./../doctors/doctor_info.css"
import axios from 'axios';
import Header from './../header'
import Footer from './../footer'
import { Fragment } from 'react';
import { useHistory } from 'react-router';


function NewAdmin() {

    let history = useHistory()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""


        },
        onSubmit: (values) => {
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }


            axios.post(
                'http://localhost/admin_panel/register.php', values, headers
            ).then(
                res => {
                    console.log(res)
                    alert(res.data.id)
                    backing()

                }
            );





        },
        validationSchema: yup.object({
            name: yup.string().matches("^[a-zA-Z ]{1,}[^0-9]$", "Invalid name, only use text").required("This field is required!"),
            email: yup.string().email("Invalid Email").required("This field is required!"),
            password: yup.string().min(6, "Must be greater than 5 digits").max(10, "Must be less than 11 digits").matches("^[a-zA-Z0-9]+$", "Only use alphabets and digits!").required("This field is required!"),



        })
    })


    function backing() {
        history.push({
            pathname: "/adminhome"
        })
    }





    return (
        <Fragment>
            <Header />
            <div className="review_form">
                <form onSubmit={formik.handleSubmit}>
                    <h3>Register New Admin</h3>
                    <div className="mb-2 p-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" values={formik.values.name} onChange={formik.handleChange} autoFocus id="name" placeholder="Enter first name" />
                        {formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
                    </div>


                    <div className="mb-2 p-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" values={formik.values.email} onChange={formik.handleChange} id="email" placeholder="Enter email" />
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" values={formik.values.password} onChange={formik.handleChange} id="password" placeholder="Enter password" />
                        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}
                    </div>

                    <div className="row">
                        <div className="col-6 mb-2 p-2 register_button">
                            <button onClick={()=>backing()} className="btn btn-secondary float-right">Back</button>
                        </div>
                        <div className="col-6 mb-2 p-2 register_button">
                            <button type="submit" className="btn btn-success float-left">Register</button>
                        </div>
                    </div>

                </form>
            </div>
            <Footer />
        </Fragment>
    );
}

export default NewAdmin;