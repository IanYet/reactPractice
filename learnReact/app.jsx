import React from 'react'
import ReactDOM from 'react-dom'

//组件的生命周期函数是否冒泡？

class Son extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        console.log("son unmount")
    }

    render() {
        return(
            <p>son</p>
        )
    }
}

class NewS extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("new son mount")
    }

    render() {
        return(
            <p>new Son</p>
        )
    }
}

class Par extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        console.log("parent unmount")
    }

    render() {
        return(
            <div>
                <p>parent</p>
                {this.props.children}
            </div>
        )
    }
}

class NewP extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("new Parent mount")
    }

    render() {
        return(
            <div>
                <p>new Parent</p>
                {this.props.children}
            </div>
        )
    }
}

class Home extends React.Component{

    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            toggle: false
        }
    }

    handleToggle(event) {
        let state = this.state.toggle

        if(state){
            this.setState({toggle: false})
        }else {
            this.setState({toggle: true})
        }
    }

    componentDidMount() {
        console.log("home mount");
    }

    componentWillUpdate() {
        console.log("home will upgrade");
    }

    componentDidUpdate() {
        console.log("home upgrade")
    }

    componentWillUnmount() {
        console.log("home unmount")
    }

    render() {
        let state = this.state.toggle
        let group = null

        // console.log(state);

        if(state){
            group = <NewP><NewS /></NewP>
        }else {
            group = <Par><Son /></Par>
        }

        return(
            <div>
                <button onClick={this.handleToggle}>toggle</button>
                {group}
            </div>
        )
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
)