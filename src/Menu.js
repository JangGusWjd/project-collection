import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";
import "./Menu.css";
import { useState } from "react";

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
    margin-left: 1.5rem;
  }

  button:hover {
    background: white;
    border: 2px solid rgb(255, 255, 255);
    color: rgb(62, 62, 62);
  }
`;

const Menu = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="menu-bar">
      <header>
        <AiOutlineMenu
          className="toggle-button"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        />
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
          <BtnLink to="/login">
            <button className="login-button">Log In</button>
          </BtnLink>
        </div>

        <StyledLink to="/login">
          <MdOutlineLogin className="toggle-login-button" />
        </StyledLink>
      </header>
      {isToggled ? (
        <div className="toggle-menu-bar">
          <ul className="toggleMenus">
            <li className="toggle_menu">
              <StyledLink
                to="/"
                onClick={() => {
                  setIsToggled(!isToggled);
                }}
              >
                HOME
              </StyledLink>
            </li>
            <li className="toggle_menu">
              <StyledLink
                to="/toy-project"
                onClick={() => {
                  setIsToggled(!isToggled);
                }}
              >
                TOY PROJECT
              </StyledLink>
            </li>
            <li className="toggle_menu">
              <StyledLink
                to="/bucket"
                onClick={() => {
                  setIsToggled(!isToggled);
                }}
              >
                BUCKET LIST
              </StyledLink>
            </li>
            <li className="toggle_menu">
              <StyledLink
                to="/news"
                onClick={() => {
                  setIsToggled(!isToggled);
                }}
              >
                NEWS
              </StyledLink>
            </li>
            <li className="toggle_menu">
              <StyledLink
                to="/map"
                onClick={() => {
                  setIsToggled(!isToggled);
                }}
              >
                MAP
              </StyledLink>
            </li>
            <li className="toggle_menu">
              <StyledLink
                to="/question"
                onClick={() => {
                  setIsToggled(!isToggled);
                }}
              >
                QNA
              </StyledLink>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <Outlet />
    </div>
  );
};

export default Menu;
