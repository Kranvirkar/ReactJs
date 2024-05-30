import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export default function RoutingComponent() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <h2>Tutorial Home</h2>
                <ol>
                    <li><Link to="html">HTML</Link></li>
                    <li><Link to="css">CSS</Link></li>
                    <li><Link to="js">JavaScript</Link></li>
                </ol>
                <hr size='4'></hr>

                <Routes>
                    <Route path='/' element={
                        <div>
                            <h2>Welcome to tutorial Home</h2>
                        </div>
                    }
                    /><Route path='*' element={
                        <div>
                            <h2>Page Not Found</h2>
                        </div>
                    }
                    />
                    <Route path='html' element={
                        <div>
                            <h2>HTML</h2>
                            <p>It is Mark up Language</p>
                        </div>} />
                    <Route path='css' element=
                        {
                            <div>
                                <h2>CSS</h2>
                                <p>It is Cascading StyleSheet</p>
                            </div>} />
                    <Route path='js' element=
                        {
                            <div>
                                <h2>JavaScript</h2>
                                <p>It is Scripting Language</p>
                            </div>} />
                    <Route path='*' element={
                        <div>
                            <h2>Page Not Found</h2>
                        </div>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
