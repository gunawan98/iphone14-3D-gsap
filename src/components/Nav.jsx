import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

const listMenu = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "Tv & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple logo" />
          </li>
          {listMenu.map((item) => (
            <li key={item}>
              <a className="link-styled">{item}</a>
            </li>
          ))}
          <li>
            <img src={Search} alt="Apple logo" />
          </li>
          <li>
            <img src={Store} alt="Apple logo" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
