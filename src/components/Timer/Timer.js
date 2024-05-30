import React, { useState, useEffect } from 'react';
const Timer = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);
    return (
        <div>
            Elapsed Time: { formattedTime }
        </div>
    );
};
export default Timer;