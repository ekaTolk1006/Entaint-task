
import './Header.scss';

interface I_Layout { }

const Header: React.FC<I_Layout> = ({ }) => {
    return (
        <header className="header">
            <ul className="header__navigation">
                <li><a>Movies</a></li>
                <li><a>TvShows</a></li>
                <li><a>People</a></li>
            </ul>
        </header>
    )
}

export default Header;