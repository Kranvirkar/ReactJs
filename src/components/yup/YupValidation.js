import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

function YupValidation() {

    const formik = useFormik({
        initialValues: {
            "UserName": '',
            "Age": 0,
            "City": "",
            "Mobile": ""
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            alert(JSON.stringify(values))
        },
        validationSchema: yup.object({
            "UserName": yup.string()
                .required("UserName Required")
                .min(4, "Name to short")
                .max(10, "Name to Long.."),
            "Age": yup.number()
                .required("Age Required"),
            "Mobile": yup.string()
                .matches(/\+91\d{10}/, "Invalid Mobile +91 with 10 digits")

        })
    })
    return (
        <div className='container-fluid'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Formic Yup Register</h2>
                <dl>
                    <dt> User Name</dt>
                    <dd> <input type='text' name='UserName' onChange={formik.handleChange} ></input></dd>
                    <dd className='text-danger'>{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type='texts' name='Age' onChange={formik.handleChange} ></input></dd>
                    <dd className='text-danger'>{formik.errors.Age}</dd>

                    <dt>City</dt>
                    <dd>
                        <select name='City' onChange={formik.handleChange}>
                            <option value="-1">Choose City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className='text-danger'>{formik.errors.City}</dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input type='text' name='Mobile' onChange={formik.handleChange} ></input>
                    </dd>
                    <dd className='text-danger'>{formik.errors.Mobile}</dd>

                    <button>Register</button>
                </dl>
            </form>
        </div>
    )
}

export default YupValidation
