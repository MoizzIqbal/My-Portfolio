import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (!formData.name) {
      // alert("Enter Name");
      toast.warn("Enter Name");
      return;
    } else if (!formData.email) {
      // alert("enter email");
      toast.warn("Enter Email");
      return;
    } else if (!formData.subject) {
      // alert("Please enter subject");
      toast.warn("Please enter subject");
      return;
    } else if (!formData.message) {
      // alert("Please enter message");
      toast.warn("Please enter message");
    } else {
      // alert("Your Message Send Successfully");
      toast.success("Your Message Send Successfully");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        id="/contact"
        style={{ marginLeft: "22%" }}
        className="contact section"
      >
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Leave us a message</p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i class="fa-solid fa-location-dot"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Pakistan, Lahore</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i class="fa-solid fa-phone"></i>
                  <div>
                    <h3>Call Me</h3>
                    <p>
                      <a href="tel:03124240210">0312-4240210</a>
                    </p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i class="fa-solid fa-envelope"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:moiziqbal302@gmail.com">
                        moiziqbal302@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274330387!2d74.00471844300726!3d31.483103656420948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739204507219!5m2!1sen!2s"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form
                onSubmit={handleFormSubmit}
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label for="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      id="name-field"
                      className="form-control"
                      required=""
                    />
                  </div>

                  <div className="col-md-6">
                    <label for="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      id="email-field"
                      onChange={handleChange}
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.subject}
                      name="subject"
                      onChange={handleChange}
                      id="subject-field"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      value={formData.message}
                      name="message"
                      onChange={handleChange}
                      rows="10"
                      id="message-field"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- End Contact Form --> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
