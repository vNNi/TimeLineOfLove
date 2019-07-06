import React, {useEffect} from 'react';

export default function index(props) {

    const audio = React.createRef();

    useEffect(()=>{
       let playPromise =  audio.current.play();
       if(playPromise != undefined){
           playPromise.then((_)=>{
           }).catch((e)=>{
                console.log('music error', e)
           })
       }
    },[])
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <audio ref={audio} controls loop autoPlay style={{margin: '0 auto'}}>
                    <source src={props.video} type="audio/mpeg"></source>
                </audio>
            </div>
        </>
    )
}
