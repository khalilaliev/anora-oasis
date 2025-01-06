import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/images/logo-oasis.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={logo} alt="logo" width={183} height={40} />
          </a>
          <nav className="hidden md:flex gap-1">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  className="text-lg hover:text-secondary-title-color duration-200"
                  href="#"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  className="text-lg hover:text-secondary-title-color duration-200"
                  href="#"
                >
                  Wir bieten
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-2xl p-2" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>
        {isOpen && (
          <nav className="absolute top-17 right-0 w-40 bg-bg-color shadow-md rounded-md p-4">
            <ul className="flex flex-col items-center gap-6">
              <li>
                <a
                  className="text-lg hover:text-secondary-title-color duration-200"
                  href="#"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  className="text-lg hover:text-secondary-title-color duration-200"
                  href="#"
                >
                  Wir bieten
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
