import React from "react";
import cruddimg from "../assets/img/portfolio/CRUD-APP.jpg";
import ecommerce from "../assets/img/portfolio/ecom.png";
import shayaan from "../assets/img/portfolio/shayaan.PNG";
import pizza from "../assets/img/portfolio/pizza.PNG";
function Service() {
  return (
    <>
      <section
        id="/services"
        style={{ marginLeft: "22%" }}
        class="services section"
      >
        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>
            The projects I developed during my learning journey showcase my
            skills and creativity.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="card" style={{ width: "18rem", height: "21em" }}>
                <img src={shayaan} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Travel Agency Website</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://shayaantravel.co.uk/"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="card" style={{ width: "18rem", height: "21em" }}>
                <img
                  src={cruddimg}
                  style={{ height: "18em" }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Crud App</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://crudapp-react.netlify.app/"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="card" style={{ width: "18rem", height: "21em" }}>
                <img src={ecommerce} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Ecommerce Website</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://mobileapp-react.netlify.app/"
                    class="btn btn-primary"
                    target="_blank"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="card" style={{ width: "18rem", height: "21em" }}>
                <img src={pizza} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Pizza App</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://pizzaapp-react.netlify.app/"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="card" style={{ width: "18rem", height: "21em" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="card" style={{ width: "18rem", height: "21em" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
