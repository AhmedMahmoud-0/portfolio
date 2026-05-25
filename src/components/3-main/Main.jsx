// @ts-ignore
import "./main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">All Projects</button>
        <button>Html & Css</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Next.Js</button>
      </section>

      <section className="right-section">
        <article className="card ">
          <img width={266} src="/1.jpg" alt="icon" />

          <div style={{ width: "266px" }} className="box">
            <h1 className="title">Landing Page 1</h1>
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
                more <span style={{alignSelf:"end"}} className="icon "></span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
