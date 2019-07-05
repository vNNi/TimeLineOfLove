import React, {useEffect} from 'react';

export default function index(props) {

    const audio = React.createRef();
    
    return (
        <>
            <audio ref={audio} preload="none" autoPlay controls loop style={{display:'none'}}>
                <source src={props.video} type="audio/mpeg"></source>
            </audio>
        </>
    )
}
