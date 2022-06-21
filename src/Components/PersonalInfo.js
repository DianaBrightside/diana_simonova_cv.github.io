import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ComputerIcon from "@mui/icons-material/Computer";

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

const WorkIcon = styled(ComputerIcon)(() => sharedIconPadding);

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
          React/Front-End Developer
        </Typography>
        <AboutMeText variant="p">
          Hi! My name is Diana Simonova. Located in Israel.
        </AboutMeText>
        <AboutMeText variant="p">
          I am React/Front-end developer. Experienced in building single-page
          applications.
        </AboutMeText>
        <AboutMeText variant="p">
          Looking for the first challange in Israel!
        </AboutMeText>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography sx={{ paddingBottom: 2 }} variant="h5">
          My journey
        </Typography>
        <AboutMeBox>
          <AboutMeText variant="p">
            <WorkIcon />
            React Track Mentor – SheCodes;
          </AboutMeText>
          <AboutMeYearText variant="p">2022 May - Current Time</AboutMeYearText>
        </AboutMeBox>
        <AboutMeBox>
          <AboutMeText variant="p">
            <WorkIcon />
            Junior React Front-End Developer – Codempire
          </AboutMeText>
          <AboutMeYearText variant="p">
            2021 August - 2022 February
          </AboutMeYearText>
        </AboutMeBox>
        <AboutMeBox>
          <AboutMeText variant="p">
            <WorkIcon />
            React Front-End Developer Intern – Codempire
          </AboutMeText>
          <AboutMeYearText variant="p">
            2021 February - 2021 August
          </AboutMeYearText>
        </AboutMeBox>
        <AboutMeBox>
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
            JavaScript Course - Lemon School
          </AboutMeText>
          <AboutMeYearText variant="p">2020 - 2021</AboutMeYearText>
        </AboutMeBox>
        <AboutMeBox>
          <AboutMeText variant="p">
            <BulbIcon />
            Front-end Course - Lemon School
          </AboutMeText>
          <AboutMeYearText variant="p">2019 - 2020</AboutMeYearText>
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
