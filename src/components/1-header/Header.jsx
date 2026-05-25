// @ts-ignore
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [showmodal, setShowmodal] = useState(false);
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setShowmodal(true);
        }}
        className="menu"
      >
        <span className="icon my-size "></span>
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode ">
        <span className="icon my-size"></span>
      </button>

      {showmodal && (
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button
                onClick={() => {
                  setShowmodal(false);
                }}
              >
                <span className="icon close"></span>
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
