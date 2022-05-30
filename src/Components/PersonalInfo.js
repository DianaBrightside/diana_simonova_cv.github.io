import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import Technologies from "./Technologies";
import Contacts from "./Contacts";

const AboutMeText = styled(Typography)(() => ({
  display: "flex",
  fontSize: "1.0em",
  textAlign: "justify",
  lineHeight: "1.4em",
}));

const AboutMeYearText = styled(Typography)(() => ({
  fontSize: "0.9em",
  paddingLeft: 32,
  fontWeight: "bold",
}));

const AboutMeBox = styled(Box)(() => ({
  paddingBottom: 16,
}));

const sharedIconPadding = {
  paddingRight: 8,
};

const BulbIcon = styled(LightbulbIcon)(() => sharedIconPadding);

const UniversityIcon = styled(SchoolIcon)(() => sharedIconPadding);

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
        <Typography sx={{ paddingBottom: 2 }} variant="h4">
          About me
        </Typography>
        <AboutMeText variant="p">
          Hi! My name is Diana Simonova. I am from Ukraine, Kharkiv. Looking for
          my first challange in Israel! I am a self-taught developer, a person
          who is attentive to details, perfectionist in a good way, full of
          energy and curiosity. Always struggling for new experience and
          knowledge. Ready to gain as much practice as possible.
        </AboutMeText>
      </Grid>
      <Grid item xs={12} md={5}>
        <AboutMeBox>
          <Typography sx={{ paddingBottom: 2 }} variant="h5">
            My journey
          </Typography>
          <AboutMeText variant="p">
            <UniversityIcon />
            Master of Applied and Computer Linguistics of National Technical
            University "Kharkiv Polytechnical Institute"
          </AboutMeText>
          <AboutMeYearText variant="p">2017 - 2022</AboutMeYearText>
        </AboutMeBox>
        <AboutMeBox>
          <AboutMeText variant="p">
            <BulbIcon />
            React Front-End Developer Intern
          </AboutMeText>
          <AboutMeYearText variant="p">
            2021 August - 2022 February
          </AboutMeYearText>
        </AboutMeBox>
        <AboutMeBox>
          <AboutMeText variant="p">
            <BulbIcon />
            Front-end Course - Limon School
          </AboutMeText>
          <AboutMeYearText variant="p">2019 - 2020</AboutMeYearText>
        </AboutMeBox>
        <AboutMeBox>
          <AboutMeText variant="p">
            <BulbIcon />
            JavaScript Course - Limon School
          </AboutMeText>
          <AboutMeYearText variant="p">2020 - 2021</AboutMeYearText>
        </AboutMeBox>
      </Grid>
      <Grid item xs={12} md={5}>
        <Technologies />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5">Contacts</Typography>
        <Contacts />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
