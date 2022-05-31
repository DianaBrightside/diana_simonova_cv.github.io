import { Grid, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <Toolbar>
      <Grid
        container
        sx={{
          "@media(max-width: 899px)": {
            textAlign: "center",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            🖤 Diana Simonova
          </Typography>
        </Grid>
        <Grid
          sx={{
            "@media(min-width: 900px)": {
              textAlign: "end",
            },
          }}
          item
          xs={12}
          sm={12}
          md={6}
        >
          <HeaderLinks />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Header;
