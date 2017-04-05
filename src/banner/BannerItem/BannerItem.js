import React from 'react';


/*eslint no-useless-constructor: "off"*/
export default class BannerItem extends React.Component{
    constructor() {
        super();
    }

    render() {
        let {item, count} = this.props;
        let width = 100 / count + '%';
        return (
            <li className="banner-item" style={{width: width}}>
                <img src={item.src} alt={item.alt} />
            </li>
        );
    }
}