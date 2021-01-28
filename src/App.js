import React, { Component } from "react";
import "./App.css";
import Information from "./Information/information";
import Menu from "./Menu/menu";
import Project from "./Project/project";
import perfil from "./assets/img/perfil.jpeg";
import sections from "./sections.js";
import projects from "./projects.js";
import mexico from "./assets/img/icons/mexico.png";
import unitedKingdom from "./assets/img/icons/united-kingdom.png";


class App extends Component {
  state = {
    sectionShowing: 0,
    projectShowing: 0,
    language: 0,
  };

  changeProjectShowingHandler = (index) => {
    this.setState({ projectShowing: index });
  };
  changeSectionShowingHandler = (index) => {
    this.setState({ sectionShowing: index });
  };
  changeLanguage = (index) => {
    this.setState({ language: index });
  };

  render() {
    // add buttons to the projects sections depending on how many projects are
    sections[2].extra[this.state.language] = (
      <div>
        {projects.map((project, index) => {
          return (
            <button onClick={() => this.changeProjectShowingHandler(index)}>
              {project.short[this.state.language]}
            </button>
          );
        })}
      </div>
    );
    let project = null;
    if (this.state.sectionShowing === 2) {
      project = (
        <Project
          title={projects[this.state.projectShowing].name[this.state.language]}
          description={
            projects[this.state.projectShowing].description[this.state.language]
          }
          img={projects[this.state.projectShowing].img}
        ></Project>
      );
    } else {
      project = null;
    }
    
    return (
      <div className="App">
        <aside>
          <Menu name="Julio Cesar Morales Ramos" img={perfil}>
            <ul>
              <li onClick={this.changeSectionShowingHandler.bind(this, 0)}>
                <i className="fa fa-user"></i>
                <p> {sections[0].title[this.state.language]}</p>
              </li>
              <li onClick={this.changeSectionShowingHandler.bind(this, 1)}>
                <i className="fa fa-star"></i>
                <p> {sections[1].title[this.state.language]}</p>
              </li>
              <li onClick={this.changeSectionShowingHandler.bind(this, 2)}>
                <i className="fa fa-folder-open"></i>
                <p> {sections[2].title[this.state.language]}</p>
              </li>
            </ul>
            <div className="languageSelector">
              <i onClick={() => this.changeLanguage(0)}> <img src={unitedKingdom} alt='UK flag'></img>English</i>
              <i onClick={() => this.changeLanguage(1)}> <img src={mexico} alt='Mexico flag'></img>Español</i>
            </div>
          </Menu>
        </aside>
        <main>
          <Information
            title={
              sections[this.state.sectionShowing].title[this.state.language]
            }
            par={sections[this.state.sectionShowing].par[this.state.language]}
          >
            {sections[this.state.sectionShowing].extra[this.state.language]}
          </Information>
          {project}
        </main>
      </div>
    );
  }
}

export default App;
