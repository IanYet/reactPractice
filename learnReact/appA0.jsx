import React from 'react'
import ReactDOM from 'react-dom'

const appRoot = document.getElementById("app-root")
const modalRoot = document.getElementById("root")

class Modal extends React.Component {
    constructor(props){
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount(){
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

function Child() {
    return(
        <div className="modal">
            <button>Click</button>
        </div>
    )
}

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {clicks:0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }))
    }

    render() {
        return(
            <div onClick={this.handleClick}>
                <p>number of clicks: {this.state.clicks}</p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
}

ReactDOM.render(<Parent/>, appRoot)