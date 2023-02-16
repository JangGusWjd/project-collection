import styled from "styled-components";

const Title = styled.h1`
  margin-top: 0;
`;

const MainBg = styled.div`
  width: 100%;
  height: 75vh;
  background-color: tomato;
`;

const SportsHistory = () => {
  return (
    <MainBg>
      <Title>Sports History Page</Title>
    </MainBg>
  );
};

export default SportsHistory;
