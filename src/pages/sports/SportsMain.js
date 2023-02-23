import styled from "styled-components";
import "./sports-style/SportsMain.scss";
import { useState } from "react";

const MainBg = styled.div`
  width: 100%;
  height: 75vh;
  background-color: rgb(255, 226, 112);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalCountContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  color: orange;
  font-weight: 800;
  border: 3px solid orange;
  border-radius: 25px;
  padding: 0 1rem;
`;

const TotalCount = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 8rem;
  height: 60%;
  display: flex;
  align-items: center;
  color: white;
`;

const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
  background-color: orange;
  border: 2px solid orange;
  border-radius: 25px;
  padding: 0 1rem;
  margin-right: 1rem;
`;

const ApplyButton = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: orange;
  border: 2px solid orange;
  border-radius: 25px;
  padding: 0 1rem;
  margin-top: 1rem;
`;

const SportsMain = ({ onInsert, totalCount, setTotalCount }) => {
  // const [totalCount, setTotalCount] = useState(1000);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const displayExercise = () => {
    setVisible(true);
  };

  const onCountClick = (e) => {
    let nums = count;
    nums += parseInt(e.target.value);
    setCount(nums);
  };

  const onTotalCountClick = () => {
    setTotalCount(totalCount + count);
    onInsert(count);
    setCount(0);
    setVisible(false);
  };

  return (
    <MainBg>
      <TotalCountContainer>
        <SubTitle>스쿼트 누적 개수</SubTitle>
        <TotalCount>{totalCount}</TotalCount>
        <Button onClick={displayExercise}>스쿼트 실행</Button>
      </TotalCountContainer>
      {visible && (
        <div className="sports-add-count">
          <h2>{count}</h2>
          <div>
            <Button value="10" onClick={onCountClick}>
              +10
            </Button>
            <Button value="5" onClick={onCountClick}>
              +5
            </Button>
            <Button>0</Button>
            <Button value="-5" onClick={onCountClick}>
              -5
            </Button>
            <Button value="-10" onClick={onCountClick}>
              -10
            </Button>
          </div>
          <ApplyButton onClick={onTotalCountClick}>스쿼트 적용</ApplyButton>
        </div>
      )}
    </MainBg>
  );
};

export default SportsMain;
