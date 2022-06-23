import { Box, Paper, ThemeProvider } from "@mui/material";
import { HashRouter } from "react-router-dom";

import { theme } from "../Style/theme";

import Header from "./Header";
import InfoBlock from "./InfoBlock";

const ContentWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Paper
            sx={{
              overflow: "scroll",
              height: "95vh",
              width: "75vw",
              [theme.breakpoints.down("sm")]: {
                width: "100vw",
                height: "100vh",
              },
              padding: "15px",
            }}
            elevation={8}
          >
            <Header />
            <InfoBlock />
          </Paper>
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
};

export default ContentWrapper;
