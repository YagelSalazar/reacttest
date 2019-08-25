import React from 'react'
import './index.scss'

const Person = (props) => {
    return (
        <div className="person-container">
            <div className="person-row">
                <p>Nombre: {props.person.name}</p>
            </div>
            <div className="person-row">
                <p>Nombre2: {props.person.name}</p>
            </div>
        </div>
    )
}

export default Person