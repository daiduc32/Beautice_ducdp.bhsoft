import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <><div className="footer">
                <div className="left-footer">
                    <div className="title-footer">
                        <img src="./assets/img/Footer Logo.png" alt="logo" /> Beautice
                    </div>
                    <div className="content-footer">
                        <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                    </div>
                    <div className="address">Baker Steet 101, NY, United States.</div>
                    <div className="infor">
                        <div className="address">+521 569 8966.</div>
                        <div className="address email">mail@company.com.</div>
                    </div>
                </div>
                <div className="mid-footer">
                    <div className="title-page">Pages</div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Home
                    </div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> About
                    </div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Services
                    </div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Gallery
                    </div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Team
                    </div>
                </div>
                <div className="right-footer mid-footer">
                    <div className="title-page"> Information</div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Terms &amp;
                        Conditions
                    </div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Condivacy Policy
                    </div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Blog
                    </div>
                    <div className="item-page">
                        <img src="./assets/img/caret-right.png" alt="" /> Contact
                    </div>
                    <button
                        className="arrow-top"
                        onclick="topFunction()"
                        id="myBtn"
                        title="Go to top"
                    >
                        <img src="./assets/img/arrow.png" alt="arrow-top" />
                    </button>
                </div>
            </div><div className="bottom-footer">
                    <div className="icon-bf">
                        <button>
                            <img src="./assets/img/facebook-f.png" alt="fb" />
                        </button>
                        <button>
                            <img src="./assets/img/Vector-3.png" alt="tw" />
                        </button>
                        <button>
                            <img src="./assets/img/Vector-2.png" alt="in" />
                        </button>
                        <button>
                            <img src="./assets/img/Vector-1.png" alt="ytb" />
                        </button>
                        <button>
                            <img src="./assets/img/Vector.png" alt="ins" />
                        </button>
                    </div>
                    <div className="text-bf">
                        © AltDesain Studio 2021 - All right reserved.
                    </div>
                </div></>
        )
    }
}

export default Footer;