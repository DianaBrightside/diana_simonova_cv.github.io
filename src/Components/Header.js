import { Button, Grid, Toolbar, Typography } from "@mui/material";

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
        }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Diana Simonova
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
          <Button>Portfolio</Button>
          <Button>Contacts</Button>
          <Button>About</Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Header;
