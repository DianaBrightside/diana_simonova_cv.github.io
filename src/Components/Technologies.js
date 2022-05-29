import { Box } from "@mui/material";
import Technology from "./Technology";

const Technologies = () => {
  const technologies = [
    "javascript(ES5/6)",
    "jquery",
    "react",
    "React UI tools",
    "html5",
    "css3",
    "adaptive/responsive markup",
    "less/scss/flexbox",
    "git",
    "npm",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {technologies.map((technology, index) => {
        return <Technology technology={technology} key={index} />;
      })}
    </Box>
  );
};

export default Technologies;
