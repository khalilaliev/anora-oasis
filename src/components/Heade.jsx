const Header = () => {
  return (
    <header className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              src="/src/assets/images/logo-oasis.png"
              alt="logo"
              width={183}
              height={40}
            />
          </a>
          <nav>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
