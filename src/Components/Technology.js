import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const MyTechnology = styled(Paper)(() => ({
  padding: "8px",
  margin: "5px",
}));

const Technology = ({ technology, index }) => {
  return <MyTechnology key={index}>{technology}</MyTechnology>;
};

export default Technology;
