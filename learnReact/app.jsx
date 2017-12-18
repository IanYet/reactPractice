import React from 'react'
import ReactDOM from 'react-dom'

function People(props) {
    return (
        <p>{props.name}: {props.age}</p>
    )
}

function PeopleList(props) {
    const lists = props.lists

    const peoples = lists.map((list) => <People name={list.name} age={list.age} key={list.id} />)

    return (
        <div>
            {peoples}
        </div>
    )
}

ReactDOM.render(
    <PeopleList lists={[{name:'1', age:'1', id:'1'},{name:'2', age:'2', id:'2'},{name:'3', age:'3', id:'3'}]}/>,
    document.getElementById('root')
)