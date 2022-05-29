import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const MyTechnology = styled(Paper)(() => ({
  padding: "10px 12px",
  margin: "5px",
  backgroundColor: "#373037",
  borderRadius: "10px",
  color: "#EEEFF1",
  fontWeight: "bold",
}));

const Technology = ({ technology, index }) => {
  return <MyTechnology key={index}>{technology}</MyTechnology>;
};

export default Technology;
