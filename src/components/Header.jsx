import Logo from "./Logo";
import HeaderCart from "./HeaderCart";
import Search from "./Search";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <Search />
        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;
