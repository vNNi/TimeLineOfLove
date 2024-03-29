import React, { Component } from 'react';

import SwipeableViews from 'react-swipeable-views';
import HorizontalTimeline from 'react-horizontal-timeline';
import Colors from '../../Colors';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 0,
            previus: 0,

            // timeline config

            minEventPadding: 20,
            maxEventPadding: 120,
            linePadding: 100,
            labelWidth: 100,
            fillingMotionStiffness: 150,
            fillingMotionDamping: 25,
            sliddingMotionStiffness: 150,
            sliddingMotionDamping: 25,
            stylesBackground: '#f8f8f8',
            stylesForeground: Colors.loveSEcondary,
            stylesOutline: '#dfdfdf',
            isTouchEnabled: true,
            isKeyboardEnabled: true,
            isOpenEnding: true,
            isOPenBeginning: true,
        };
    }
    componentWillMount(){
        this.dates = this.props.content.map((content)=>{return content.date})
    }
    componentWillReceiveProps(next){
        this.dates = next.content.map((content)=>{content.date});
    }
    render() {
        const state = this.state;
        const views = this.props.content.map((content,i)=>{
            return (
                <div key={i}>
                    {content.component}                    
                </div>
            );
        });
        return (
            <>
                <div style={{width: '80%', height:'100px', margin:'0 auto'}}>
                    <HorizontalTimeline 
                        fillingMotion={{stiffness: state.fillingMotionStiffness, damping: state.fillingMotionDamping}}
                        index={this.state.value}
                        indexClick={(index)=>this.setState({value: index, previus: this.state.value})}
                        isKeyboardEnabled={state.isKeyboardEnabled}
                        isTouchEnabled={state.isTouchEnabled}
                        labelWidth={state.labelWidth}
                        linePadding={state.linePadding}
                        maxEventPadding={state.maxEventPadding}
                        minEventPadding={state.minEventPadding}
                        sliddingMotion={{stiffness:state.sliddingMotionStiffness, damping:state.sliddingMotionDamping}}
                        styles={{
                            background: state.stylesBackground,
                            foreground: state.stylesForeground,
                            outline: state.stylesOutline
                        }}
                        values={this.dates}
                        isOpenEnding={state.isOpenEnding}
                        isOpenBeginning={state.isOPenBeginning}
                    />
                </div>
                <div>
                    <SwipeableViews
                        index={this.state.value}
                        onChangeIndex={(value,previous) => {
                            this.setState({value:value,previous: previous});
                            window.scrollTo(0,0);
                        }}
                        resistance
                    >
                        {views}
                    </SwipeableViews>
                </div>
            </>
        )
    }
}
