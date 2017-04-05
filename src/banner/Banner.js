import React from 'react';

require('./Banner.css');

import BannerItem from './BannerItem/BannerItem';
import BannerDots from './BannerDots/BannerDots';
import BannerArrows from './BannerArrows/BannerArrows';

/*eslint no-useless-constructor: "off"*/
export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            nowLocal: 0
        };
    }
    // 向前向后移动个数
    clickToChange(num) {
        let _num = this.state.nowLocal + num;
        if(_num < 0) {
            _num += this.props.items.length;
        }
        if(_num >= this.props.items.length) {
            _num -= this.props.items.length;
        }
        this.setState({nowLocal: _num});
    }

    //开始自动轮播
    goPlay() {
        if(this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.clickToChange(1);
            },this.props.delay * 1000);
        }
    }

    // 暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        //console.info(this.props.settings);
        this.goPlay();
    }
    render() {
        let count = this.props.items.length;
        let itemNodes = this.props.items.map((item, index) => {
            return <BannerItem item={item} count={count} key={'item' + index} />;
        });
        let arrowsNode = <BannerArrows clickToChange={this.clickToChange.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

        let dotsNode = <BannerDots clickToChange={this.clickToChange.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

        return (
            <div
                className="banner" 
                onMouseOver={this.props.pause?this.pausePlay.bind(this):null} 
                onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
                <ul
                    style={{
                        left: -100 * this.state.nowLocal + "%",
                        transitionDuration: this.props.speed + "s",
                        width: this.props.items.length * 100 + "%",
                    }}>
                        {itemNodes}
                    </ul>
                    {this.props.arrows?arrowsNode:null}
                    {this.props.dots?dotsNode:null}
            </div>
        );
    }
}

Banner.defaultProps = {
    speed: 1, // 			speed: 1.2, //图片切换的时候的速度时间 时间单位为秒。number
    delay: 2, //       delay: 2.1, //自动轮播时，每张图片停留的时间 时间单位为秒。number
    pause: true, //       pause: true, //自动轮播的时候，鼠标悬停在图片上时是否需暂停轮播。 boolean
    autoplay: true, // 			autoplay: true, //配置是否需要自动轮播。 boolean
    dots: true, // 			dots: true, //是否需要轮播图下的小圆点。 boolean
    arrows: true, //       arrows: true, //是否需要轮播的前后箭头
    items: [] //            图片对象{    src: './images/demo1.jpg',    alt: 'images-1'  }
}
Banner.autoPlayFlag = null;
