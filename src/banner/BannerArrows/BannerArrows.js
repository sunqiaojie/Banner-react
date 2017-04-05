import React from 'react';

/*eslint no-useless-constructor: "off"*/
export default class BannerArrows extends React.Component {
    constructor() {
        super();
    }
    handleArrowClick(option) {
        this.props.clickToChange(option);
    }
    render() {
        return (
            <div className="banner-arrow-warp">
                <span
                    className="banner-arrow banner-arrow-left"
                    onClick={this.handleArrowClick.bind(this,-1)}>
                    《
                </span>
                <span
                    className="banner-arrow banner-arrow-right"
                    onClick={this.handleArrowClick.bind(this,1)}>
                    》
                </span>
            </div>
        );
    }
}