import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  TextField,
  Input,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import VisibilityIcon from "@material-ui/icons/Visibility";

import Lottie from "react-lottie";

import register from "../animations/register.json";
import FormContainer from "../components/ui/FormContainer";

const useStyles = makeStyles(() => ({
  signupContainer: {
    // height: "100%",
    // background: "lineargradient(90deg, pink 50%, cyan 50%)",
  },

  formStyling: {
    maxWidth: "90%",
  },

  left: {
    position: "relative",
    top: "0px",
    left: "0px",
    width: "35%",
    height: "100vh",
    backgroundColor: "pink",
    zIndex: 1,
  },
  right: {
    marginLeft: "9em",
  },
  rightText: {
    marginTop: "4em",
  },
  formStyling: {
    marginTop: "3em",
  },
  signinButtons: {
    borderRadius: "50px",
    marginLeft: "4em",
    marginTop: "1em",
  },
}));
const SignUp = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: register,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container className={classes.signupContainer}>
      {/* <Typography color='black'>Test</Typography> */}
      <Grid item className={classes.left}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          style={{ marginTop: "10em" }}
        />
      </Grid>
      <Grid item className={classes.right} xs={4}>
        <Typography className={classes.rightText} variant='h4'>
          Signup/Register
        </Typography>
        <FormContainer>
          <Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor='standard-adornment-amount'>
                Username
              </InputLabel>
              <Input
                startAdornment={<PersonIcon position='start'>$</PersonIcon>}
              />
            </FormControl>
          </Grid>
          <Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor='standard-adornment-amount'>
                Phone number
              </InputLabel>
              <Input
                startAdornment={<PhoneIcon position='start'></PhoneIcon>}
              />
            </FormControl>
          </Grid>
          <Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor='standard-adornment-amount'>Email</InputLabel>
              <Input
                startAdornment={
                  <AlternateEmailIcon position='start'></AlternateEmailIcon>
                }
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor='standard-adornment-amount'>
                Password
              </InputLabel>
              <Input
                startAdornment={
                  <VisibilityIcon position='start'></VisibilityIcon>
                }
              />
            </FormControl>
          </Grid>
          <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Link to='/signin'>Already have an account?</Link>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              className={classes.signinButtons}
            >
              Clear
            </Button>
            <Button
              variant='contained'
              color='secondary'
              className={classes.signinButtons}
            >
              Create account
            </Button>
          </Grid>
        </FormContainer>
      </Grid>
    </Grid>
  );
};

export default SignUp;
