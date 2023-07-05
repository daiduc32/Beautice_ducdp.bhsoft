import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="contact-us">
            <div className="contact-img-left">
              <img src="./assets/img/Contact Animations.png" alt="" />
            </div>
            <div className="form-contact-right">
              <div className="content-contact-us">Contact us</div>
              <div className="title-contact-us">
                Send your inquiry to our expert team
              </div>
              <div className="text-small-contact">
                Lorem ipsum dolor sit amet nulla turapis tellus.
              </div>
              <div className="form-now">
                <div className="top-row">
                  <div className="field-wrap">
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="First name"
                      className="name-contact"
                    />
                  </div>
                  <div className="field-wrap">
                    <input
                      type="text"
                      id="lname"
                      name="lasttname"
                      placeholder="Last name"
                      className="name-contact"
                    />
                  </div>
                </div>
                <div className="next-row">
                  <div className="next-wrap">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="name-contact"
                    />
                  </div>
                  <div className="next-wrap">
                    <input
                      type="text"
                      placeholder="Subject message"
                      className="name-contact"
                    />
                  </div>
                  <div className="next-wrap">
                    <input
                      type="text"
                      placeholder="Your inquiry here"
                      className="name-contact quiry"
                    />
                  </div>
                  <button>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Contact;