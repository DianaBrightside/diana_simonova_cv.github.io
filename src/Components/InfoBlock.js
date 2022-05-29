import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";

const InfoBlock = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="portfolio" />
      </Routes>
    </div>
  );
};

export default InfoBlock;
