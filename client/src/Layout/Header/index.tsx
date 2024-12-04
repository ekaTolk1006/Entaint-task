import { Link } from "react-router";
import "./Header.scss";
import { MOVIES_TEXT } from "../constants";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="header__navigation">
        <Link className="header__navigation-link" to={"/"}>
          {MOVIES_TEXT}
        </Link>
      </ul>
    </header>
  );
};

export default Header;
