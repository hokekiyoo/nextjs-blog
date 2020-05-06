import React, { useState } from "react";
import Head from "next/head";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/layout";
import MapChart from "../components/MapChart";
import CustomizeSlider from "../components/mySlider";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function App({ allPostsData }) {
  return (
    <>
      <Head>
        <title>app</title>
      </Head>
      <Layout>
        <Box my={4} align="center" justifyContent="center">
          <Typography variant="h4" component="h2" gutterBottom>
            World History tour
            <CustomizeSlider
              title="slider test"
              // handleChange={(e, val) => console.log("val",val)}
            />
          </Typography>
          <div>
            <MapChart data={allPostsData} />
          </div>
        </Box>
        <ul>
          {allPostsData.map(
            ({ id, date, history, title, long, lati, s_year, e_year }) => (
              <li key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>
                    {title} 
                  </a>
                </Link>
                <br />
              </li>
            )
          )}
        </ul>
      </Layout>
    </>
  );
}
