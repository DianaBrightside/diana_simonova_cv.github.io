import { Box } from "@mui/material";

import Technology from "./Technology";

const technologies = [
  "react",
  "redux",
  "javascript",
  "firebase",
  "jquery",
  "React UI tools",
  "html5",
  "css",
  "adaptive/responsive markup",
  "less/scss/flexbox",
  "git",
  "npm",
];

const Technologies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {technologies.map((technology, index) => {
        return <Technology technology={technology} key={index} />;
      })}
    </Box>
  );
};

export default Technologies;
