import { Link } from "react-router";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="header__navigation">
        <Link className="header__navigation-link" to={"/"}>
          Movies
        </Link>
      </ul>
    </header>
  );
};

export default Header;
