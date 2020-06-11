import React, { Component } from 'react';

import ReactGA from 'react-ga';
import $ from 'jquery';

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }
  render() {
    const { resumeData } = this.state || {};
    return (
      <div>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Experience data={resumeData.Experience} />
        {/* <Contact data={resumeData.main} /> */}
        <Footer data={resumeData.main} />
      </div>
    );
  }
}
export default HomePage;
