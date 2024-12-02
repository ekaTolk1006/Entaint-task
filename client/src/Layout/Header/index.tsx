import { Link } from "react-router";
import "./Header.scss";

interface I_Layout {}

const Header: React.FC<I_Layout> = ({}) => {
  return (
    <header className="header">
      <ul className="header__navigation">
        <Link className="header__navigation-link" to={"/"}>Movies</Link>
      </ul>
    </header>
  );
};

export default Header;
