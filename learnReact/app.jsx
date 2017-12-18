import React from 'react'
import ReactDOM from 'react-dom'

class BindData extends React.Component{
    constructor (props) {
        super(props)

        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div className={this.props.className}>
                <p>{this.state.value}</p>
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
}

ReactDOM.render(
    <BindData className='hello'/>,
    document.getElementById('root')
)