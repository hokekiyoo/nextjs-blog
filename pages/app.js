import React from "react";
import Head from "next/head";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/layout";
import MapChart from "../components/MapChart";
import CustomizeSlider from "../components/mySlider";

export default function App() {
  return (
    <>
      <Head>
        <title>app</title>
      </Head>
      <Layout>
        <Box my={4} align="center" justifyContent="center">
          <Typography variant="h4" component="h2" gutterBottom>
            nextjs練習帳
          </Typography>
          グラフとかスライダーとか使って遊ぼうかな
          <MapChart />
          <CustomizeSlider
            title="slider test"
            // handleChange={(e, val) => console.log("val",val)}
          />
        </Box>
      </Layout>
    </>
  );
}
