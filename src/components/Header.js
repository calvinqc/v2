import React, { Component } from 'react';
import Typed from 'react-typed';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li className="network-icon" key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#Experience">
                Experience
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#work">
                Work
              </a>
            </li> */}

            <li className="current">
              <a className="center-logo smoothscroll" href="#home">
                <img id="nav-logo" src="images/logo5.png" />
              </a>
            </li>

            <li>
              <a href="https://github.com/calvinqc">Github</a>
            </li>

            <li>
              <a href="https://medium.com/@calvinqc">Medium</a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h3> Hi there, welcome to the Q.C!</h3>
            <h1 className="responsive-headline" id="hello">
              <Typed
                strings={['Back-end Engineer', 'Tech Writer', 'Traveler']}
                typeSpeed={45}
                backSpeed={30}
                loop
              />
            </h1>
            <h3>
              My name is <span id="hello">Calvin Nguyen</span>. I'm a graduating
              student with{' '}
              <span id="hello">
                3 years of extensive full-stack development
              </span>
              , building product from prototype to production quickly, focusing
              on web services, scaling, database, and infrastructure. Capable of
              picking up new skills to ship scaling apps to production quickly.
              Seeking for{' '}
              <span id="hello">
                Full-time Software Engineering role in Jan 2021.
              </span>
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
