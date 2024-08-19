import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <main>
          <div className="intro-col">
            {/* Navbar Row */}
            <div className="nav-row">
              <NavBar />
            </div>
            {/* Contents Row */}
            <div className="intro-row">
              <Main/>
          </div>
          </div>
      </main>
    </>
  );
}
