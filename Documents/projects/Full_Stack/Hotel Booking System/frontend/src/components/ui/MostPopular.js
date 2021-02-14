import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

import DeluxOneKing from "../../assets/Deluxe-One-King.jpg";
import DeluxTwoQueen from "../../assets/Deluxe-Two-Queen.jpg";
import DoubleRoom from "../../assets/DoubleRoom-1.jpg";
import JuniorSuit from "../../assets/Junior-Suite.jpg";
import SingleRoom from "../../assets/SingleRoom-1.jpg";
import StandardRoomWithOneDoubleBed from "../../assets/Standard-Room-with-One-DoubleBed.jpg";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
  },
  mostPopularContainer: {
    marginTop: "15em",
    marginLeft: "4em",
    maxWidth: "90%",
  },
}));

const roomsList = [
  {
    roomType: "Delux One King",
    roomImage: DeluxOneKing,
  },

  {
    roomType: "Delux Two Queen",
    roomImage: DeluxTwoQueen,
  },
  {
    roomType: "Delux Two Bed Room Suit",
    roomImage: DoubleRoom,
  },
  {
    roomType: "Junior Suit",
    roomImage: JuniorSuit,
  },
  {
    roomType: "Single Room",
    roomImage: SingleRoom,
  },
  {
    roomType: "Room With One Double Bed",
    roomImage: StandardRoomWithOneDoubleBed,
  },
];

const MostPopular = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Grid
        container
        spacing={4}
        className={classes.mostPopularContainer}
        justify='center'
      >
        {roomsList.map((room, index) => (
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={room.roomImage}
                  title={room.roomType}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {room.roomType}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MostPopular;
