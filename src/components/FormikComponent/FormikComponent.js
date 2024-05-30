import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as yup from 'yup'

function FormikComponent() {
    return (
        <div className='container-fluid'>
            <Formik
                initialValues={{
                    "UserName": '',
                    "Age": 0,
                    "City": "",
                    "Mobile": ""
                }}
                onSubmit={
                    (values) => {
                        alert(JSON.stringify(values))
                    }
                }

                validationSchema={
                    yup.object({
                        "UserName": yup.string().required("UserName Required")
                            .min(4, "Name to short")
                            .max(10, "Name to Long.."),
                        "Age": yup.number()
                            .required("Age Required"),
                        "Mobile": yup.string()
                            .matches(/\+91\d{10}/, "Invalid Mobile +91 with 10 digits")

                    })
                }
            >
                {
                    <Form>
                        <dl>
                            <dt> User Name</dt>
                            <dd> <Field type='text' name='UserName' /></dd>
                            <dd className='text-danger' ><ErrorMessage name='UserName'></ErrorMessage></dd>
                            <dt>Age</dt>
                            <dd><Field type='texts' name='Age' /></dd>
                            <dd className='text-danger'><ErrorMessage name='Age' /></dd>

                            <dt>City</dt>
                            <dd>
                                <Field as="select" name='City' >
                                    <option value="-1">Choose City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                </Field>
                            </dd>
                            <dt>Mobile</dt>
                            <dd>
                                <Field type='text' name='Mobile' />
                            </dd>
                            <dd className='text-danger' ><ErrorMessage name='Mobile'></ErrorMessage></dd>

                            <button>Register</button>
                        </dl>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikComponent
