import { Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
}));

const Contacts = () => {
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "space-evenly", padding: 2 }}
    >
      <ContactLink
        target="_blank"
        href="https://www.linkedin.com/in/diana-simonova-395030177/"
        underline="always"
      >
        <LinkedInIcon /> My LinkedIn
      </ContactLink>
      <ContactLink
        target="_blank"
        href="mailto:dianabrightside@gmail.com"
        underline="always"
      >
        <AlternateEmailIcon /> dianabrightside@gmail.com
      </ContactLink>
    </Grid>
  );
};

export default Contacts;
