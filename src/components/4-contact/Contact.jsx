// import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
// @ts-ignore
import "./contact.css";
import doneAnimation from "./done.json";
import ContactAnimation from "./contact.json";
import LottieModule from "lottie-react";

// @ts-ignore
const Lottie = LottieModule["default"] || LottieModule;
const Contact = () => {
  const [state, handleSubmit] = useForm("mykvozov");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon email"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{
                fontSize: "18px",
                marginTop: "1.7rem",
                color: "var(--subtitle)",
              }}
            >
              <Lottie
                loop={false}
                animationData={doneAnimation}
                style={{ height: 37 }}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            animationData={ContactAnimation}
            style={{ height: 355 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
