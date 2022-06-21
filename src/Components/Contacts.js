import { Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
}));

const Contacts = () => {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <ContactLink
        target="_blank"
        href="https://www.linkedin.com/in/diana-simonova-395030177/"
        underline="always"
      >
        <LinkedInIcon />
        LinkedIn
      </ContactLink>
      <ContactLink
        target="_blank"
        href="mailto:dianabrightside@gmail.com"
        underline="always"
      >
        <AlternateEmailIcon />
        dianabrightside@gmail.com
      </ContactLink>
      <ContactLink
        target="_blank"
        href="https://github.com/DianaBrightside"
        underline="always"
      >
        <GitHubIcon />
        GitHub
      </ContactLink>
    </Grid>
  );
};

export default Contacts;
