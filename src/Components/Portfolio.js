import { Grid, Link, Paper, Typography } from "@mui/material";

const projects = {
  project1: {
    name: "Expense Tracker",
    description:
      "Project for practice. Created with using React, Context and MUI and Styled Components.",
    srcImage: require("../Images/expenseTracker.jpg"),
    hrefWebsite: "https://dianabrightside.github.io/expense-tracker/",
  },
  project2: {
    name: "Login/sign up page",
    description:
      "Test project for Favvle company. Created with using React, firebase, React-router and Styled Components.",
    srcImage: require("../Images/favvleApp.jpg"),
    hrefWebsite: "https://favvle-app.web.app/",
  },
  project3: {
    name: "News Web Page",
    description:
      "Test project for Techstack company. Created with using React and React-router.",
    srcImage: require("../Images/newsApp.jpg"),
    hrefWebsite: "https://dianabrightside.github.io/News-application/#/",
  },
  project4: {
    name: "Chuck Norris's Jokes",
    description:
      "Test project for Codempire company. Created with using React, Redux and Material UI.",
    srcImage: require("../Images/chuckNorrisApp.jpg"),
    hrefWebsite: "https://dianabrightside.github.io/chuck-norris-website/",
  },
};

const Portfolio = () => {
  return (
    <>
      {Object.keys(projects).map((keyName, index) => {
        return (
          <Link
            key={index}
            href={projects[keyName].hrefWebsite}
            variant="h6"
            target="_blank"
            sx={{ textDecoration: "none" }}
          >
            <Paper sx={{ padding: "15px", margin: "15px 0" }}>
              <Grid
                container
                justifyContent="space-evenly"
                sx={{
                  margin: "15px 0",
                }}
              >
                <Grid item xs={12} md={6}>
                  <img
                    src={projects[keyName].srcImage}
                    alt={projects[keyName].name}
                    width="100%"
                  />
                </Grid>
                <Grid
                  item
                  xs={10}
                  md={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ margin: "5px" }}>
                    {projects[keyName].name}
                  </Typography>
                  <Typography variant="p" sx={{ fontWeight: "normal" }}>
                    {projects[keyName].description}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Link>
        );
      })}
    </>
  );
};

export default Portfolio;
