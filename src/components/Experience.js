import React, { Component } from 'react';

class Experience extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(education => {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            {/* <p>{education.description}</p> */}
          </div>
        );
      });

      // var workDesc = this.props.data.work.map()
      var work = this.props.data.work.map(work => {
        var workDesc = work.description.forEach(desc => {
          console.log(desc);
          return <li>{desc}</li>;
        });
        return (
          <div key={work.company}>
            <h3>
              {work.title} <span class="work company">@{work.company}</span>
            </h3>

            <p className="date">{work.years}</p>
            <ul>
              <li className="Experience-desc">
                <i id="Experience-bullet" className="fa fa-check"></i>
                {work.description[0]}
              </li>
              <li>
                <i id="Experience-bullet" className="fa fa-check"></i>
                {work.description[1]}
              </li>
              <li>
                <i id="Experience-bullet" className="fa fa-check"></i>
                {work.description[2]}
              </li>
              <li>
                <i id="Experience-bullet" className="fa fa-check"></i>
                {work.description[3]}
              </li>
            </ul>
            <br />
            <br />
          </div>
        );
      });

      // Technical Skills Init
      var frontend = this.props.data.frontend.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });

      var backend = this.props.data.backend.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var mobile = this.props.data.mobile.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var DevOps = this.props.data.DevOps.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
      var database = this.props.data.database.map(skills => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });

      // End of init technical skills
    }

    return (
      <section id="Experience">
        <div className="row work">
          <div className="two columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="ten columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <br></br>
              <span>Backend</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{backend}</ul>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Frontend</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{frontend}</ul>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Mobile</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{mobile}</ul>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>DevOps</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{DevOps}</ul>
            </div>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Database</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{database}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
