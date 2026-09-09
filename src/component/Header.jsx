import { Link } from "react-router";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="font-semibold text-lg">Portofolioku</h1>

      <div className="flex gap-6">
        <Link to="/" className="text-neutral-700 hover:text-black">Home</Link>
        <Link to="/about" className="text-neutral-700 hover:text-black">About</Link>
        <Link to="/contact" className="text-neutral-700 hover:text-black">Contact</Link>
      </div>
    </header>
  )
}

export default Header;