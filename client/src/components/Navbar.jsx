import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold sm:text-2xl">Resource Manager</Link>
      <Link
        to="/add"
        className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
      >
        + Add Resource
      </Link>
    </nav>
  );
}
