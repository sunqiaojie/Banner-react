/**
 * count( 轮播项总数目 )
 * nowLocal( 当前的轮播项 )
 * clickToChange( 点击dot回调函数 )
 */

import React from 'react';

/*eslint no-useless-constructor: "off"*/
export default class BannerDots extends React.Component {
    constructor() {
        super();
    }
    handleDotClick(index) {
        let option = index - this.props.nowLocal;
        this.props.clickToChange(option);
    }
    render() {
        let dotNodes = [];
        let {count, nowLocal} = this.props;
        for(let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span 
                key={`dot${i}`}
                className={`banner-dot${i === nowLocal?" banner-dot-selected":""}`}
                onClick={this.handleDotClick.bind(this,i)}></span>
            );
        }
        return (
            <div className="banner-dots-wrap">
                {dotNodes}
            </div>
        );
    }
}