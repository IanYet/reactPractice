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
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogouClick = this.handleLogouClick.bind(this)
        this.state = {isLoggedIn: true}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogouClick() {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn

        let button = null
        if(isLoggedIn){
            button = <LogouButton onClick={this.handleLogouClick} />
        }else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)