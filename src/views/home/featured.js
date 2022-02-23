import React, { Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, Paper, Typography } from "@mui/material";

function Item(props) {
  return (
    <Fragment>
      <Box
        sx={{
          "& > :not(style)": {
            width: "100%",
            height: {
              xs: 240,
              md: 350,
            },
          },
        }}
      >
        <Paper
          elevation={6}
          sx={{
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${props.item.image})`,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.60)",
            }}
          />
          <Grid container>
            <Grid item md={10}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                  ml: { md: 3 },
                }}
              >
                <Box sx={{ display: { xs: "none", md: "contents" } }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    {props.item.title}
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: "contents", md: "none" } }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    gutterBottom
                  >
                    {props.item.title}
                  </Typography>
                </Box>

                <Typography variant="subtitle1" color="inherit" paragraph>
                  by <strong>TEST</strong> ~ 30 Jan 2022
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fragment>
  );
}

export default function FeaturedPosts(props) {
  var items = [
    {
      image:
        "https://lh3.googleusercontent.com/-XPjZN-6SSkg/YdWRIwbMMoI/AAAAAAAAATo/pNe0jeOM6AcIT0FBxjCUVG1kNOh2feLcwCNcBGAsYHQ/image.png",
      title: "Beberapa game anime yang bagus menurut Admin Hibana",
      author: "",
      date: "",
    },
    {
      image:
        "https://lh3.googleusercontent.com/-wmjSrOSO1X0/YbWg5ydO9qI/AAAAAAAAARg/XgnbKRTAFUshqHaUEho4-wxlO20UxQTLgCNcBGAsYHQ/w551-h310/image.png",
      title: "Ada apa aja di The Game Awards 2021 kemarin?",
      author: "",
      date: "",
    },
    {
      image:
        "https://lh3.googleusercontent.com/-C9PAPzd5sJc/YZcUmREtEsI/AAAAAAAAAQc/SvZkQoxVlvsz59PCKDL2jzZs3MXPkFZAgCLcBGAsYHQ/w456-h257/image.png",
      title: "Review singkat Blue Archive",
      author: "",
      date: "",
    },
    {
      image:
        "https://lh3.googleusercontent.com/-k1ORRcGocdo/YXYe7FaxZ8I/AAAAAAAAAQM/QD1dbjljGfkM1MUmVQm40p8XfHSL4vh-wCLcBGAsYHQ/w456-h228/image.png",
      title: "Arknights akan mendapat adaptasi Anime!!",
      author: "",
      date: "",
    },
  ];

  return (
    <Fragment>
      <Box sx={{ display: { xs: "none", md: "contents" } }}>
        <Carousel duration={1000} interval={5000}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
      <Box sx={{ display: { xs: "contents", md: "none" } }}>
        <Carousel animation="slide" duration={1000} interval={5000}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </Fragment>
  );
}
