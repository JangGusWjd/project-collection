import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { IoLogoReact } from "react-icons/io5";
import { RiQuestionAnswerLine } from "react-icons/ri";
import "./Menu.css";

const StyledLink = styled(Link)`
  color: rgb(179, 179, 179);
  text-decoration-line: none;
  font-weight: 600;

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

const BtnLink = styled(Link)`
  width: 7%;
  text-decoration: none;
  margin-right: 0.5rem;

  button {
    background: none;
    outline: none;
    border: none;
    width: 100%;
    height: 4vh;
    border: 2px solid rgb(179, 179, 179);
    border-radius: 15px;
    color: rgb(179, 179, 179);
    font-weight: 600;
  }

  button:hover {
    background: white;
    border: 2px solid rgb(255, 255, 255);
    color: rgb(62, 62, 62);
  }
`;

const Menu = () => {
  return (
    <div className="menu-bar">
      <header>
        <IoLogoReact className="logo" />
        <div className="menu">
          <ul className="menu-list">
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/toy-project">TOY PROJECT</StyledLink>
            </li>
            <li>
              <StyledLink to="/bucket">Bucket List</StyledLink>
            </li>
            <li>
              <StyledLink to="/news">News</StyledLink>
            </li>
            <li>
              <StyledLink to="/map">Map</StyledLink>
            </li>
            <li>
              <StyledLink to="/question">
                <RiQuestionAnswerLine className="board-logo" />
              </StyledLink>
            </li>
          </ul>
        </div>

        <BtnLink to="/login">
          <button>Log In</button>
        </BtnLink>
      </header>
      <Outlet />
    </div>
  );
};

export default Menu;
