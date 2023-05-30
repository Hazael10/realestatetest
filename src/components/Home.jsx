function Home() {
  return (
    <div className="header" id="header">
      <h1>Crown Real Estate</h1>
      <p>You are not buying a house, you are buying a lifestyle.</p>
      <div className="icons">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => {
            const projectSection = document.getElementById("project");
            if (projectSection) {
              projectSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Browse
        </button>
      </div>
    </div>
  );
}
export default Home;
