import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const HeaderLink = styled(Link)(() => ({
  padding: " 7px 14px",
  margin: 2,
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
      <HeaderLink to="/portfolio">Portfolio</HeaderLink>
      <HeaderLink to="/">About</HeaderLink>
    </>
  );
};
export default HeaderLinks;
