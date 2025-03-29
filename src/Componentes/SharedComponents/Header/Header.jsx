import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mx-5 my-5 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo with link to home */}
        <Link to="/" className="">
          <img
            src="https://i.ibb.co.com/B5zSn3LC/Screenshot-410-removebg-preview.png"
            alt="WoodenWhisper Logo"
            className="w-[100px] h-[70px] bg-cover"
          />
        </Link>

        {/* Navigation */}
        <nav className="">
          <ul className="flex space-x-10 nav_Links">
            <li className="group relative">
              <Link to="/about" className="relative">
                About
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link to="/journal" className="relative">
                Journal
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link to="/shop" className="relative">
                Shop
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link to="/videos" className="relative">
                Videos
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group relative">
              <Link to="/projects" className="relative">
                Projects
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
