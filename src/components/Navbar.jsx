import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="max-w-full p-4 top-0 sticky flex justify-between bg-white border border-gray-200 shadow-sm">
      <div>
        <h1 className="text-2xl z-10">TO DO APP</h1>
      </div>

      <ul className="hidden md:flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
