
import React, { useState } from 'react'

function Formdemo() {

    const [userDetails, setUserDetails] = useState({ "UserName": '', "Age": 0, "City": "", "Mobile": "" })
    const [errors, setErrors] = useState({ "UserName": '', "Age": "", "City": "", "Mobile": "" })
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify(userDetails))
        alert(JSON.stringify(userDetails))
    }

    function handleUserName(e) {
        if (e.target.value == '') {
            setErrors({
                UserName: "User Name Required",
                Age: errors.Age,
                City: errors.City,
                Mobile: errors.Mobile
            })
        } else {
            setErrors({
                UserName: ''
            })
            setUserDetails({
                UserName: e.target.value,
                Age: userDetails.Age,
                City: userDetails.City,
                Mobile: userDetails.Mobile
            })
        }
    }

    function handleAgeChange(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Age: e.target.value,
            City: userDetails.City,
            Mobile: userDetails.Mobile
        })
    }

    function handleCityChange(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            City: e.target.value,
            Mobile: userDetails.Mobile
        })
    }

    function handleMobileChange(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            City: userDetails.Mobile,
            Mobile: e.target.value
        })
    }


    return (
        <div className='container-fluid'>
            <form onSubmit={handleFormSubmit}>
                <dl>
                    <dt> User Name</dt>
                    <dd> <input type='text' name='UserName' onChange={handleUserName}></input></dd>
                    <dd className='text-danger'>{errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type='number' name='Age' onChange={handleAgeChange}></input></dd>
                    <dt>City</dt>
                    <dd>
                        <select name='City' onChange={handleCityChange}>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type='text' name='Mobile' onChange={handleMobileChange}></input>
                    </dd>

                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Formdemo
