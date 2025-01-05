const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="#">
          <img
            src="/src/assets/images/logo-oasis.png"
            alt="logo"
            width={183}
            height={40}
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Über uns</a>
            </li>
            <li>
              <a href="#">Wir bieten</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
