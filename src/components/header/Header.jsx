import { Link } from "react-router-dom";
import "./Header.css";


const navigationItems = [
  { label: "Discover", path: "/discover" },
  { label: "My Foods", path: "/my-foods" },
  { label: "History", path: "/history" },
  { label: "Profile", path: "/profile" },
]

function Header() {

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Food To Eat
        </Link>

        <nav className="header__nav">
          {navigationItems.map((item) => (
            <Link key={item.path} to={item.path} className="header__link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;