import React from "react";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const Portfolio = () => {
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
        <Typography variant="h6">Projects</Typography>
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
                <Typography variant="h6">
                  Note
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  I am a freelance software developer since 2012. My production
                  code is hosted privately on Bitbucket. I can give access to
                  this code during interviews. I am only hosting proof of
                  concept code on GitHub.
                  <p>
                    <b>
                      <GitHubIcon /> GitHub Profile:{" "}
                    </b>
                    <a href="https://github.com/godycnyama" style={{ color: "#b3b8cd" }}>
                      https://github.com/godycnyama
                    </a>
                  </p>
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
                  Property Management System (Current project)
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  The front-end is a single page GraphQL client application
                  based on, React, Redux Toolkit, Material UI and written in
                  Javascript. The back-end is GraphQL API based on ASP.Net Core
                  with HotChocolate and written in C#.The system allows Real
                  Estate Agents to manage properties, property owners, leases,
                  collect and record rent, and manage maintenance of properties.
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
                  Web Job Portal and Application System
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  Written in typescript using the following technologies:
                  Angular 5, Angular Material 5, Covalent UI 1.0, Hapi.js(a
                  Node.js server framework), MongoDB, Nginx, Ubuntu. Hosted in
                  the cloud at Digital Ocean. I wrote 100% of the code. The
                  system allows recruiters to advertise jobs and track job
                  applications, and applicants. It also allows job seekers to
                  search and apply for jobs. Website: www.jobmix.co.za
                  <br />
                  Website:
                  <a href="https://jobmix.co.za" style={{ color: "#b3b8cd" }}> www.jobmix.co.za</a>
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
                  Medical Practice Management System
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  Written in C# and runs on ASP.Net WebAPI2. The system has a
                  user interface based on Windows Presentation Foundation 4
                  using the Model View View Model. User Interface Design was
                  done with Expression Blend 4. Development was done in Visual
                  Studio 2010.The system is used to manage medical practices and
                  clinics. It is used for doctor appointments, to gather, store
                  and search patient information. The system uses MySQL database
                  and Entity Framework for data persistence.
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
                <Typography variant="h6">Library Management System</Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  Written in C# and based on ASP.Net WebAPI2. The user interface
                  is based on WPF4 using the MVVM pattern. User Interface Design
                  was done with Expression Blend 4.The system uses MySQL
                  database and Entity Framework for data persistence. The system
                  is used in managing a library (loaning books and book
                  inventory management).
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

export default Portfolio;
