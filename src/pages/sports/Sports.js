import { Routes, Route } from "react-router-dom";
import "./sports-style/Sports.scss";
import SportsMenuBar from "./SportsMenuBar";
import SportsMain from "./SportsMain";
import SportsHistory from "./SportsHistory";
import { useState, useRef, useCallback } from "react";

const Sports = () => {
  const [sportsRecord, setSportsRecord] = useState([
    { id: 1, count: 10 },
    { id: 2, count: 20 },
    { id: 3, count: 100 },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (count) => {
      const record = {
        id: nextId.current,
        count,
      };
      setSportsRecord(sportsRecord.concat(record));
      nextId.current += 1;
    },
    [sportsRecord]
  );

  const [totalCount, setTotalCount] = useState(10000);

  return (
    <div className="Sports-Container">
      <Routes>
        <Route path="/" element={<SportsMenuBar />}>
          <Route
            index
            element={
              <SportsMain
                totalCount={totalCount}
                setTotalCount={setTotalCount}
                onInsert={onInsert}
              />
            }
          />
          <Route
            path="/history"
            element={<SportsHistory sportsRecord={sportsRecord} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Sports;
