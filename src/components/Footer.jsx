function Footer() {
  return (
    <div className="footer">
      <div className="body">
        <footer className="container-fluid bg-grey py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="logo-part">
                      <h1>CROWN</h1>
                      <p>REAL ESTATE</p>
                      <p>
                        087 Champaca St. Barangay Sta. Maria, San Manuel, Tarlac
                        | +639274640025
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit rem omnis veritatis, similique voluptatem sint
                        quo voluptas rerum possimus corrupti ducimus.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 px-4">
                    <h6> About Company</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, iste. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Impedit molestias voluptatem quae cum
                      pariatur amet explicabo numquam hic repellendus nesciunt.
                      Esse corporis molestias commodi nam eaque alias velit
                      fugiat magni?
                    </p>
                    <a href="#" className="btn-footer">
                      {" "}
                      More Info{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 px-4">
                    <h6> Help us</h6>
                    <div className="row ">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            {" "}
                            <a href="#"> Home</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> About</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Service</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Contact</a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 px-4">
                        <ul>
                          <li>
                            {" "}
                            <a href="#"> Terms</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Policy</a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <h6> Connections</h6>
                    <div className="social">
                      <a href="https://www.instagram.com/hazz.vdy/">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/hzz.vdy/">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://mail.google.com/mail/u/0/#inbox">
                        <i className="bi bi-envelope-at"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/hazael-vidaya-944a98267">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>

                    <p>All rights reserved | Crown Real Estate 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
