import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-brand">
            <span>Mkrv</span>
          </div>

          <p>
            Junior Full Stack Developer passionate about building modern web
            applications with Java, Spring Boot, React, JavaScript, and backend
            technologies.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Mino1826"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/minoo-khosravi-353523241"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:mino.khosravi2025@gmail.com">
            Email
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Minoo Khosravi. All rights reserved.</p>
        <p>Built with React & ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;