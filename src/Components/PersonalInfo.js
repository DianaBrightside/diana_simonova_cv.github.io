import { styled } from "@mui/material/styles";
import { Grid, Link, Typography } from "@mui/material";
import Technologies from "./Technologies";

const AboutMeText = styled(Typography)(() => ({
  display: "flex",
  fontSize: "1.17em",
  textAlign: "justify",
  lineHeight: "1.4em",
}));

const PersonalInfo = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={10} sm={7} md={5} lg={4}>
        <img
          src={require("../Images/personalPhoto.jpg")}
          alt="Diana Simonova"
          width="100%"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="h4">About me</Typography>
        <AboutMeText variant="p">
          Hi! My name is Diana Simonova. I am from Ukraine, Kharkiv. Looking for
          my first challange in Israel! I am a self-taught developer, a person
          who is attentive to details, perfectionist in a good way, full of
          energy and curiosity. Always struggling for new experience and
          knowledge. Ready to gain as much practice as possible.
        </AboutMeText>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">My journey</Typography>
        <AboutMeText variant="p">
          I am Master of Applied and Computer Linguistics of National Technical
          University "Kharkiv Polytechnical Institute" from 2017 to 2022
        </AboutMeText>
        <AboutMeText variant="p">
          Attended Frontend Course from october 15th 2019 to december 28th 2019
        </AboutMeText>
        <AboutMeText variant="p">
          Attended JavaScript Course from january 9th 2020 to march 6th 2020
        </AboutMeText>
      </Grid>
      <Grid item xs={12} md={5}>
        <Technologies />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5">My contacts</Typography>
        <Grid
          item
          sx={{ display: "flex", justifyContent: "space-evenly", padding: 2 }}
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/diana-simonova-395030177/"
            underline="always"
          >
            My LinkedIn
          </Link>
          <Link
            target="_blank"
            href="mailto:dianabrightside@gmail.com"
            underline="always"
          >
            dianabrightside@gmail.com
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
