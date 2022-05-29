import { Box, Paper, ThemeProvider } from "@mui/material";
import { theme } from "../Style/theme";
import Header from "./Header";
import InfoBlock from "./InfoBlock";

const ContentWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
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
            width: "65vw",
            padding: "0 15px",
          }}
          elevation={8}
        >
          <Header />
          <InfoBlock />
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default ContentWrapper;
