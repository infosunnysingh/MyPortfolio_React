import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.chatApplication = () => {
      window.location.assign(
        "https://github.com/infosunnysingh/ChatGPTClone_React"
      );
    };
    this.calculator = () => {
      window.location.assign(
        "https://github.com/ismail5g/Calculator-Using-ReactJS"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/ismail5g/my-portfolio");
    };
    this.portfoliolive = () => {
      window.location.assign("https://devismail.netlify.app/");
    };
    // this.ecommerce = () => {
    //   window.location.assign("https://github.com/ismail5g/EasyBazar");
    // };
    // this.leavemangement = () => {
    //   window.location.assign("https://github.com/ismail5g/Leave-Management");
    // };
    // this.crudapplication = () => {
    //   window.location.assign(
    //     "https://github.com/ismail5g/BookListCrud_MVC-Asp.Net-Core"
    //   );
    // };
    // this.facebook = () => {
    //   window.location.assign(
    //     "https://github.com/ismail5g/Facebook-Education-Perpose"
    //   );
    // };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/chat.jpg) center / cover",
                }}
              >
                Chat Application
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a chat Application developed on a running course from
                UDEMY.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.chatApplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Calculator */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
                Standard Calculator
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a first REACT app i developed. The noobie calculator
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.calculator.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Portfolio */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/portfolio.png) center / cover",
                }}
              >
                Portfolio
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This portfolio designed by REACT JS on 25th August 2020. And it
                takes 2 days to Complete.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.portfolio.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
      //  another project link
      }
      
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React JS</Tab>
          <Tab>Angular JS</Tab>
          <Tab>Python</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
