import { FC } from "react";
import Footer from "../sharedComponents/Footer";
import Header from "../sharedComponents/Header";
import { Link, Outlet } from "react-router-dom";


const Layout: FC = () => {

    return (
        <>
            <Header />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/select">Select</Link>
                    </li>
                    <li>
                        <Link to="/table">Table</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout