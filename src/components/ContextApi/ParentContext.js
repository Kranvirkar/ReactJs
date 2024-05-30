import React, { useState } from 'react'
import HomeComponent from './HomeComponent'
import UserInfo from './Context'

function ParentContext() {

    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className='container-fluid bg-dark p-4 m-4 text-white'>
            <label>Name - </label>
            <input type='text' onChange={handleChange} value={name} />
            <h2>Parent component</h2>
            <UserInfo.Provider value={name}>
                <HomeComponent />
            </UserInfo.Provider >

        </div>
    )
}

export default ParentContext
