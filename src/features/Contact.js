import React from "react";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useHistory } from "react-router-dom";

const Contact = () => {
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
        <br/>
        <br/>
        <Paper>
          <div style={{ padding: 15 , backgroundColor: "#231e39", color: "#b3b8cd", borderRadius: 5 }}>
            <Typography variant="h6">Contact Me</Typography>
            <Divider style={{ backgroundColor: "#b3b8cd" }} />
            <br />
            <p>
              <b>
                <LocationOnIcon /> Location:
              </b>{" "}
              20H Sun and Surf, 405 Simbithi Drive, Ballito, South Africa
            </p>
            <p>
              <b>
                <LocalPhoneIcon /> Phone:
              </b>{" "}
              +27 63 849 9781
            </p>
            <p>
              <b>
                {" "}
                <AlternateEmailIcon /> Email:
              </b>{" "}
              <a href="mailto:godycnyama@gmail.com?subject=Software Developer job" style={{ color: "#b3b8cd" }}>godycnyama@gmail.com</a>
            </p>
            <p>
              <b>
                <GitHubIcon /> GitHub Profile:{" "}
              </b>
              <a href="https://github.com/godycnyama" style={{ color: "#b3b8cd" }}>
                https://github.com/godycnyama
              </a>
            </p>
            <br />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
