import "./contactPage.scss";

export default function ContactPage() {
  return (
    <div className="contactPage">
      <div className="contactHeader">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Whether you have a question about a
          property, our services, or anything else, our team is ready to answer
          all your questions.
        </p>
      </div>

      <div className="contactContent">
        {/* Left side - Contact Form */}
        <div className="contactForm">
          <h2>Send us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right side - Contact Info */}
        <div className="contactInfo">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Reach out through any of the
            following ways:
          </p>
          <ul>
            <li>
              📍 <strong>Office:</strong> Victoria Island, Lagos, Nigeria
            </li>
            <li>
              📞 <strong>Phone:</strong> +234 800 123 4567
            </li>
            <li>
              ✉️ <strong>Email:</strong> info@iblakestate.com
            </li>
          </ul>
          <div className="mapWrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3456708981633!2d3.421679115299154!3d6.428055726186837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4bf3caaaaab%3A0x9f60b0f6c2e4f76e!2sVictoria%20Island!5e0!3m2!1sen!2sng!4v1693922094598!5m2!1sen!2sng"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Victoria Island Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
