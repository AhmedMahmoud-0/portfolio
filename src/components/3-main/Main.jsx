import { useState } from "react";

// @ts-ignore
import "./main.css";
import { myprojects } from "./myProjects";
import { AnimatePresence, motion } from "motion/react";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [array, setArray] = useState(myprojects);
  const handleClick = (buttonCategory = "") => {
    setCurrentActive(buttonCategory);

    const newArr = myprojects.filter((item) => {
      return item.category === buttonCategory;
    });

    setArray(newArr);
  };
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArray(myprojects);
          }}
          className={currentActive === "all" ? "active" : ""}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : ""}
        >
          Html & Css
        </button>

        <button
          onClick={() => {
            handleClick("java");
          }}
          className={currentActive === "java" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : ""}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("next");
          }}
          className={currentActive === "next" ? "active" : ""}
        >
          Next.Js
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {array.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgpath}
                className="card "
              >
                <img width={266} src={item.imgpath} alt="icon" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                    dolores consequuntur iure nulla, iste accusamus.
                  </p>

                  <div className="icons flex">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href="">
                        <span className="icon link"></span>
                      </a>
                      <a href="">
                        <span className="icon link"></span>
                      </a>
                    </div>

                    <a className="more flex" href="">
                      more{" "}
                      <span style={{ alignSelf: "end" }} className="icon ">
                        
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
