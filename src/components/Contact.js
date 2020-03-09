import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { contact } from '../api/contact.api';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    const { email, subject, message } = this.state;
    this.props.contact({
      email,
      subject,
      message,
    });
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {city}, {state}, {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Most Read</h4>
              <ul id="twitter">
                <li>
                  <span>
                    <a href="https://medium.com/swlh/i-built-a-m-e-r-n-codebase-in-an-hour-742acd71ed7e">
                      I built a M.E.R.N codebase in an hour.
                    </a>
                  </span>
                  <b>
                    <a href="#">7 Days Ago</a>
                  </b>
                </li>

                <li>
                  <span>
                    <a href="https://medium.com/@calvinqc/perfect-structure-to-authenticate-authorize-api-with-node-js-and-passport-jwt-d529b1a618ba">
                      The Perfect Structure to Authenticate & Authorize Your API
                      with Node.js
                    </a>
                  </span>
                  <b>
                    <a href="#">7 Days Ago</a>
                  </b>
                </li>
              </ul>

              <h4 className="widget-title">Latest Posts</h4>
              <ul id="twitter">
                <li>
                  <span>
                    <a href="https://medium.com/swlh/webrtc-the-technology-that-powers-google-meet-hangout-facebook-messenger-and-discord-cb926973d786">
                      WebRTC — The technology that powers Google Meet/Hangout,
                      Facebook Messenger and Discord
                    </a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    <a href="https://medium.com/swlh/multi-purposes-mailing-api-using-nodemailer-gmail-google-oauth-28de49118d77">
                      Build your own Mailing API using Nodemailer, Gmail &
                      Google OAuth2
                    </a>
                  </span>
                  <b>
                    <a href="#">5 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

// Store
function mapStateToProps(state) {
  return {
    contact: state.contact,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ contact }, dispatch);
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(Contact));
