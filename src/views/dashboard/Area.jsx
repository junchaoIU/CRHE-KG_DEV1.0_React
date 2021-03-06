import React,{Component} from "react";
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import "./index.less";
const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

class Area extends Component{
    constructor() {
        super(...arguments);
        this.imgArray = [
            "http://www.1911museum.cn/upload/20191115/1dpmh9l9h152f1523b.jpg",
            'https://www.xhgmjng.com/Contents/Images/inner/banner-about.jpg',
            'http://www.gzlsly.cn/gzsmzj/gzlsly_header/201903/e4817bef1d324ec78b775f28d1c42f92/images/38695d4001214be4a726382a50908784.png',
            'http://agzy.youth.cn/images/index_07_4.jpg',
        ];
        this.state = {
            intShow: 0,
            prevEnter: false,
            nextEnter: false,
            thumbEnter: false,
        };
        [
            'onChange',
            'prevEnter',
            'prevLeave',
            'nextEnter',
            'nextLeave',
            'onMouseEnter',
            'onMouseLeave',
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onChange(type, int) {
        if (type === 'before') {
            this.setState({
                intShow: int,
            });
        }
    }

    getNextPrevNumber() {
        let nextInt = this.state.intShow + 1;
        let prevInt = this.state.intShow - 1;
        if (nextInt >= this.imgArray.length) {
            nextInt = 0;
        }
        if (prevInt < 0) {
            prevInt = this.imgArray.length - 1;
        }

        return [prevInt, nextInt];
    }

    prevEnter() {
        this.setState({
            prevEnter: true,
        });
    }

    prevLeave() {
        this.setState({
            prevEnter: false,
        });
    }

    nextEnter() {
        this.setState({
            nextEnter: true,
        });
    }

    nextLeave() {
        this.setState({
            nextEnter: false,
        });
    }

    onMouseEnter() {
        this.setState({
            thumbEnter: true,
        });
    }

    onMouseLeave() {
        this.setState({
            thumbEnter: false,
        });
    }


    render() {
        const intArray = this.getNextPrevNumber();
        const thumbChildren = this.imgArray.map((img, i) =>
            <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
        );
        return (
            <div>
                <BannerAnim
                    onChange={this.onChange}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    prefixCls="custom-arrow-thumb"
                >
                    <Element key="aaa"
                             prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                backgroundImage: `url(${this.imgArray[0]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            <a href="https://www.xhgmjng.com/" target ="_blank" style={{color:"#FFF"}}>?????????????????????</a>
                        </TweenOne>
                        <TweenOne
                            className="banner-user-text"
                            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            ??????????????????????????????????????????????????????????????????258??????????????????????????????100???????????????????????????????????????2011???10????????????????????????????????????100????????????
                        </TweenOne>
                    </Element>
                    <Element key="bbb"
                             prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                backgroundImage: `url(${this.imgArray[1]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            <a href="https://www.xhgmjng.com/" target ="_blank" style={{color:"#FFF"}}>?????????????????????</a>
                        </TweenOne>
                        <TweenOne
                            className="banner-user-text"
                            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            ??????????????????????????????????????????????????????????????????563??????2011???10????????????????????????????????????????????????100?????????????????????????????????????????????????????????20722.038????????????????????????3.19??????????????????
                        </TweenOne>
                    </Element>
                    <Element key="ccc"
                             prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                backgroundImage: `url(${this.imgArray[2]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            <a href="http://www.gzlsly.cn/" target ="_blank" style={{color:"#FFF"}}>????????????????????????</a>
                        </TweenOne>
                        <TweenOne
                            className="banner-user-text"
                            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            ?????????????????????????????????????????????1927???12???11?????????????????????????????????????????????????????????1954??????????????????????????????
                        </TweenOne>
                    </Element>
                    <Element key="ddd"
                             prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                backgroundImage: `url(${this.imgArray[3]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            <a href="http://agzy.youth.cn/xzzh/gzqy/" target ="_blank" style={{color:"#FFF"}}>?????????????????????</a>
                        </TweenOne>
                        <TweenOne
                            className="banner-user-text"
                            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????200??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </TweenOne>
                    </Element>

                    <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
                           onMouseEnter={this.nextEnter}
                           onMouseLeave={this.nextLeave}
                           animation={{ right: this.state.nextEnter ? 0 : -120 }}
                    >
                        <div className="arrow"></div>
                        <TweenOneGroup
                            enter={{ opacity: 0, type: 'from' }}
                            leave={{ opacity: 0 }}
                            appear={false}
                            className="img-wrapper"
                            component="ul"
                        >
                            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
                        </TweenOneGroup>
                    </Arrow>
                    <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
                           onMouseEnter={this.nextEnter}
                           onMouseLeave={this.nextLeave}
                           animation={{ right: this.state.nextEnter ? 0 : -120 }}
                    >
                        <div className="arrow"></div>
                        <TweenOneGroup
                            enter={{ opacity: 0, type: 'from' }}
                            leave={{ opacity: 0 }}
                            appear={false}
                            className="img-wrapper"
                            component="ul"
                        >
                            <li style={{ backgroundImage: `url(${this.imgArray[intArray[2]]})`}} key={intArray[2]} />
                        </TweenOneGroup>
                    </Arrow>
                    <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
                           onMouseEnter={this.nextEnter}
                           onMouseLeave={this.nextLeave}
                           animation={{ right: this.state.nextEnter ? 0 : -120 }}
                    >
                        <div className="arrow"></div>
                        <TweenOneGroup
                            enter={{ opacity: 0, type: 'from' }}
                            leave={{ opacity: 0 }}
                            appear={false}
                            className="img-wrapper"
                            component="ul"
                        >
                            <li style={{ backgroundImage: `url(${this.imgArray[intArray[3]]})`}} key={intArray[3]} />
                        </TweenOneGroup>
                    </Arrow>
                    <Thumb prefixCls="user-thumb" key="thumb" component={TweenOne}
                           animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
                    >
                        {thumbChildren}
                    </Thumb>
                </BannerAnim>
            </div>
        )
    }
}

export default Area;