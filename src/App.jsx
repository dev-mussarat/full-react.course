import React, { useState, useEffect } from "react";
import "./portfolio-styles.css";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const typingText = "Full Stack Developer";

  // Typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) =>
        prev < typingText.length ? prev + 1 : prev
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "REST APIs",
    "JWT Auth",
  ];

  const services = [
    {
      title: "Frontend Development",
      desc: "Responsive, animated UI using React.js, CSS and modern best practices.",
    },
    {
      title: "Backend Development",
      desc: "Node.js & Express APIs, authentication, protected routes.",
    },
    {
      title: "Database Design",
      desc: "MongoDB schemas, queries, relationships and performance tuning.",
    },
    {
      title: "Full Stack Apps",
      desc: "End-to-end MERN stack web applications from UI to deployment.",
    },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with dark/light mode, animations and responsive design.",
      img: "https://via.placeholder.com/400x250",
      tech: ["React", "CSS", "Responsive"],
    },
    {
      title: "MERN Stack App",
      desc: "Authentication, dashboard, CRUD operations and REST APIs.",
      img: "https://via.placeholder.com/400x250",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "UI Component Library",
      desc: "Reusable cards, buttons, modals and layout components.",
      img: "https://via.placeholder.com/400x250",
      tech: ["React", "CSS", "Design System"],
    },
  ];

  // Contact form handlers
  const handleInputChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: "" }));
    setSubmitStatus("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validateForm();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      setSubmitStatus("");
      return;
    }
    // No real backend, just simulate success
    setSubmitStatus("Message sent (demo only, no backend connected).");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={`app ${theme}`}>
      {/* Background animated shapes */}
      <div className="bg-shape bg-shape-1" />
      <div className="bg-shape bg-shape-2" />

      {/* NAVBAR */}
      <nav className={`navbar ${theme}`}>
        <h2 className="logo">Mussarat</h2>

        <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
          <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span>Mussarat</span>
          </h1>

          <p className="typing">
            {typingText.slice(0, typingIndex)}
            <span className="cursor">|</span>
          </p>

          <p className="hero-subtitle">
            2 Years of experience building modern full stack applications using
            React, Node.js, MongoDB & GitHub.
          </p>

          <div className="hero-buttons">
            <a
              href="#"
              className="primary-btn"
              download
            >
              Download CV
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-profile">
          <div className="circle">M</div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section fadeInUp">
        <h2 className="section-title">Experience</h2>
        <div className={`card glow ${theme}`}>
          <h3>Full Stack Developer — 2 Years</h3>
          <p>
            Worked on complete web application lifecycle including planning, UI,
            APIs, databases and deployment. Comfortable with MERN stack and modern
            development tools.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section fadeInUp">
        <h2 className="section-title">Education</h2>
        <div className={`card glow ${theme}`}>
          <h3>Undergraduate — Computer Science</h3>
          <p>
            Currently pursuing a Bachelor's degree in Computer Science with a
            focus on web technologies and software engineering concepts.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section fadeInUp">
        <h2 className="section-title">Skills</h2>
        <div className="grid">
          {skills.map((skill) => (
            <div key={skill} className={`card skill-card glow ${theme}`}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section fadeInUp">
        <h2 className="section-title">Services</h2>
        <div className="grid">
          {services.map((service) => (
            <div
              key={service.title}
              className={`card service-card glow ${theme}`}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section fadeInUp">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`card project-card glow ${theme}`}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className={`modal-overlay ${theme}`} onClick={() => setSelectedProject(null)}>
          <div
            className={`modal-content ${theme}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="project-img"
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.desc}</p>
            <div className="modal-tags">
              {selectedProject.tech.map((t) => (
                <span key={t} className="modal-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="section fadeInUp">
        <h2 className="section-title">Contact</h2>
        <div className={`card glow ${theme}`}>
          <p>
            Email: <strong>mussarat@gmail.com</strong>
          </p>
          <p>
            GitHub: <strong>github.com/mussarat</strong>
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Your message..."
              />
              {errors.message && (
                <span className="error-text">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="primary-btn">
              Send Message
            </button>

            {submitStatus && (
              <p className="submit-status">{submitStatus}</p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Mussarat — All Rights Reserved
      </footer>
    </div>
  );
}
