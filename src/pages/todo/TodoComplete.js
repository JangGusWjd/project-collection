import styled from "styled-components";

const TodoCompleteZip = styled.div`
  width: 100%;
  height: 100%;
`;

const TodoCompleteTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`;

const CompleteZip = styled.div`
  width: 100%;
  height: 80%;
  background: #5b78ac;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoComplete = () => {
  return (
    <TodoCompleteZip>
      <TodoCompleteTitle>Complete</TodoCompleteTitle>
      <CompleteZip></CompleteZip>
    </TodoCompleteZip>
  );
};

export default TodoComplete;
