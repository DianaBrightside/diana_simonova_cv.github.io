import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const HeaderLink = styled(Link)(() => ({
  display: "inline-block",
  padding: " 7px 14px",
  margin: 3,
  fontWeight: "bold",
  color: "#373037",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#373037",
    borderRadius: "10px",
    color: "#EEEFF1",
  },
}));

const HeaderLinks = () => {
  return (
    <>
      <HeaderLink to="/">About</HeaderLink>
      <HeaderLink to="/portfolio">Portfolio</HeaderLink>
    </>
  );
};
export default HeaderLinks;
