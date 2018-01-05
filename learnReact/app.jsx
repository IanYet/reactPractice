import React from 'react'
import ReactDOM from 'react-dom'

//说白了，高阶组件就是一种继承，用一个工厂生产所有类似的组件
//反向继承真是low到爆炸
//与父组件的区别。。。emmmm之后再整理吧。目前感觉比父组件简单一些，但是比父组件hack一些。
//父组件参考app51
const getDisplayName = component => component.displayName || component.name || 'Component';

const hocFactory = (title = 'default') => WrappedComponent => class HOC extends React.Component{

    static displayName = `HOC(${getDisplayName(WrappedComponent)})`

    constructor(props){
        super(props)
    }

    componentWillMount() {
        console.log('HOC will mount')
    }
    render() {

        const newProps = {
            id: Math.random().toString(36).substring(2).toUpperCase()
        }

        return(
            <div>
                <p>hoc wrapper {this.props.title}</p>
                <WrappedComponent {...this.props} {...newProps}/>
            </div>
        )
    }
}

class Demo extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillMount() {
        console.log('Demo will mount');
    }

    render() {
        return(
            // what is the fxxx title?????
            //ohit, ...props passed all the props from HOC to Demo
            <div>
                <p>id: {this.props.id}</p>
                <p>this is a gen component {this.props.title}</p>
            </div>
        )
    }
}

const EnhanceCom = hocFactory('ohhh')(Demo)

//there is no a component called <EnhanceCom />, it is just a display name for HOC(XXX) 
ReactDOM.render(
    <EnhanceCom title="title"/>,
    document.getElementById('root')
)