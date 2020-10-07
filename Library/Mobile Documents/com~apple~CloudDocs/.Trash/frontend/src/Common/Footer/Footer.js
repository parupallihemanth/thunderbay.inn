import React from 'react'

import Image from "../../assessts/logo.png"


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "rgb(255, 255, 255)"
    },
    link: {
        color: "rgb(119, 119, 119)",
        fontFamily: "Arial",
        fontSize: "1rem",
        fontWeight: "300",
        textDecoration: "none"
    },
    linkHead: {
        fontWeight: "bold",
        color: "#070504",
        fontSize: "1.2rem",
        textDecoration: "none"
    },
    gridItem: {
        margin: "4em"
    },
    grid: {
      fontsize: "1.3rem",
      border: "0.1rem solid #e1e1e1",
      borderRadius: "0.3rem",
      
    },
    Icon: {
        fontSize:"2em",
        color: "#070504"
    },
    gridin: {
        padding: "0.5rem 0.5rem 0.5rem 0.5rem"
    },
    phone: {
        color: "#3399FF",
        fontSize: "20px"
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            
        </div>
    )
}
