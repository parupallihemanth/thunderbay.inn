import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import HeaderImage from "../assets/main.JPG";

import MostPopular from "../components/ui/MostPopular";
import Offerings from "../components/ui/Offerings";
import Services from "../components/ui/Services";
import Footer from "../components/ui/Footer";

const useStyles = makeStyles((theme) => ({
  landingImage: {
    height: "400px",
  },

  mainText: {
    marginTop: "1em",
    marginLeft: "1em",
    fontFamily: "Pacifico",
  },
  mainText1: {
    fontFamily: "Roboto",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#0E3854",
  },
  mainImage: {
    marginTop: "3em",
  },
  bookButton: {
    borderRadius: "50px",
    marginLeft: "4em",
    marginTop: "1em",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Grid container className={classes.landingImage} direction='column'>
        <Grid item xs={6}>
          <Grid container>
            <Grid item>
              <Typography
                color='black'
                variant='h2'
                className={classes.mainText}
              >
                {/* Thunderbay inn{" "} */}
                <span className={classes.mainText1}>
                  <br />
                  THE NEW 5 STAR HOTEL IN THUNDER BAY REDEFINES DISCREET LUXURY
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='secondary'
                className={classes.bookButton}
              >
                Book online now
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.mainImage}>
          <img src={HeaderImage} alt='Mobile app' height='95%' width='95%' />
        </Grid>
      </Grid>

      {/* Most popular */}

      <MostPopular />
      <Offerings />
      <Services />
      <Footer />
    </>
  );
};

export default LandingPage;
