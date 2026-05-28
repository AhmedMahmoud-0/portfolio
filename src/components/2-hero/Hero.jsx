// @ts-ignore
import "./hero.css";
import devAnimation from "./dev.json";
import LottieModule from "lottie-react";
import { useRef } from "react";
import { motion } from "motion/react";

// @ts-ignore
const Lottie = LottieModule["default"] || LottieModule;
const Hero = () => {
  // @ts-ignore
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar"
            src="/images/me.jpg-modified.png"
            alt=""
          />
          <span className="icon verified"></span>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front-End Developer, Ui Enthusiast, and Cod Artisan.
        </motion.h1>
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

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
