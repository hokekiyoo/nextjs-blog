import React from "react";
import Head from "next/head";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <Layout>
        <Box my={4} align="center" justifyContent="center">
          <Typography variant="h4" component="h2" gutterBottom>
            imaimaiのnextjs練習帳
          </Typography>
          色々と書いていくつもりです
        </Box>
      </Layout>
    </>
  );
}
