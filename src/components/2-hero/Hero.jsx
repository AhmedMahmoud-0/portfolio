// @ts-ignore
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img className="avatar" src="/me.jpg-modified.png" alt="" />
          <span className="icon verified"></span>
        </div>

        <h1 className="title">
          Front-End Developer, Ui Enthusiast, and Cod Artisan.
        </h1>
        <p className="sub-title">
          I'm Ahmed Mahmoud, a Front-End Developer passionate about building
          clean, accessible, and pixel-perfect user interfaces. I love turning
          complex problems into simple, beautiful, and intuitive digital
          experiences.
        </p>

        <div className="all-icons flex">
          <a href="">
            <span className="icon"></span>
          </a>
          <a href="">
            <span className="icon"></span>
          </a>
          <a href="">
            {" "}
            <span className="icon"></span>
          </a>
          <a href="">
            <span className="icon"></span>
          </a>
        </div>
      </div>

      <div className="right-section animation border">Animation</div>
    </section>
  );
};

export default Hero;
