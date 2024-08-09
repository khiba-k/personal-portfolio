import NavBar from "./components/NavBar";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <main>
        {/* Intro Section */}
        <section style={{border: "1px solid white"}}>
          <div className="intro-col">
            {/* Navbar Row */}
            <div className="nav-row">
              <NavBar />
            </div>
            {/* Contents Row */}
            <div className="intro-row">
              <Intro/>
          </div>
          </div>
        </section>
        {/* <section>
          <div>
            <p style={{cololr:"white"}}>Projects</p>
          </div>
        </section> */}
      </main>
    </>
  );
}
