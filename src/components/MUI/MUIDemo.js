import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function MUIDemo() {
    return (
        <div className='container-fluid'>
            <h2>bootstrap Input</h2>
            <div className='w-25'>
                <label className='form-label'>User Name</label>
                <div>
                    <input type='text' className='form-control'></input>
                </div>
            </div>
            <h2>Material Input</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </div>
    )
}

export default MUIDemo
