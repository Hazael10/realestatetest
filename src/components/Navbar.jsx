function Navbar() {
  return (
    <div className="nav" id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="header" className="navbar-brand">
            <img
              src="https://cdn-icons-png.flaticon.com/512/112/112663.png?w=740&t=st=1684820726~exp=1684821326~hmac=1d8b4b44c187155fd54d0b29a0908eb027897be17cbfbf26a0b9d84361a1044f"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href="#header" className="nav-link active" aria-current="page">
                HOME
              </a>
              <a href="#about" className="nav-link">
                ABOUT US
              </a>
              <a href="#project" className="nav-link">
                PROJECTS
              </a>
              <a href="#test" className="nav-link">
                TESTIMONIALS
              </a>
              <a href="#contact" className="nav-link">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
