import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Meeting from "../../assets/meeting.jpeg";
import Dining from "../../assets/dining.jpeg";
import View from "../../assets/view.jpeg";

const Offerings = () => {
  return (
    <>
      <Typography align='center' variant='h4' style={{ marginTop: "3em" }}>
        Why we are different from others
      </Typography>

      <Grid container>
        <Grid item>
          {/* Meeting */}
          <Grid
            container
            spacing={6}
            style={{ marginLeft: "4em", marginTop: "3em" }}
          >
            <Grid item xs={6}>
              <Grid container>
                <Grid item>
                  <Typography
                    variant='h4'
                    style={{
                      maxWidth: "80%",
                      lineHeight: "1em",
                      color: "#0E3854",
                      fontWeight: "bold",
                    }}
                  >
                    Plan your next success at our event venu in Thunderbay
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    paragraph
                    style={{
                      maxWidth: "80%",
                      marginTop: "1em",
                      lineHeight: "1.5em",
                    }}
                  >
                    Thunderbay.inn features 17 exceptional event venues,
                    providing 9,818 square feet of inviting and elegant space.
                    Our largest meeting room can accommodate up to 450 guests in
                    a theater-style setup. Audio-visual equipment and services
                    are supported by Freemans Audiovisual, offering friendly
                    service and prompt onsite assistance from knowledgeable
                    technicians.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <img src={Meeting} alt='meeting' height='300' width='500' />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/* Dining */}
          <Grid
            container
            spacing={6}
            style={{ marginLeft: "4em", marginTop: "3em" }}
          >
            <Grid item xs={6}>
              <img src={Dining} alt='dining' height='300' width='500' />
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item>
                  <Typography
                    variant='h4'
                    style={{
                      maxWidth: "80%",
                      lineHeight: "1em",
                      color: "#0E3854",
                      fontWeight: "bold",
                    }}
                  >
                    Experience a meal to write home about
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    paragraph
                    style={{
                      maxWidth: "80%",
                      marginTop: "1em",
                      lineHeight: "1.5em",
                    }}
                  >
                    With our in-house catering and culinary team, taking care
                    and caution in our approach to food and beverage preparation
                    and service has always been a priority. Thanks to our new
                    state-of-the-art kitchen and equipment, we have everything
                    we need to create a safe, healthy experience for your
                    guests.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            spacing={6}
            style={{ marginLeft: "4em", marginTop: "3em" }}
          >
            <Grid item xs={6}>
              <Grid container>
                <Grid item>
                  <Typography
                    variant='h4'
                    style={{
                      maxWidth: "80%",
                      lineHeight: "1em",
                      color: "#0E3854",
                      fontWeight: "bold",
                    }}
                  >
                    Enjoy wonderful experiences in Thunderbay
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    paragraph
                    style={{
                      maxWidth: "80%",
                      marginTop: "1em",
                      lineHeight: "1.5em",
                    }}
                  >
                    Thunderbay is known for its famous classical musicians,
                    historical buildings, stunning landscape, world-known skiing
                    resorts and coffee-house-tradition. But apart from the most
                    obvious, there are many other must-visit destinations one
                    shouldn’t miss when on a holiday in the land of Symphonies
                    and shiny glass crystals.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <img src={View} alt='view' height='300' width='500' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Offerings;
