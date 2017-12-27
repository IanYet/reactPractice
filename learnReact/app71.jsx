import React from 'react'
import ReactDOM from 'react-dom'

//it is strange. 大多数情况下应该可以用states或者props解决

function CustomInputText(props) {
    return (
        <div>
            <input id="woshizijiedian" ref={props.inputRef} />
        </div>
    )
}

function Parent(props) {
    return (
        <div>
            My Input: <CustomInputText inputRef={props.inputRef} />
            {props.children}
        </div>
    )
}

class Grantparent extends React.Component {

    constructor(props){
        super(props)
        this.alerts = this.alerts.bind(this)
    }

    alerts(){
        alert(this.inputElement.id)
    }
    render() {
        return (
            <Parent inputRef={el => this.inputElement = el}>
                <input type="button" value="dianwoxianshishuishishabi" onClick={this.alerts}/>
            </ Parent>
        )
    }
}

ReactDOM.render(
    <Grantparent />,
    document.getElementById("root")
)