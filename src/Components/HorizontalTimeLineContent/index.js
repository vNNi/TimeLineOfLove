import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';
import HorizontalTimeline from 'react-horizontal-timeline';

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
            stylesForeground: '#7b9d6f',
            stylesOutline: '#dfdfdf',
            isTouchEnabled: true,
            isKeyboardEnabled: true,
            isOpenEnding: true,
            isOPenBeginning: true,
        };
    }
    static propTypes = {
        content: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    componentWillMount(){
        this.dates = this.props.content.map((content)=>{content.date})
    }
    componentWillReceiveProps(){
        this.dates = this.props.content.map((content)=>content.date);
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
                        fillingMotion={{stiffness: state.fillingMotionStiffness, damping: fillingMotionDamping}}
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
                        onChangeIndex={(value,previous) => this.setState({value:value,previous: previous})}
                        resistance
                    >
                        {views}
                    </SwipeableViews>
                </div>
            </>
        )
    }
}
