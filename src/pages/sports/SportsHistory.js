import styled from "styled-components";
import "./sports-style/SportsHistory.scss";

const Title = styled.h1`
  height: 10%;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
`;

const MainBg = styled.div`
  width: 100%;
  height: 75vh;
  background-color: rgb(255, 226, 112);
`;

const SportsHistory = ({ sportsRecord }) => {
  const showRecord = (record) => {
    return (
      <div className="sports-record" key={record.id}>
        <p>{record.id}회차</p>
        <p>{record.count}개</p>
      </div>
    );
  };

  return (
    <MainBg>
      <Title>스쿼트 기록</Title>
      <div className="sports-record-container">
        {sportsRecord.map((record) => showRecord(record))}
      </div>
    </MainBg>
  );
};

export default SportsHistory;
