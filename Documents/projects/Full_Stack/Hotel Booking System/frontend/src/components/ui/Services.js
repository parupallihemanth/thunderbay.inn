import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import LanguageIcon from "@material-ui/icons/Language";
import SmokeFreeIcon from "@material-ui/icons/SmokeFree";
import SecurityIcon from "@material-ui/icons/Security";

const Services = () => {
  return (
    <div style={{ background: "#E0E0E0" }}>
      <Typography
        variant='h4'
        style={{ marginTop: "2em", marginBottom: "1em" }}
        align='center'
      >
        Our Services
      </Typography>
      <Grid container justify='center' style={{}}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <CallIcon style={{ fontSize: "9em" }} />
            </Grid>
            <Grid item style={{ color: "black" }}>
              <Typography align='center'>24/7 call service</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ marginLeft: "5em", marginRight: "5em" }}>
          <Grid container direction='column'>
            <Grid item>
              <SecurityIcon style={{ fontSize: "9em" }} />
            </Grid>
            <Grid item style={{ color: "black" }}>
              <Typography align='center'>Security</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <LanguageIcon style={{ fontSize: "9em" }} />
            </Grid>
            <Grid item style={{ color: "black" }}>
              <Typography align='center'>Free Internet</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ marginLeft: "5em", marginRight: "5em" }}>
          <Grid container direction='column'>
            <Grid item>
              <DriveEtaIcon style={{ fontSize: "9em" }} />
            </Grid>
            <Grid item style={{ color: "black" }}>
              <Typography align='center'>Pickup and Droping</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <LocalParkingIcon style={{ fontSize: "9em" }} />
            </Grid>
            <Grid item style={{ color: "black" }}>
              <Typography align='center'>Free parking</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ marginLeft: "5em", marginRight: "5em" }}>
          <Grid container direction='column'>
            <Grid item>
              <SmokeFreeIcon style={{ fontSize: "9em" }} />
            </Grid>
            <Grid item style={{ color: "black" }}>
              <Typography align='center'>Smoke Free</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
