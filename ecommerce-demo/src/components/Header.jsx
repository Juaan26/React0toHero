import "./Header.css";
import { Search } from "./Search";
export const Header = () => {


    return (
        <header className="header">
            <h1 className="header-title">My Ecommerce</h1>
            <Search />
            <button className="header-cart" >Cart</button>
        </header>
    )


}