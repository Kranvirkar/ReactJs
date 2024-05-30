import React, { useContext } from 'react'
import VideoComponent from './VideoComponent'
import UserInfo from './Context'

function HomeComponent() {

    const userDetail = useContext(UserInfo)

    return (
        <div className='bg-warning text-dark p-3'>
            <h2>Home component - {userDetail}</h2>
            <VideoComponent />
        </div>
    )
}

export default HomeComponent
