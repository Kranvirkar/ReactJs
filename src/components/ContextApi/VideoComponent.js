import React, { useContext } from 'react'
import UserInfo from './Context'

function VideoComponent() {

    const userDetail = useContext(UserInfo)
    console.log(userDetail)
    return (
        <div className='bg-danger text-text-white p-2'>
            <h2>Video Component - {userDetail}</h2>
        </div>
    )
}

export default VideoComponent
