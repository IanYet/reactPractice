import React from 'react'
import ReactDOM from 'react-dom'

const DataSource = {
    nameStore: [],
    propStore: [],
    get name() { return this.nameStore},
    set name(val) { 
        this.nameStore.push(val)
        if(this.handle){
            this.handle()
        }
    },
    get prop() { return this.propStore},
    set prop(val) {
        if(this.handle){
            this.handle
        }
        this.propStore.push(val)
    }
}

DataSource.addChangeListener = (handle) => {
    DataSource.handle = handle 
}

function withSubcription(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props){
            super(props)

            this.handleChange = this.handleChange.bind(this)
            this.state = {
                data: selectData(DataSource, props)
            }
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange)
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            })
        }
    }
}