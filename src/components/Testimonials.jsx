function Testimonials() {
  return (
    <div className="test" id="test">
      <div className="row">
        <div className="col-12">
          <hr className="line" />
          <h1>Testimonials</h1>
          <div className="carousel-container">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="d-block w-100"
                    alt="..."
                  />
                  <span>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus vel nobis nisi expedita velit, cupiditate laborum
                    sed similique aperiam ab ipsum deserunt consequuntur ullam
                    perferendis natus molestias iste fuga cumque."
                  </span>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="d-block w-100"
                    alt="..."
                  />
                  <span>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus vel nobis nisi expedita velit, cupiditate laborum
                    sed similique aperiam ab ipsum deserunt consequuntur ullam
                    perferendis natus molestias iste fuga cumque."
                  </span>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="d-block w-100"
                    alt="..."
                  />
                  <span>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus vel nobis nisi expedita velit, cupiditate laborum
                    sed similique aperiam ab ipsum deserunt consequuntur ullam
                    perferendis natus molestias iste fuga cumque."
                  </span>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
