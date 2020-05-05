import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Info, Apps, HomeSharp } from "@material-ui/icons";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const usemUIStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(1.0),
    textAlign: "center",
    width: "80%",
  },
}));

export default function Home({ allPostsData }) {
  const classes = usemUIStyles();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} align="center">
          <Link href="/about">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              <Info /> ABOUT
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} align="center">
          <Link href="/app">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              <Apps /> APP
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} align="center">
          <Link href="/">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              <HomeSharp /> Home
            </Button>
          </Link>
        </Grid>
      </Grid>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg} align="center">
          Recent Articles
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                Last Update : <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
