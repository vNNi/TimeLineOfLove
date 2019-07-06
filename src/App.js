import React from 'react';
import {css} from 'glamor';

import History from './Resources/content';
import Date from './Components/Date/index';
import Colors from './Colors';
import video from './Assets/music.mp3';
import Sound from './Components/Sound/index';
import HorizontalTimeLineContent from './Components/HorizontalTimeLineContent/index';

export default function App() {
    let mainTItle = css({
        color: Colors.love,
        textAlign: 'center',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
    });
    const data =  History.map((date,i)=>{
        return({
            date: date.date,
            component: (<Date title={date.title} img={date.photo} desc={date.content}/>)
        })
    });
    return (
        <div>
            <h1 id='maintitle' {...mainTItle} >Seja bem-vinda a nossa história!</h1>

            <HorizontalTimeLineContent
            content={data}
            />
            <Sound video={video}/>
        </div>
    )
}
