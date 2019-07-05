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

    const font = css({
        fontFamily: 'Muli, sans-serif',
    });

    const desc = css({
        fontSize: '20px',
    });

    return (
        <div>
            <h1 {...title} {...font} >{props.title}</h1>
            <div style={{margin: '0 8%'}}>
                {props.img? <img {...img} src={props.img}/>:null}
            </div>
            <div style={{margin: '0 5%'}}>
                <p {...desc} {...font}>{props.desc}</p>
            </div>
        </div>
    )
}
