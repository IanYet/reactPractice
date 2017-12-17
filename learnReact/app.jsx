import React from 'react'
import ReactDOM from 'react-dom'

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            login
        </button>
    )
}
function LogouButton(props) {
    return (
        <button onClick={props.onClick}>
            logou
        </button>
    )
}

class LoginControl extends React.Component {
    
}