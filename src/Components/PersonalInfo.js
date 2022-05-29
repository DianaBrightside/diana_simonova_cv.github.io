import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import Technologies from "./Technologies";
import Contacts from "./Contacts";

import SchoolIcon from "@mui/icons-material/School";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const AboutMeText = styled(Typography)(() => ({
  display: "flex",
  fontSize: "1.17em",
  textAlign: "justify",
  lineHeight: "1.4em",
  alignItems: "center",
}));

const PersonalInfo = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "space-around", alignItems: "center" }}
    >
      <Grid item xs={10} sm={7} md={5} lg={4}>
        <img
          src={require("../Images/personalPhoto.png")}
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
          <SchoolIcon />I am Master of Applied and Computer Linguistics of
          National Technical University "Kharkiv Polytechnical Institute" from
          2017 to 2022
        </AboutMeText>
        <AboutMeText variant="p">
          <LightbulbIcon /> Attended Frontend Course from october 15th 2019 to
          december 28th 2019
        </AboutMeText>
        <AboutMeText variant="p">
          <LightbulbIcon /> Attended JavaScript Course from january 9th 2020 to
          march 6th 2020
        </AboutMeText>
      </Grid>
      <Grid item xs={12} md={5}>
        <Technologies />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5">My contacts</Typography>
        <Contacts />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
