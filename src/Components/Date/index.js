import React from 'react';
import {css} from 'glamor';

export default function index(props) {
    const img = css({
        width: '100%',
        height: '40%',
    });

    const title = css({
        textAlign: 'center',
    });

    return (
        <div>
            <h1 {...title} >{props.title}</h1>
            <div style={{margin: '0 10%'}}>
                <img {...img} src={props.img}/>
            </div>
            <hr/>
            <div style={{margin: '0 5%'}}>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
