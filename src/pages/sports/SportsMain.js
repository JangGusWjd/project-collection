import styled from "styled-components";

const Title = styled.h1`
  margin-top: 0;
`;

const MainBg = styled.div`
  width: 100%;
  height: 75vh;
  background-color: darkolivegreen;
`;
const SportsMain = () => {
  return (
    <MainBg>
      <Title>Sports Challenge Main Page</Title>
    </MainBg>
  );
};

export default SportsMain;
