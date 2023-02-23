import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { MdSportsKabaddi } from "react-icons/md";
import "./sports-style/SportsMenuBar.scss";

const StyledLi = styled.li`
  list-style: none;
  margin-right: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 800;

  &:hover {
    color: #c42a12;
  }
`;

const SportsMenuBar = () => {
  return (
    <div>
      <nav className="sports-menu-bar">
        <div className="sports-menu-bar-logo">
          <MdSportsKabaddi className="sports-logo" />
        </div>
        <div className="sports-menu-bar-title">
          <p>SPORTS CHALLENGE</p>
        </div>
        <ul className="sports-menus">
          <StyledLi>
            <StyledLink to="">홈</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="history">히스토리</StyledLink>
          </StyledLi>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default SportsMenuBar;
