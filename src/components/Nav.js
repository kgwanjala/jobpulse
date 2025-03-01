import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="main-nav">
        <Link to="/">Homepage</Link>
        <Link to="/Articles">Articles</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </>
  );
}
