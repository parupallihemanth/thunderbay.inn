import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Map from "../ui/Map";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#0E3854",
    height: "60vh",
    [theme.breakpoints.down("xs")]: {
      height: "150vh",
    },
    marginTop: "0.1em",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.contactContainer}
      id='contact'
      spacing={3}
    >
      <Grid item style={{ marginLeft: "2em" }}>
        <Typography variant='h4' style={{ color: "white" }}>
          {" "}
          Contact us{" "}
        </Typography>
        <Typography variant='h6' style={{ color: "white" }}>
          If you have any questions, please feel free to drop us a message.
          we'll get back to you as <br />
          soon as possible. That's a promise.
        </Typography>
        <Grid container>
          <Grid item>
            <PhoneIphoneIcon fontSize='large' style={{ color: "white" }} />
          </Grid>
          <Grid item>
            <Typography style={{ color: "white" }}>(902) 456-7890</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <MailOutlineIcon fontSize='large' style={{ color: "white" }} />
          </Grid>
          <Grid item>
            <Typography style={{ color: "white" }}>
              thunderbay.inn@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction='row' style={{ marginTop: "2em" }}>
          <Grid item>
            <LinkedInIcon fontSize='large' style={{ color: "white" }} />
          </Grid>
          <Grid>
            <InstagramIcon
              fontSize='large'
              style={{ marginLeft: "1em", marginRight: "1em", color: "white" }}
            />
          </Grid>
          <Grid item>
            <FacebookIcon fontSize='large' style={{ color: "white" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Map />
      </Grid>
    </Grid>
  );
};

export default Footer;
