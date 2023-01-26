import { Link } from "react-router-dom";

const AsideMenu = () => {
  return (
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/toy-project/instagram-post">instagram</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default AsideMenu;
