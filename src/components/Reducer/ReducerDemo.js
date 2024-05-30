import React, { useReducer } from 'react'

let initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case "join":
            return { count: state.count + 1 }
        case "exit":
            return { count: state.count - 1 }
    }
}

function ReducerDemo() {
    const [state, distpatch] = useReducer(reducer, initialState);

    function handleJoinClick() {
        distpatch({ type: 'join' })
    }

    function handleExitClick() {
        distpatch({ type: 'exit' })
    }

    return (
        <div className='container-fluid'>
            <h3>Video Streaming</h3>
            <div className='bg-primary text-white p-4 w-25'>
                ...buffering video...
            </div>
            <div className='mt-4 mb-4'>
                Live Count :{state.count} viewing
            </div>
            <div className='mt-4'>
                <button onClick={handleJoinClick}>Join</button>
                <button onClick={handleExitClick}>Exit</button>
            </div>
        </div>
    )
}

export default ReducerDemo
