import React from "react";
import Head from "next/head";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/layout";

export default function App() {
  return (
    <>
      <Head>
        <title>app</title>
      </Head>
      <Layout>
        <Box my={4} align="center" justifyContent="center">
          <Typography variant="h4" component="h2" gutterBottom>
            画像で遊ぶ
          </Typography>
        </Box>
      </Layout>
    </>
  );
}
