import { Route, Routes } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import Portfolio from "./Portfolio";

const InfoBlock = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default InfoBlock;
