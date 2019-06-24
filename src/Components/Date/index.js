import React from 'react'

export default function index(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.img}/>
            <hr/>
            <p>{props.desc}</p>
        </div>
    )
}
