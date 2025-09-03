import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="section">
        <h1>About iBLAK Real Estate</h1>
        <p>
          Welcome to iBLAK Real Estate, your trusted partner in navigating the
          dynamic property market of Nigeria. Founded with a vision to simplify
          the process of buying, selling, and renting properties, we are
          committed to providing transparent, reliable, and personalized
          services to all our clients.
        </p>
        <img src="/victoria-island.png" alt="About iBLAK" />
      </div>
      <div className="section missionSection">
        <div className="imageWrapper">
          <img src="/estate-mission.webp" alt="Mission" />
        </div>
        <div className="textWrapper">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower clients with the data, inspiration, and
            knowledge they need to make informed real estate decisions. We
            strive to offer a seamless and stress-free experience, whether you
            are finding your dream home, a strategic investment, or the perfect
            tenant.
          </p>
        </div>
      </div>

      <div className="section whyChoose">
        <div className="text">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Expert Knowledge:</strong> Our team possesses deep-rooted
              knowledge of the local real estate landscape, ensuring you get the
              best advice and opportunities.
            </li>
            <li>
              <strong>Client-Centric Approach:</strong> You are at the heart of
              everything we do. We listen to your needs and tailor our services
              to match your unique goals.
            </li>
            <li>
              <strong>Integrity and Transparency:</strong> We believe in honest
              communication and ethical practices.
            </li>
          </ul>
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Why Choose Us"
          />
        </div>
      </div>
    </div>
  );
}
