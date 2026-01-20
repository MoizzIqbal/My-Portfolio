import React from "react";
import resume from "./moizresume.pdf";
function Portfolio() {
  return (
    <>
      <section
        id="/portfolio"
        style={{ marginLeft: "22%" }}
        class="portfolio section light-background"
      >
        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Download CV</h2>
          <h5 className="text-center">Click on button to downoad Cv</h5>

          <p className="text-center mt-4">
            <a href={resume} download target="_blank">
              <button className="btn btn-outline-primary">Download CV</button>
            </a>
          </p>
        </div>
        {/* <!-- End Section Title --> */}
      </section>
    </>
  );
}

export default Portfolio;
