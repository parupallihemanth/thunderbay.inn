import React from "react";
import {
  AppBar,
  Typography,
  Tabs,
  Tab,
  Toolbar,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "4.5em",
    backgroundColor: "white",
  },
  headerText: {
    fontFamily: "Pacifico",
    marginLeft: "1em",
    color: "#0E3854",
  },
  bookButton: {
    borderRadius: "50px",
    marginLeft: "4em",
    marginTop: "1em",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <AppBar position='fixed' className={classes.header}>
      <Toolbar>
        <Typography variant='h3' className={classes.headerText}>
          Thunderbay.Inn
        </Typography>

        <Tabs>
          <Tab
            label='Home'
            style={{ color: "#0E3854", fontWeight: "bold", marginLeft: "30em" }}
          ></Tab>
          <Tab
            label='Explore'
            style={{ color: "#0E3854", fontWeight: "900" }}
          />
          <Button
            to='/signin'
            component={Link}
            variant='contained'
            color='secondary'
            className={classes.bookButton}
          >
            Login/Signup
          </Button>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
