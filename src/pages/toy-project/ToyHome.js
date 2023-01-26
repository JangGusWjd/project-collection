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
            <li>instagram</li>
          </StyledLink>
          <li>Toy Project 2</li>
          <li>Toy Project 3</li>
          <li>Toy Project 4</li>
          <li>Toy Project 5</li>
        </ul>
      </div>
    </div>
  );
};

export default ToyHome;
