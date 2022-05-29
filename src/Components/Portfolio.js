import { Grid, Link, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <Grid container spacing={4} sx={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <Link
          href="https://dianabrightside.github.io/chuck-norris-website/"
          target="_blank"
        >
          <Typography variant="h5">
            Web page about Chuck Norris's jokes
          </Typography>
          <img
            width="100%"
            src={require("../Images/chuckNorrisApp.jpg")}
            alt="web page about Chuck Norris's jokes"
          />
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link
          href="https://dianabrightside.github.io/News-application/#/"
          target="_blank"
        >
          <Typography variant="h5">News web page</Typography>
          <img
            width="100%"
            src={require("../Images/newsApp.jpg")}
            alt="news web page"
          />
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link href="https://favvle-app.web.app/" target="_blank">
          <Typography variant="h5">Login/Sign Up web page</Typography>
          <img
            width="100%"
            src={require("../Images/favvleApp.jpg")}
            alt="login webpage for Favvle"
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
