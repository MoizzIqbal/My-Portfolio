import React from "react";
import myprofile from "../assets/img/pic.png";
import { MdKeyboardArrowRight } from "react-icons/md";
function About() {
  return (
    <>
      {/* <!-- About Section --> */}
      <section id="/about" style={{ marginLeft: "22%" }} class="about section">
        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            Hi, I am Moiz Iqbal. I bring a passion for creating innovative and
            visually appealing websites that deliver outstanding user
            experiences. My expertise lies in front-end development, where I
            excel in HTML, CSS, and JavaScript, ensuring seamless integration of
            design and functionality. Additionally, I am proficient in utilizing
            modern frameworks and libraries such as React.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4">
              <img src={myprofile} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 content">
              <h2>Front-End Web Developer.</h2>
              <p class="fst-italic py-3">
                Passionate React.js developer with hands-on experience in
                building dynamic, responsive, and high-performance web
                applications.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <MdKeyboardArrowRight /> <strong>Birthday:</strong>{" "}
                      <span>13 June 2001</span>
                    </li>
                    <li>
                      <MdKeyboardArrowRight /> <strong>Phone:</strong>{" "}
                      <span>0309-9990802</span>
                    </li>
                    <li>
                      <MdKeyboardArrowRight /> <strong>City:</strong>{" "}
                      <span>LAHORE, PAKISTAN</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <MdKeyboardArrowRight /> <strong>Age:</strong>{" "}
                      <span>23</span>
                    </li>
                    <li>
                      <MdKeyboardArrowRight /> <strong>Degree:</strong>{" "}
                      <span>Bachelors in Computer Science</span>
                    </li>
                    <li>
                      <MdKeyboardArrowRight /> <strong>Email:</strong>{" "}
                      <span>moiziqbal302@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /About Section -->  */}

      {/* <!-- /Stats Section --> */}

      {/* <!-- Skills Section --> */}
      <section
        id="skills"
        style={{ marginLeft: "22%" }}
        class="skills section light-background"
      >
        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>
          I have expertise in Web development.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row skills-content skills-animation">
            <div class="col-lg-6">
              <div class="progress">
                <span class="skill">
                  <span>HTML</span> <i class="val">100%</i>
                </span>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  100%
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div class="progress">
                <span class="skill">
                  <span>CSS</span> <i class="val">100%</i>
                </span>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  100%
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div class="progress">
                <span class="skill">
                  <span>JAVASCRIPT</span> <i class="val">90%</i>
                </span>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
              {/* <!-- End Skills Item --> */}
            </div>

            <div class="col-lg-6">
              <div class="progress">
                <span class="skill">
                  <span>REACT JS</span> <i class="val">90%</i>
                </span>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div class="progress">
                <span class="skill">
                  <span>BOOTSTRAP</span> <i class="val">100%</i>
                </span>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  100%
                </div>
              </div>
              {/* <!-- End Skills Item --> */}

              <div class="progress">
                <span class="skill">
                  <span>MATERIAL UI</span> <i class="val">100%</i>
                </span>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  100%
                </div>
              </div>
              {/* <!-- End Skills Item --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Skills Section --> */}
    </>
  );
}

export default About;
