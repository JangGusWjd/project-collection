import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/ToyHome.scss";

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const ToyHome = () => {
  return (
    <div className="ToyHome-Container">
      <h1>TOY PROJECT</h1>
      <div className="ToyHome-Menu">
        <ul>
          <StyledLink to="/toy-project/instagram-post">
            <li>Instagram Post</li>
          </StyledLink>
          <StyledLink to="/toy-project/todo">
            <li>Todo List</li>
          </StyledLink>
          <li>직원 출퇴근 관리</li>
          <StyledLink to="/toy-project/sports-challenge">
            <li>Sports Challenge</li>
          </StyledLink>
          <li>Toy Project 5</li>
        </ul>
      </div>
    </div>
  );
};

export default ToyHome;
