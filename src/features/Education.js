import React from "react";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const Education = () => {
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
        <Typography variant="h6">Education</Typography>
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
                  {" "}
                  Graduate Diploma in Engineering (Electronic), UK Engineering
                  Council
                </Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <Typography variant="h8">Courses</Typography>
                <p>
                  Software for Embedded Systems, Software Engineering,
                  Information Systems Engineering Computer Systems Engineering,
                  Control Systems Engineering, Electronic Systems Engineering,
                  Telecommunication Systems Engineering, Electrical Machines and
                  Drives Quality and Reliability Engineering, Analysis and
                  Design of Manufacturing System, Management of Engineering
                  Enterprises, Engineering Project.
                </p>
                <div>
                  <strong>
                    *The Graduate Diploma is equivalent to a British BEng
                    Electronic Engineering Honours Degree.
                  </strong>
                </div>
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
                <Typography variant="h6">Other Qualifications</Typography>
                <Divider style={{ backgroundColor: "#b3b8cd" }} />
                <br />
                <p>
                  City & Guilds Advanced Technician Diploma in Electronic
                  Engineering
                  <br />
                  City & Guilds Advanced Technician Diploma in Electrical &
                  Electronic Engineering
                  <br />
                  City& Guilds Technician Diploma in Electrical & Electronic
                  Engineering
                  <br />
                  City & Guilds Technician Certificate in Electrical &
                  Electronic Engineering
                  <br />
                  City & Guilds Process Plant Operation Part 2<br />
                  City & Guilds Process Plant Operation Part 1<br />
                  City & Guilds Microcomputer Technology Part 2<br />
                  City & Guilds Microcomputer Technology Part 1<br />
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

export default Education;
