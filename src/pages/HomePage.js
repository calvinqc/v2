import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import ReactGA from 'react-ga';
import $ from 'jquery';

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Work from '../components/Work';

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
        <Work data={resumeData.work} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

// Store
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(HomePage));
