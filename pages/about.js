import React from "react";
import Head from "next/head";
import { Button, Box, Typography } from "@material-ui/core";
import Layout from "../components/layout";
import CustomizeSlider from "../components/mySlider";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.imgs = new Array(100);
    this.state = { count: 0 };
  }

  componentDidMount() {
    for (let i = 0; i <= 99; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = "images/face/" + i + ".png";
    }
    document.getElementById("pic").src = this.imgs[0].src;
    console.log("hogehoge");
  }

  render() {
    return (
      <>
        <Head>
          <title>about</title>
        </Head>
        <Layout>
          <Box my={4} align="center" justifyContent="center">
            <Typography variant="h4" component="h2" gutterBottom>
              Angry Index
            </Typography>
            <center>
              <Box width="70%">
                <img className="mj" id="pic" src="loading.gif" width="100%" />
                <CustomizeSlider
                  title="Angry Index"
                  handleChange={(e, val) => {
                    document.getElementById("pic").src = this.imgs[val].src;
                  }}
                />
              </Box>
            </center>
          </Box>
        </Layout>
      </>
    );
  }
}

export default About;
