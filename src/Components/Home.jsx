import React from "react";
import hero from "../../public/assets/img/hero-bg.jpg";
import { Typewriter } from "react-simple-typewriter";
function Home() {
  return (
    <>
      <section id="/" class="hero section ">
        <img src={hero} alt="" data-aos="fade-in" class="" />

        <div
          class="container"
          style={{ marginLeft: "26%" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2>Moiz Iqbal</h2>
          <p style={{ margin: "auto 0", fontWeight: "normal" }}>
            I'm{" "}
            <span style={{ color: "white" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Web Developer", "Web Designer", "Coder"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span
              class="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            ></span>
            <span
              class="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            ></span>
          </p>
        </div>
      </section>
      {/* <!-- /Hero Section --> */}
    </>
  );
}

export default Home;
