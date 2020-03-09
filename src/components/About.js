import React, { Component } from 'react';
import Experience from '../Calvin_Nguyen_resume.pdf';
class About extends Component {
  onResumeClick() {
    window.open(Experience);
  }

  render() {
    if (this.props.data) {
      var profilepic = 'images/' + this.props.data.image;
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
        <div className="row about" id="about-section">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Calvin QC Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <p>
              Summer 2018 was my first milestone which I completed my first
              internship ever and at the biggest FinTech company, PayPal,
              building a full-stack application. Then, I worked with another 3
              Co-founders since Dec 2018 to help them built prototype and launch
              web/iOS Products.
            </p>
            <p>
              In Summer 2019, I returned back to PayPal and first time hands-on
              mobile development in Swift and Java, in which I worked and gained
              a huge knowledge with EMV/Contactless/Swipe Card. After the
              internship, I've tried doing different things to explore my
              capabilities by writing Blogs on Medium and leading many teams to
              complete a full-stack web app.
            </p>
            <p> Here is my comprehensive & updated Experience </p>
            <a onClick={this.onResumeClick} className="button">
              <i className="fa fa-download"></i> Download Experience
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
