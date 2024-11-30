import { Outlet } from "react-router";
import Header from "./Header";
import './Layout.scss';

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header />
            <main className="layout__mainContent">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;