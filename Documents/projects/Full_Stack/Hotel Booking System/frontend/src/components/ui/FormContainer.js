import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formComponent: {
    // marginTop: "6em",
    // width: "100%",
  },
}));

const FormCotainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.formComponent}>{children}</div>;
};

export default FormCotainer;
