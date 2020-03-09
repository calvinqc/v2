import React, { Component } from 'react';

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

            <li>
              <a className="smoothscroll" href="#work">
                Work
              </a>
            </li>

            <li className="current">
              <a className="center-logo smoothscroll" href="#home">
                <img id="nav-logo" src="images/logo5.png" />
                {/* QC */}
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="https://github.com/calvinqc">
                Github
              </a>
            </li>

            <li>
              <a href="https://medium.com/@calvinqc">Blogs</a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h3 id="hello"> Hello, my name is</h3>
            <h1 className="responsive-headline">{name}</h1>
            <h3>
              {/* <span> */}
              I'm a {occupation} based <span>{city}</span>. {description}
              {/* </span> */}
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
