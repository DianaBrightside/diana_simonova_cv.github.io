import { Paper } from "@mui/material";

const Technology = ({ technology, index }) => {
  return <Paper key={index}>{technology}</Paper>;
};

export default Technology;
