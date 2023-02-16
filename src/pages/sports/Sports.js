import { Routes, Route } from "react-router-dom";
import "./sports-style/Sports.scss";
import SportsMenuBar from "./SportsMenuBar";
import SportsMain from "./SportsMain";
import SportsHistory from "./SportsHistory";

const Sports = () => {
  return (
    <div className="Sports-Container">
      <Routes>
        <Route path="/" element={<SportsMenuBar />}>
          <Route index element={<SportsMain />} />
          <Route path="/history" element={<SportsHistory />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Sports;
