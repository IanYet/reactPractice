import React from 'react'
import ReactDOM from 'react-dom'

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>yes</p>
    }else {
        return <p>no</p>
    }
}

class Calculator extends React.Component{
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''}
    }

    handleChange(unit,e) {
        let value = e.target.value

        if(unit === 'F'){
            value = (value - 32)*5/9
        }

        value = Math.round(value*1000)/1000
        this.setState({temperature: value})
    }

    render() {
        const temperature = this.state.temperature

        return(
            <fieldset>
                <legend>input the temperature</legend>
                <div>
                    <input value={temperature} onChange={this.handleChange.bind(this, 'C')} /><span>C</span>
                </div>
                <div>
                    <input value={(Math.round(temperature*9/5+32))} onChange={this.handleChange.bind(this, 'F')} /><span>F</span>
                </div>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)