import React from "react";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
import photo from "../static/images/photoA.jpg";

const Profile = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              <div className="card-container">
                <img className="round" src={photo} alt="user" />
                <Typography variant="h6">
                  Godknows Christians Nyamatendedza
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <div>
                  <strong>Full Stack Software Developer</strong>
                </div>
                <div>
                  <LocationOnIcon /> Ballito, South Africa
                </div>
                <div>
                  <LocalPhoneIcon /> +27 63 849 9781
                </div>
                <div>
                  <AlternateEmailIcon />{" "}
                  <a
                    href="mailto:godycnyama@gmail.com?subject=Software Developer job"
                    style={{ color: "#b3b8cd" }}
                  >
                    godycnyama@gmail.com
                  </a>
                </div>
                <p></p>
                <p>
                  <GitHubIcon />
                  <b>GitHub Profile: </b>
                  <a
                    href="https://github.com/godycnyama"
                    style={{ color: "#b3b8cd" }}
                  >
                    https://github.com/godycnyama
                  </a>
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
                <Typography variant="h6">About Me</Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  I am a Full Stack Software Developer experienced in crafting
                  blazing fast, loosely coupled, scalable GraphQL and RESTful
                  server applications/APIs based on ASP.Net Core Web API,
                  ASP.Net Core GraphQL (with HotChocolate), ASP.Net Core MVC,
                  ASP.Net Core Razor, ASP.Net Core Blazor, Node.js, Nest.js (a
                  Node.js based framework), Hapi.js (a Node.js based framework),
                  Python Flask.In addition, l am skilled in developing single
                  page front-end applications, Progressive Web Applications
                  (PWA), using Angular, React, Redux, React-Redux, Gatsby,
                  server rendered front-end apps using Next.js and Angular, and
                  mobile Android and iOS applications using Ionic 3 and React
                  Native.I am a Zend Certified PHP 5.5 Engineer and Certified
                  Microsoft Solutions Developer.Registered with the Engineering
                  Council of South Africa. My software development journey
                  started in 2012. I am looking for a fulltime Software
                  Engineer/Developer position.
                </p>
                <p>
                  I love solving business problems using software. I am addicted
                  to working with cutting edge technologies. Furthermore, l
                  believe in clean , maintainable, extensible, loosely coupled
                  and testable code. Beautiful code excites me. I am ready
                  to give my all to a company willing to hire me.I have a strong
                  engineering mind, l am not afraid of challenges and l have the
                  ability to learn new technologies and processes quickly.Above
                  all, l believe in team work, collaboration, knowledge sharing
                  and continuous learning.
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

export default Profile;
