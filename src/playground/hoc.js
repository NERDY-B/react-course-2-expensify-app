//Higher Order Component : a component (HOC) that renders another component
// aim of HOC 
//Reuse code
//Render Hijacking
//Props Manipulation
//Abstract state

import React from 'react';
import react from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is info: {props.info}</p>
        {!props.isAuthenticated && <p>Forgot password?!</p>}
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAdmin && <p>This is private info! please dont share</p> }
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {(props.isAuthenticated)? <WrappedComponent {...props}/> : 
            <p>please login to view!</p>}
            
            
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)
// ReactDOM.render(<AdminInfo isAdmin={false} info="these are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="these are the details" />, document.getElementById('app'))