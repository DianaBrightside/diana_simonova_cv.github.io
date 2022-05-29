import { Grid, Typography } from "@mui/material";
import Technologies from "./Technologies";

const PersonalInfo = () => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid item xs={10} sm={5} lg={4}>
        <img
          src={require("../Images/personalPhoto.jpg")}
          alt="Diana Simonova"
          width="100%"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3">Hi there</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam
          nemo ullam nobis odit corporis illo quos sed autem incidunt? Earum
          nobis neque reiciendis numquam tempora, optio fugit magnam aliquam
          praesentium omnis dolore excepturi. Ipsam facilis officia molestias
          cupiditate dolor!
        </Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h3">My journey</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam
          nemo ullam nobis odit corporis illo quos sed autem incidunt? Earum
          nobis neque reiciendis numquam tempora, optio fugit magnam aliquam
          praesentium omnis dolore excepturi. Ipsam facilis officia molestias
          cupiditate dolor!
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Technologies />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
