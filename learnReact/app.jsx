import React from 'react'
import ReactDOM from 'react-dom'

class Popper extends React.Component{

    constructor(){
        super()
        this.state = {name: "react event"}
    }

    preventPop(name, e){
        e.preventDefault()
        alert(name)
    }

    render() {
        return (
            <div>
                <p>hello</p>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>click</a>
            </div>
        )
    }
}

ReactDOM.render(
    <Popper />,
    document.getElementById('root')
)