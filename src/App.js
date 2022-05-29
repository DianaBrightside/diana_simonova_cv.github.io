import { ThemeProvider } from "@mui/material";
import ContentWrapper from "./Components/ContentWrapper";
import "./Style/style.css";

import { theme } from "./Style/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper />
    </ThemeProvider>
  );
};
export default App;
