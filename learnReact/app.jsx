import React from 'react'
import ReactDOM from 'react-dom'

const hocFactory = WrappedComponent => class HOC extends React.Component{
    render() {
        return(
            <div>
                <p>hoc wrapper</p>
                <WrappedComponent {...this.props} />
            </div>
        )
    }
}

class Demo extends React.Component{
    render() {
        return(
            <p>this is a gen component</p>
        )
    }
}

const EnhanceCom = hocFactory(Demo)

ReactDOM.render(
    <EnhanceCom />,
    document.getElementById('root')
)