import React from "react";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
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
        <br />
        <br />
        <Paper>
          <div
            style={{
              padding: 15,
              backgroundColor: "#231e39",
              color: "#b3b8cd",
              borderRadius: 5,
            }}
          >
            <Typography variant="h6">Certifications</Typography>
            <Divider style={{ backgroundColor: "#b3b8cd" }} />
            <br />
            <div>Microsoft Certified Solutions Developer: Web Applications</div>
            <div>
              Microsoft Certified Solutions Developer: Windows Store
              Applications
            </div>
            <div>Zend Certified PHP 5.5 Engineer (Candidate ID:ZEND025772)</div>
            <br />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
