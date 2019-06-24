import React, {useEffect} from 'react';

export default function index(props) {

    const audio = React.createRef();

    useEffect(()=>{
        audio.current.play();
    },[])
    return (
        <>
            <audio ref={audio} controls muted loop style={{display:'none'}}>
                <source src={props.video} type="audio/mpeg"></source>
            </audio>
        </>
    )
}
