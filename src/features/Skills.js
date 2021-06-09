import React from "react";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const Skills = () => {
  const history = useHistory();
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<KeyboardBackspaceIcon />}
          style={{ marginLeft: 0, textTransform: "none" }}
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </Button>
        <br />
        <br />
        <Typography variant="h6">Skills</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              <div
                style={{
                  padding: 15,
                  backgroundColor: "#231e39",
                  color: "#b3b8cd",
                  borderRadius: 5,
                }}
              >
                <Typography variant="h6">Languages</Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  C#, Javascript/ES6+, Typescript, Html, CSS, C, C++, PHP,
                  Python, XML, SQL, T-SQL
                </p>
                <br />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <div
                style={{
                  padding: 15,
                  backgroundColor: "#231e39",
                  color: "#b3b8cd",
                  borderRadius: 5,
                }}
              >
                <Typography variant="h6">
                  Front End/Client Technologies
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  Single Page Applications, Progressive Web Applications(PWA),
                  GraphQL Client Applications, React, React Native, Server
                  rendered React Apps using NextJS, Redux, Redux ToolKit,
                  Angular, Angular Universal, Angular Material, Gatsby,
                  Material-UI, Apollo Client(GraphQL Client), Ionic, Blazor
                  WebAssembly
                </p>
                <br />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <div
                style={{
                  padding: 15,
                  backgroundColor: "#231e39",
                  color: "#b3b8cd",
                  borderRadius: 5,
                }}
              >
                <Typography variant="h6">
                  Back End/Server Technologies
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  ASP.NET Web API, ASP.Net Core Web API, ASP.Net Core GraphQL
                  (with HotChocolate), ASP.NET MVC, ASP.Net Core MVC, ASP.Net
                  Core Razor, ASP.Net Core Blazor Server, Node.js,NestJS(a
                  Node.js based framework), Hapi.js(a Node.js based framework,
                  Flask, Flask-GraphQL, Graphene, Graphene-Django, Apollo
                  GraphQL Server, Apollo-Server-Express, Apollo-Server-Hapi,
                  Amazon Web Services, Microsoft Azure web services ,Nginx
                </p>
                <br />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <div
                style={{
                  padding: 15,
                  backgroundColor: "#231e39",
                  color: "#b3b8cd",
                  borderRadius: 5,
                }}
              >
                <Typography variant="h6">Databases</Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>MySQL, SQL Server, PostgreSQL, MongoDB, SQLite</p>
                <br />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <div
                style={{
                  padding: 15,
                  backgroundColor: "#231e39",
                  color: "#b3b8cd",
                  borderRadius: 5,
                }}
              >
                <Typography variant="h6">Tools and Methodologies</Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  Object Oriented Programming, Functional Programming,
                  Component-Oriented Programming, Service-Oriented (SOA)
                  programming) , Microservices ,Test Driven Development(TDD),
                  Unit Testing, Integration Testing, End-to-end testing, CI/CD,
                  Agile Software Development, Visual Studio 2019, Visual Studio
                  Code, Git, Bitbucket, Jira, browser debugging tools, Postman,
                  Curl, Docker, 8051 Microcontroller Embedded Software
                  development tools, Embedded Linux customization
                  tools(Buildroot and Yocto).
                </p>
                <br />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
