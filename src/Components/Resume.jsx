import React from "react";
import resume from "../assets/MoizCv.pdf";
function Resume() {
  return (
    <>
      {/* <!-- Resume Section --> */}
      <section
        id="/resume"
       
        class="resume section"
      >
        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
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

        <div class="container">
          <div class="row">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Sumary</h3>

              <div class="resume-item pb-0">
                <h4>Moiz Iqbal</h4>
                <p>
                  <em>
                    {" "}
                    Passionate React.js developer with hands-on experience in
                    building dynamic, responsive, and high-performance web
                    applications.
                  </em>
                </p>
                <ul>
                  <li>Lahore , PAK</li>
                  <li>
                    <a href="tel:+923124240210">0312-4240210</a>
                  </li>
                  <li>
                    <a href="mailto:moiziqbal302@gmail.com">
                      moiziqbal302@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Edn Resume Item --> */}

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bachelor In Computer Science</h4>
                <h5>2020 - 2024</h5>
                <p>
                  <em>Virtual University of Pakistan , LHE</em>
                </p>
                <p>
                  I completed my 4-year Bachelor’s in Computer Science from
                  Virtual University. During this time, I learned programming,
                  web development, databases, and software engineering concepts.
                  I also worked on various projects to apply my skills
                  practically.
                </p>
              </div>
              {/* <!-- Edn Resume Item --> */}

              <div class="resume-item">
                <h4>Intermediate In ICS (STATS)</h4>
                <h5>2018 - 2019</h5>
                <p>
                  <em>Concordia College , LHE</em>
                </p>
                <p>
                  I completed my 2-year Intermediate (ICS) with Stats from
                  college. During this time, I learned the basics of computer
                  science, programming, mathematics, and statistical analysis,
                  which built a strong foundation for my bachelor's degree.
                </p>
              </div>
              {/* <!-- Edn Resume Item --> */}
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>React Js Developer</h4>
                <h5>2025 - Present</h5>
                <p>
                  <em>Harmayan Group, LHR, PAK </em>
                </p>
                <ul>
                  <li>
                    Developed multiple advanced travel agency websites using
                    React, with a strong focus on performance, scalability, and
                    user experience.
                  </li>
                  <li>
                    Implemented complex state management using Redux to handle
                    global state and ensure smooth data flow across the
                    application.{" "}
                  </li>
                  <li>
                    Utilized React Router for efficient and dynamic routing,
                    enabling seamless navigation between different pages and
                    features.
                  </li>
                  <li>
                    Integrated robust APIs to fetch and display real-time travel
                    packages, booking details, and destination data for an
                    interactive and up-to-date experience.
                  </li>
                </ul>
              </div>
              {/* <!-- Edn Resume Item --> */}

              <div class="resume-item">
                <h4>React Js Developer</h4>
                <h5>2014</h5>
                <p>
                  <em>
                    House Of Professionals (HOP) -- React JS Developer (3
                    Months){" "}
                  </em>
                </p>
                <ul>
                  <li>
                    Optimized React Components and Implemented responsive
                    designs to enhance user experience.
                  </li>
                  <li>Fetch Data From API and show it to the Website.</li>
                  <li>
                    Handling Forms With Controlled And UnControlled Components.
                  </li>
                </ul>
              </div>

              {/* <!-- Edn Resume Item --> */}
            </div>
            <p className="text-center mt-4">
              <a href={resume} download target="_blank">
                <button className="btn btn-outline-primary" target="_blank">
                  Download CV
                </button>
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- /Resume Section --> */}
    </>
  );
}

export default Resume;
