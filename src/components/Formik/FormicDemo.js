import React from 'react'
import { useFormik } from 'formik'


function FormicDemo() {

    function userValidation(formBody) {
        var errors = {};

        if (formBody.UserName == "") {
            errors.UserName = "User Name Required"
        } else if (formBody.UserName.length < 4) {
            errors.UserName = "User Name should more than 4 char"
        } else {
            errors.UserName = ""
        }

        if (isNaN(formBody.Age)) {
            errors.Age = "Age must Number"
        } else {
            errors.Age = ""
        }

        if (formBody.City == "-1") {
            errors.City = "Please Select City"
        } else {
            errors.City = ""
        }

        if (formBody.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = "";
        } else {
            errors.Mobile = "Invalid Mobile"
        }


        return errors
    }


    const formik = useFormik({
        initialValues: {
            "UserName": '',
            "Age": 0,
            "City": "",
            "Mobile": ""
        },
        validate: userValidation,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className='container-fluid'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Register</h2>
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

export default FormicDemo
