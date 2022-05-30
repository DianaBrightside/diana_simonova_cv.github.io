import { ThemeProvider } from "@mui/material";
import ContentWrapper from "./Components/ContentWrapper";
import { theme } from "./Style/theme";

import "./Style/style.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper />
    </ThemeProvider>
  );
};
export default App;
