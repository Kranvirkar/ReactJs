import React, { useEffect, useState } from 'react'

function CustomHook() {

    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const IntervalId = setInterval(() => {
            setSeconds(pre => pre + 1)
        }, 1000)

        return () => clearInterval(IntervalId)
    }, [])
    const formatte = new Date(seconds * 1000).toISOString().substr(14, 5)
    return (
        <div>
            Elapsed Time: {formatte}
        </div>
    )
}

export default CustomHook
