import React from 'react'
import ReactDOM from 'react-dom'

class CustomTextInput extends React.Component{
    constructor(props){
        super(props)
        this.focus = this.focus.bind(this)
    }

    componentDidMount() {
        this.textInput.focus()
    }

    focus() {
        console.log(this.textInput)
        return this.textInput.focus()
    }

    render() {
        return (
            <div>
                <input id="01" type="text" ref={(input) => {this.textInput = input}} />
                <input type="button" value="focus the text input" onClick={this.focus}/>
            </div>
        )
    }
}

ReactDOM.render(
    <CustomTextInput />,
    document.getElementById('root')
)