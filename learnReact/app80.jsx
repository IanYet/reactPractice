import React from 'react'
import ReactDOM from 'react-dom'

//strange bind data
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        // alert(this.inp.value)
        this.para.value = this.inp.value
    }

    render() {
        return(
            <div>
                <input id="1" defaultValue="hh" onChange={this.handleChange} ref={(inp) => this.inp = inp} />
                <input id="2" ref = {(para) => this.para = para} />
            </div>
        )
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)