import React from 'react'
import ReactDOM from 'react-dom'

function Clock(props){
    return (
        <div>
            <h1>hello</h1>
            <h2>it is {props.date.toLocaleTimeString()}</h2>
        </div>
    )
}

function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)