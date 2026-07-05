import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img
            src="https://i.ibb.co/zS38BWV/9434621.png"
            height={145}
            width={160}
            alt=""
            className="home__img"
          />
          <h1 className="home__name">Pruthviraj Patil</h1>
          <span className="home__education">Computer Science Student | AI/ML & Full-Stack Developer</span>

          <HeaderSocials />

          <a href="#contact" className="btn">
            Let's Connect
          </a>
          <ScrollDown />
        </div>

        <Shapes />
      </section>
    </>
  );
};

export default Home;
