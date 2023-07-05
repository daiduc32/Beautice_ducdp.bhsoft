import React, {Component} from 'react';

class About extends Component {
    render() {
        return(
            <div className="about-us">
            <div className="us-left">
              <div className="title-text text-us">About us</div>
              <div className="content-text title-us">
                We are the best beauty clinic
              </div>
              <div className="text-small content-us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
              </div>
              <div className="text-small content-us">
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </div>
              <div className="learn-watch">
                <div className="learn-more">Learn More</div>
                <div className="learn-more watch">
                  <img src="./assets/img/Play_button.png" alt="" />
                  Watch Video
                </div>
              </div>
            </div>
            <div className="us-right">
              <img src="./assets/img/img-us.png" alt="" className="img-us" />
            </div>
          </div>
        )
    }
}

export default About;