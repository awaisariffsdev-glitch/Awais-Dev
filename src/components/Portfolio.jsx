// import React, { useEffect, useState } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaArrowRight,
//   FaBars,
//   FaTimes,
//   FaCode,
//   FaGraduationCap,
//   FaCar,
//   FaTasks,
//   FaRobot,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
// } from "react-icons/fa";
// import { SiMongodb, SiExpress } from "react-icons/si";
// import emailjs from "@emailjs/browser";
// import {Link} from 'react-router'

// const Portfolio = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   /* ================= SCROLL ACTIVE SECTION ================= */
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section[id]");
//       const scrollPosition = window.scrollY + 150;

//       sections.forEach((section) => {
//         const top = section.offsetTop;
//         const height = section.offsetHeight;
//         const id = section.getAttribute("id");

//         if (scrollPosition >= top && scrollPosition < top + height) {
//           setActiveSection(id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   /* ================= SMOOTH SCROLL ================= */
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }

//     setMenuOpen(false);
//   };

//   /* ================= SKILLS ================= */
//   const skills = [
//     {
//       name: "HTML5",
//       icon: <FaHtml5 />,
//       level: "90%",
//     },
//     {
//       name: "CSS3",
//       icon: <FaCss3Alt />,
//       level: "85%",
//     },
//     {
//       name: "JavaScript",
//       icon: <FaJs />,
//       level: "80%",
//     },
//     {
//       name: "React",
//       icon: <FaReact />,
//       level: "80%",
//     },
//     {
//       name: "Node.js",
//       icon: <FaNodeJs />,
//       level: "75%",
//     },
//     {
//       name: "Express.js",
//       icon: <SiExpress />,
//       level: "75%",
//     },
//     {
//       name: "MongoDB",
//       icon: <SiMongodb />,
//       level: "75%",
//     },
//     {
//       name: "Artificial Intelligence",
//       icon: <FaRobot />,
//       level: "65%",
//     },
//   ];

//   return (
//     <>
//       <div className="portfolio">
//         {/* ================= NAVBAR ================= */}
//         <nav className="navbar-custom">
//           <div className="container nav-container">
//             <div className="logo" onClick={() => scrollToSection("home")}>
//               A<span>wais</span>
//             </div>

//             <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//               <button
//                 className={activeSection === "home" ? "active" : ""}
//                 onClick={() => scrollToSection("home")}
//               >
//                 Home
//               </button>
//               <button
//                 className={activeSection === "about" ? "active" : ""}
//                 onClick={() => scrollToSection("about")}
//               >
//                 About
//               </button>
//               <button
//                 className={activeSection === "skills" ? "active" : ""}
//                 onClick={() => scrollToSection("skills")}
//               >
//                 Skills
//               </button>
//               <button
//                 className={activeSection === "projects" ? "active" : ""}
//                 onClick={() => scrollToSection("projects")}
//               >
//                 Projects
//               </button>
//               <button
//                 className={activeSection === "contact" ? "active" : ""}
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Contact
//               </button>
//             </div>

//             <button
//               className="menu-button"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </nav>

//         {/* ================= HOME ================= */}
//         <section id="home" className="hero-section">
//           <div className="container">
//             <div className="hero-content">
//               {/* LEFT SIDE */}
//               <div className="hero-text">
//                 <div className="small-intro">
//                   <span></span>
//                   Welcome to my portfolio
//                 </div>

//                 <h1>
//                   Hi, I'm <span>Awais</span>
//                 </h1>

//                 <h2>
//                   MERN Stack
//                   <strong> Web Developer</strong>
//                 </h2>

//                 <p>
//                   I am a passionate MERN Stack Web Developer and an APD CS
//                   student. I enjoy creating modern, responsive, and user-friendly
//                   web applications.
//                 </p>

//                 <div className="hero-buttons">
//                   <button
//                     className="primary-btn"
//                     onClick={() => scrollToSection("projects")}
//                   >
//                     View My Work
//                     <FaArrowRight />
//                   </button>

//                   <button
//                     className="secondary-btn"
//                     onClick={() => scrollToSection("contact")}
//                   >
//                     Contact Me
//                   </button>
//                 </div>

//                 <div className="social-links">
//                   <a
//                     href="https://github.com/awaisariffsdev-glitch"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaGithub />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/in/awais-arif-webdev/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaLinkedin />
//                   </a>

//                   <a href="mailto:awais.arif.fs.dev@gmail.com">
//                     <FaEnvelope />
//                   </a>
//                 </div>
//               </div>

//               {/* MERN CARD */}
//               <div className="hero-card-wrapper">
//                 <div className="mern-card">
//                   <div className="mern-card-top">
//                     <div className="mern-main-icon">
//                       <FaCode />
//                     </div>

//                     <div>
//                       <span>FULL STACK</span>
//                       <h3>MERN Stack</h3>
//                     </div>
//                   </div>

//                   <p className="mern-description">
//                     Building modern full-stack web applications with the MERN
//                     technology stack.
//                   </p>

//                   <div className="mern-technologies">
//                     <div className="mern-tech">
//                       <div className="mern-icon mongodb-icon">
//                         <SiMongodb />
//                       </div>
//                       <div>
//                         <strong>MongoDB</strong>
//                         <span>Database</span>
//                       </div>
//                     </div>

//                     <div className="mern-tech">
//                       <div className="mern-icon express-icon">
//                         <SiExpress />
//                       </div>
//                       <div>
//                         <strong>Express.js</strong>
//                         <span>Backend</span>
//                       </div>
//                     </div>

//                     <div className="mern-tech">
//                       <div className="mern-icon react-icon">
//                         <FaReact />
//                       </div>
//                       <div>
//                         <strong>React</strong>
//                         <span>Frontend</span>
//                       </div>
//                     </div>

//                     <div className="mern-tech">
//                       <div className="mern-icon node-icon">
//                         <FaNodeJs />
//                       </div>
//                       <div>
//                         <strong>Node.js</strong>
//                         <span>Runtime</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mern-footer">
//                     <span></span>
//                     <p>MERN Stack Developer</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= ABOUT ================= */}
//         <section id="about" className="about-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>ABOUT ME</span>
//               <h2>Who I Am</h2>
//               <p>
//                 A developer focused on building scalable, modern web applications.
//               </p>
//             </div>

//             <div className="about-grid">
//               <div className="about-info">
//                 <div className="about-icon">
//                   <FaGraduationCap />
//                 </div>
//                 <h3>MERN Stack Developer</h3>
//                 <p>
//                   I am Awais, a MERN Stack Web Developer currently studying APD
//                   CS in Lahore.
//                 </p>
//                 <p>
//                   I have built both frontend and backend architectures and enjoy
//                   developing complete web systems using modern frameworks and libraries.
//                 </p>
//                 <p>
//                   My focus is on writing clean, maintainable code and building
//                   performant, responsive, and secure user experiences.
//                 </p>
//               </div>

//               <div className="education-card">
//                 <h3>Education</h3>
//                 <div className="education-item">
//                   <div className="education-icon">
//                     <FaGraduationCap />
//                   </div>
//                   <div>
//                     <h4>APD CS</h4>
//                     <p>Associate Degree Program</p>
//                     <span>Undergraduate Studies</span>
//                   </div>
//                 </div>

//                 <div className="cgpa-box">
//                   <div>
//                     <span>First 2 Semesters</span>
//                     <strong>3.3 CGPA</strong>
//                   </div>
//                   <div className="cgpa-circle">3.3</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= SKILLS ================= */}
//         <section id="skills" className="skills-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>MY SKILLS</span>
//               <h2>Technologies I Use</h2>
//               <p>
//                 Technologies and tools I work with for modern full-stack
//                 development.
//               </p>
//             </div>

//             <div className="skills-grid">
//               {skills.map((skill, index) => (
//                 <div className="skill-card" key={index}>
//                   <div className="skill-top">
//                     <div className="skill-icon">{skill.icon}</div>
//                     <h3>{skill.name}</h3>
//                   </div>

//                   <div className="progress-container">
//                     <div className="progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: skill.level,
//                         }}
//                       ></div>
//                     </div>
//                     <span>{skill.level}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="stack-box">
//               <div className="stack-box-icon">
//                 <FaCode />
//               </div>
//               <div>
//                 <h3>MERN Stack Development</h3>
//                 <p>MongoDB • Express.js • React • Node.js</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= PROJECTS ================= */}
//         <section id="projects" className="projects-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>MY PROJECTS</span>
//               <h2>Projects I've Built</h2>
//               <p>Some of my web development projects.</p>
//             </div>

//             <div className="projects-grid">
//               {/* TASKER */}
//               <div className="project-card">
//                 <div className="project-image tasker-image">
//                   <div className="project-icon">
//                     <FaTasks />
//                   </div>
//                   <span>MERN STACK</span>
//                 </div>

//                 <div className="project-content">
//                   <h3>Tasker App</h3>
//                   <p>
//                     A task management web application designed to help users
//                     organize, manage and track their daily tasks efficiently.
//                   </p>

//                   <div className="project-tech">
//                     <span>React</span>
//                     <span>Node.js</span>
//                     <span>Express</span>
//                     <span>MongoDB</span>
//                   </div>

//                   <button
//                     className="project-btn"
//                     onClick={() => scrollToSection("contact")}
//                   >
//                     Discuss Project
//                     <FaArrowRight />
//                   </button>
//                 </div>
//               </div>

//               {/* CYBER MOTORS */}
//               <div className="project-card">
//                 <div className="project-image cyber-image">
//                   <div className="project-icon">
//                     <FaCar />
//                   </div>
//                   <span>CAR MARKETPLACE</span>
//                 </div>

//                 <div className="project-content">
//                   <h3>Cyber Motors</h3>
//                   <p>
//                     A car selling and purchasing platform where users can
//                     explore cars and manage car listings through a modern web
//                     interface.
//                   </p>

//                   <div className="project-tech">
//                     <span>React</span>
//                     <span>Node.js</span>
//                     <span>Express</span>
//                     <span>MongoDB</span>
//                   </div>

//                   <button
//                     className="project-btn"
//                     onClick={() => scrollToSection("contact")}
//                   >
//                     Discuss Project
//                     <FaArrowRight />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= CONTACT ================= */}
//         <section id="contact" className="contact-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>CONTACT ME</span>
//               <h2>Let's Work Together</h2>
//               <p>Have a project or idea? Feel free to get in touch.</p>
//             </div>

//             <div className="contact-grid">
//               {/* CONTACT INFORMATION */}
//               <div className="contact-info">
//                 <h3>Get In Touch</h3>
//                 <p>
//                   I am always interested in learning, building new projects, and
//                   collaborating on interesting web development ideas.
//                 </p>

//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <FaEnvelope />
//                   </div>
//                   <div>
//                     <span>Email</span>
//                     <a href="mailto:awais.arif.fs.dev@gmail.com">
//                       awais.arif.fs.dev@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <FaPhone />
//                   </div>
//                   <div>
//                     <span>Phone</span>
//                     <p>+92 320 7870705</p>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <FaMapMarkerAlt />
//                   </div>
//                   <div>
//                     <span>Location</span>
//                     <p>Lahore, Pakistan</p>
//                   </div>
//                 </div>

//                 <div className="contact-socials">
//                   <a
//                     href="https://github.com/awaisariffsdev-glitch"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaGithub />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/in/awais-arif-webdev/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaLinkedin />
//                   </a>

//                   <a href="mailto:awais.arif.fs.dev@gmail.com">
//                     <FaEnvelope />
//                   </a>
//                 </div>
//               </div>

//               {/* CONTACT FORM */}
//               <div className="contact-form">
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();

//                     emailjs
//                       .sendForm(
//                         "service_ej6dl7s",
//                         "template_j1han28",
//                         e.currentTarget,
//                         "tKoUFC7TYH7vtKDCM"
//                       )
//                       .then(
//                         () => {
//                           alert(
//                             "Thank you! Your message has been sent successfully."
//                           );
//                           e.target.reset();
//                         },
//                         (error) => {
//                           console.error("EmailJS Error:", error);
//                           alert(
//                             "Sorry, your message could not be sent. Please try again."
//                           );
//                         }
//                       );
//                   }}
//                 >
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>Your Name</label>
//                       <input
//                         type="text"
//                         name="from_name"
//                         placeholder="Enter your name"
//                         required
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Email Address</label>
//                       <input
//                         type="email"
//                         name="from_email"
//                         placeholder="Enter your email"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label>Subject</label>
//                     <input
//                       type="text"
//                       name="subject"
//                       placeholder="Enter subject"
//                       required
//                     />
//                   </div>

//                   <div className="form-group message-group">
//                     <label>Message</label>
//                     <textarea
//                       name="message"
//                       placeholder="Write your message..."
//                       required
//                     ></textarea>
//                   </div>

//                   <button type="submit" className="send-btn">
//                     Send Message
//                     <FaArrowRight />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= FOOTER ================= */}
//         <footer className="footer">
//           <div className="container footer-content">
//             <div className="footer-logo">
//               A<span>wais</span>
//             </div>

//             <p className="text-light">MERN Stack Web Developer</p>

//             <div className="footer-links">
//               <button onClick={() => scrollToSection("home")}>Home</button>
//               <button onClick={() => scrollToSection("about")}>About</button>
//               <button onClick={() => scrollToSection("skills")}>Skills</button>
//               <button onClick={() => scrollToSection("projects")}>Projects</button>
//               <button onClick={() => scrollToSection("contact")}>Contact</button>
//             </div>

//             <div className="footer-bottom">
//               © 2026 <Link to="https://www.instagram.com/cyb3r.awais/" className="text-decoration-none " style={{color:"#4f6368"}}>Awais</Link>. All Rights Reserved.
//             </div>
//           </div>
//         </footer>
//       </div>

//       {/* ================= CSS ================= */}
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           font-family: "Inter", "Segoe UI", Arial, sans-serif;
//           background: #071014;
//           color: #ffffff;
//         }

//         button {
//           font-family: inherit;
//         }

//         .portfolio {
//           width: 100%;
//           overflow: hidden;
//           background: #071014;
//         }

//         .container {
//           width: 90%;
//           max-width: 1180px;
//           margin: auto;
//         }

//         /* ================= NAVBAR ================= */
//         .navbar-custom {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           z-index: 999;
//           background: rgba(7, 16, 20, 0.93);
//           backdrop-filter: blur(14px);
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }

//         .nav-container {
//           height: 78px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .logo {
//           font-size: 30px;
//           font-weight: 800;
//           color: #ffffff;
//           cursor: pointer;
//           letter-spacing: -1px;
//         }

//         .logo span {
//           color: #20c997;
//         }

//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .nav-links button {
//           border: none;
//           background: transparent;
//           color: #aab8bd;
//           padding: 10px 16px;
//           border-radius: 8px;
//           font-size: 15px;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .nav-links button:hover,
//         .nav-links button.active {
//           color: #20c997;
//           background: rgba(32,201,151,0.08);
//         }

//         .menu-button {
//           display: none;
//           border: none;
//           background: transparent;
//           color: white;
//           font-size: 25px;
//           cursor: pointer;
//         }

//         /* ================= HERO ================= */
//         .hero-section {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           padding: 120px 0 80px;
//           position: relative;
//           background:
//             radial-gradient(
//               circle at 80% 30%,
//               rgba(32,201,151,0.12),
//               transparent 30%
//             ),
//             #071014;
//         }

//         .hero-content {
//           display: grid;
//           grid-template-columns: 1.1fr 0.9fr;
//           gap: 70px;
//           align-items: center;
//         }

//         .small-intro {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           color: #20c997;
//           font-size: 14px;
//           font-weight: 600;
//           margin-bottom: 20px;
//         }

//         .small-intro span {
//           width: 35px;
//           height: 2px;
//           background: #20c997;
//         }

//         .hero-text h1 {
//           font-size: clamp(48px, 6vw, 76px);
//           line-height: 1.05;
//           font-weight: 800;
//           letter-spacing: -3px;
//         }

//         .hero-text h1 span {
//           color: #20c997;
//         }

//         .hero-text h2 {
//           margin-top: 15px;
//           font-size: clamp(25px, 3vw, 38px);
//           color: #dce6e8;
//           font-weight: 500;
//         }

//         .hero-text h2 strong {
//           color: #20c997;
//           font-weight: 700;
//         }

//         .hero-text p {
//           max-width: 650px;
//           margin-top: 25px;
//           color: #91a3a9;
//           line-height: 1.8;
//           font-size: 16px;
//         }

//         .hero-buttons {
//           display: flex;
//           gap: 15px;
//           margin-top: 32px;
//         }

//         .primary-btn,
//         .secondary-btn {
//           height: 52px;
//           min-width: 155px;
//           padding: 0 24px;
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           cursor: pointer;
//           font-weight: 700;
//           transition: 0.3s ease;
//         }

//         .primary-btn {
//           border: 1px solid #20c997;
//           background: #20c997;
//           color: #06110e;
//         }

//         .primary-btn:hover {
//           background: transparent;
//           color: #20c997;
//           transform: translateY(-4px);
//           box-shadow: 0 10px 30px rgba(32,201,151,0.15);
//         }

//         .secondary-btn {
//           border: 1px solid rgba(255,255,255,0.2);
//           background: transparent;
//           color: white;
//         }

//         .secondary-btn:hover {
//           border-color: #20c997;
//           color: #20c997;
//           transform: translateY(-4px);
//         }

//         .social-links {
//           display: flex;
//           gap: 12px;
//           margin-top: 30px;
//         }

//         .social-links a {
//           width: 42px;
//           height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 1px solid rgba(255,255,255,0.12);
//           border-radius: 50%;
//           color: #9bacb1;
//           text-decoration: none;
//           transition: 0.3s ease;
//         }

//         .social-links a:hover {
//           color: #20c997;
//           border-color: #20c997;
//           transform: translateY(-5px);
//           background: rgba(32,201,151,0.08);
//         }

//         /* ================= MERN HERO CARD ================= */
//         .hero-card-wrapper {
//           display: flex;
//           justify-content: center;
//         }

//         .mern-card {
//           width: 390px;
//           padding: 30px;
//           border-radius: 24px;
//           background: linear-gradient(145deg, #10272b, #09161a);
//           border: 1px solid rgba(32,201,151,0.25);
//           box-shadow: 0 30px 80px rgba(0,0,0,0.35);
//           transition: 0.4s ease;
//         }

//         .mern-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(32,201,151,0.65);
//           box-shadow: 0 35px 90px rgba(32,201,151,0.12);
//         }

//         .mern-card-top {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           padding-bottom: 24px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }

//         .mern-main-icon {
//           width: 65px;
//           height: 65px;
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(32,201,151,0.1);
//           border: 1px solid rgba(32,201,151,0.25);
//           color: #20c997;
//           font-size: 27px;
//         }

//         .mern-card-top span {
//           color: #71878c;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 2px;
//         }

//         .mern-card-top h3 {
//           font-size: 30px;
//           margin-top: 3px;
//           color: #ffffff;
//         }

//         .mern-description {
//           color: #82969b;
//           font-size: 14px;
//           line-height: 1.7;
//           margin: 22px 0;
//         }

//         .mern-technologies {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 12px;
//         }

//         .mern-tech {
//           min-height: 90px;
//           padding: 15px;
//           border-radius: 13px;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           background: rgba(255,255,255,0.025);
//           border: 1px solid rgba(255,255,255,0.07);
//           transition: 0.3s ease;
//         }

//         .mern-tech:hover {
//           transform: translateY(-5px);
//           border-color: rgba(32,201,151,0.35);
//           background: rgba(32,201,151,0.05);
//         }

//         .mern-icon {
//           width: 42px;
//           height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 10px;
//           font-size: 23px;
//         }

//         .mongodb-icon {
//           color: #47a248;
//           background: rgba(71,162,72,0.1);
//         }

//         .express-icon {
//           color: #ffffff;
//           background: rgba(255,255,255,0.08);
//         }

//         .react-icon {
//           color: #61dafb;
//           background: rgba(97,218,251,0.1);
//         }

//         .node-icon {
//           color: #68a063;
//           background: rgba(104,160,99,0.1);
//         }

//         .mern-tech strong {
//           display: block;
//           font-size: 13px;
//           color: #e4edef;
//         }

//         .mern-tech span {
//           display: block;
//           color: #667c82;
//           font-size: 11px;
//           margin-top: 4px;
//         }

//         .mern-footer {
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           margin-top: 24px;
//           padding-top: 20px;
//           border-top: 1px solid rgba(255,255,255,0.07);
//         }

//         .mern-footer > span {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: #20c997;
//           box-shadow: 0 0 10px rgba(32,201,151,0.7);
//         }

//         .mern-footer p {
//           color: #7d9297;
//           font-size: 12px;
//           margin: 0;
//         }

//         /* ================= SECTIONS ================= */
//         section {
//           scroll-margin-top: 80px;
//         }

//         .about-section,
//         .skills-section,
//         .projects-section,
//         .contact-section {
//           padding: 110px 0;
//         }

//         .about-section,
//         .projects-section {
//           background: #09161a;
//         }

//         .section-heading {
//           text-align: center;
//           max-width: 650px;
//           margin: 0 auto 60px;
//         }

//         .section-heading span {
//           color: #20c997;
//           font-size: 13px;
//           font-weight: 800;
//           letter-spacing: 3px;
//         }

//         .section-heading h2 {
//           font-size: clamp(34px, 4vw, 48px);
//           margin-top: 10px;
//           letter-spacing: -1px;
//         }

//         .section-heading p {
//           color: #83969b;
//           margin-top: 14px;
//           line-height: 1.7;
//         }

//         /* ================= ABOUT ================= */
//         .about-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 35px;
//         }

//         .about-info,
//         .education-card {
//           padding: 38px;
//           border-radius: 18px;
//           border: 1px solid rgba(255,255,255,0.07);
//           background: #0c1b20;
//           transition: 0.35s ease;
//         }

//         .about-info:hover,
//         .education-card:hover {
//           transform: translateY(-7px);
//           border-color: rgba(32,201,151,0.35);
//         }

//         .about-icon {
//           width: 60px;
//           height: 60px;
//           border-radius: 14px;
//           background: rgba(32,201,151,0.1);
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 25px;
//           margin-bottom: 25px;
//         }

//         .about-info h3 {
//           font-size: 25px;
//           margin-bottom: 18px;
//         }

//         .about-info p {
//           color: #91a3a9;
//           line-height: 1.8;
//           margin-bottom: 14px;
//         }

//         .education-card h3 {
//           font-size: 25px;
//           margin-bottom: 28px;
//         }

//         .education-item {
//           display: flex;
//           gap: 18px;
//           align-items: center;
//         }

//         .education-icon {
//           min-width: 55px;
//           height: 55px;
//           border-radius: 12px;
//           background: rgba(32,201,151,0.1);
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 23px;
//         }

//         .education-item h4 {
//           font-size: 20px;
//         }

//         .education-item p {
//           color: #d0dcdf;
//           margin-top: 4px;
//         }

//         .education-item span {
//           color: #74888e;
//           font-size: 14px;
//           display: block;
//           margin-top: 5px;
//         }

//         .cgpa-box {
//           margin-top: 35px;
//           padding: 22px;
//           border-radius: 14px;
//           background: rgba(32,201,151,0.05);
//           border: 1px solid rgba(32,201,151,0.12);
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .cgpa-box span {
//           display: block;
//           color: #83969b;
//           font-size: 14px;
//         }

//         .cgpa-box strong {
//           display: block;
//           font-size: 25px;
//           color: #20c997;
//           margin-top: 5px;
//         }

//         .cgpa-circle {
//           width: 65px;
//           height: 65px;
//           border-radius: 50%;
//           border: 2px solid #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #20c997;
//           font-weight: 800;
//           font-size: 18px;
//         }

//         /* ================= SKILLS ================= */
//         .skills-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 18px;
//         }

//         .skill-card {
//           padding: 25px;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 15px;
//           background: #0b191e;
//           transition: 0.35s ease;
//         }

//         .skill-card:hover {
//           transform: translateY(-7px);
//           border-color: rgba(32,201,151,0.4);
//           box-shadow: 0 15px 35px rgba(0,0,0,0.2);
//         }

//         .skill-top {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           margin-bottom: 20px;
//         }

//         .skill-icon {
//           width: 48px;
//           height: 48px;
//           border-radius: 11px;
//           background: rgba(32,201,151,0.08);
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 25px;
//           transition: 0.3s ease;
//         }

//         .skill-card:hover .skill-icon {
//           transform: scale(1.1) rotate(-5deg);
//           background: rgba(32,201,151,0.14);
//         }

//         .skill-top h3 {
//           font-size: 17px;
//         }

//         .progress-container {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }

//         .progress-bar {
//           flex: 1;
//           height: 6px;
//           background: #16272c;
//           border-radius: 20px;
//           overflow: hidden;
//         }

//         .progress-fill {
//           height: 100%;
//           background: #20c997;
//           border-radius: 20px;
//         }

//         .progress-container span {
//           color: #20c997;
//           font-size: 13px;
//           min-width: 35px;
//         }

//         .stack-box {
//           margin-top: 30px;
//           padding: 25px;
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           border: 1px solid rgba(32,201,151,0.2);
//           background: rgba(32,201,151,0.04);
//           border-radius: 15px;
//           transition: 0.3s ease;
//         }

//         .stack-box:hover {
//           transform: translateY(-5px);
//           border-color: rgba(32,201,151,0.4);
//         }

//         .stack-box-icon {
//           width: 55px;
//           height: 55px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #20c997;
//           color: #06110e;
//           font-size: 23px;
//         }

//         .stack-box h3 {
//           font-size: 20px;
//         }

//         .stack-box p {
//           color: #82969b;
//           margin-top: 5px;
//         }

//         /* ================= PROJECTS ================= */
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 30px;
//         }

//         .project-card {
//           background: #0c1b20;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 18px;
//           overflow: hidden;
//           transition: 0.4s ease;
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(32,201,151,0.35);
//           box-shadow: 0 25px 60px rgba(0,0,0,0.3);
//         }

//         .project-image {
//           height: 220px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: column;
//           position: relative;
//         }

//         .tasker-image {
//           background:
//             radial-gradient(
//               circle at center,
//               rgba(32,201,151,0.2),
//               transparent 45%
//             ),
//             #10272b;
//         }

//         .cyber-image {
//           background:
//             radial-gradient(
//               circle at center,
//               rgba(32,201,151,0.2),
//               transparent 45%
//             ),
//             #101f25;
//         }

//         .project-icon {
//           width: 75px;
//           height: 75px;
//           border-radius: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #20c997;
//           font-size: 32px;
//           background: rgba(32,201,151,0.1);
//           border: 1px solid rgba(32,201,151,0.25);
//           transition: 0.35s ease;
//         }

//         .project-card:hover .project-icon {
//           transform: scale(1.12) rotate(-5deg);
//           background: rgba(32,201,151,0.15);
//         }

//         .project-image span {
//           margin-top: 18px;
//           font-size: 11px;
//           letter-spacing: 2px;
//           color: #6f898f;
//         }

//         .project-content {
//           padding: 30px;
//         }

//         .project-content h3 {
//           font-size: 26px;
//         }

//         .project-content p {
//           color: #87999e;
//           line-height: 1.75;
//           margin: 15px 0 20px;
//         }

//         .project-tech {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           margin-bottom: 25px;
//         }

//         .project-tech span {
//           padding: 6px 11px;
//           border-radius: 20px;
//           background: rgba(32,201,151,0.08);
//           color: #20c997;
//           font-size: 12px;
//         }

//         .project-btn {
//           border: none;
//           background: transparent;
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .project-btn:hover {
//           gap: 15px;
//           color: #62e5bd;
//         }

//         /* ================= CONTACT ================= */
//         .contact-grid {
//           display: grid;
//           /* Equal 50/50 columns */
//           grid-template-columns: 1fr 1fr;
//           gap: 40px;
//           /* Stretches both cards to match the exact same vertical height */
//           align-items: stretch;
//         }

//         .contact-info,
//         .contact-form {
//           background: #0c1b20;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 18px;
//           padding: 35px;
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }

//         .contact-info h3 {
//           font-size: 27px;
//         }

//         .contact-info > p {
//           color: #87999e;
//           line-height: 1.8;
//           margin: 15px 0 30px;
//         }

//         .contact-item {
//           display: flex;
//           gap: 15px;
//           align-items: center;
//           margin-bottom: 22px;
//         }

//         .contact-icon {
//           min-width: 45px;
//           height: 45px;
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(32,201,151,0.09);
//           color: #20c997;
//         }

//         .contact-item span {
//           display: block;
//           font-size: 12px;
//           color: #687d83;
//           margin-bottom: 4px;
//         }

//         .contact-item p,
//         .contact-item a {
//           color: #d3dfe1;
//           text-decoration: none;
//           margin: 0;
//           transition: 0.3s ease;
//         }

//         .contact-item a:hover {
//           color: #20c997;
//         }

//         .contact-socials {
//           display: flex;
//           gap: 10px;
//           margin-top: auto;
//           padding-top: 25px;
//         }

//         .contact-socials a {
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           color: #84969b;
//           border: 1px solid rgba(255,255,255,0.1);
//           transition: 0.3s ease;
//         }

//         .contact-socials a:hover {
//           color: #20c997;
//           border-color: #20c997;
//           transform: translateY(-4px);
//         }

//         .contact-form form {
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//           flex: 1;
//         }

//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 18px;
//         }

//         .form-group {
//           margin-bottom: 20px;
//         }

//         .form-group.message-group {
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//         }

//         .form-group label {
//           display: block;
//           color: #d7e1e3;
//           font-size: 14px;
//           margin-bottom: 8px;
//         }

//         .form-group input,
//         .form-group textarea {
//           width: 100%;
//           border: 1px solid rgba(255,255,255,0.09);
//           background: #081419;
//           color: white;
//           border-radius: 9px;
//           padding: 14px;
//           outline: none;
//           transition: 0.3s ease;
//           font-family: inherit;
//         }

//         .form-group input {
//           height: 50px;
//         }

//         .form-group textarea {
//           flex: 1;
//           min-height: 120px;
//           resize: vertical;
//         }

//         .form-group input:focus,
//         .form-group textarea:focus {
//           border-color: #20c997;
//           box-shadow: 0 0 0 3px rgba(32,201,151,0.08);
//         }

//         .form-group input::placeholder,
//         .form-group textarea::placeholder {
//           color: #4f646a;
//         }

//         .send-btn {
//           height: 52px;
//           padding: 0 25px;
//           border: 1px solid #20c997;
//           border-radius: 8px;
//           background: #20c997;
//           color: #06110e;
//           font-weight: 800;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           cursor: pointer;
//           transition: 0.3s ease;
//           margin-top: auto;
//         }

//         .send-btn:hover {
//           background: transparent;
//           color: #20c997;
//           transform: translateY(-3px);
//         }

//         /* ================= FOOTER ================= */
//         .footer {
//           padding: 45px 0 25px;
//           background: #050c0f;
//           border-top: 1px solid rgba(255,255,255,0.06);
//         }

//         .footer-content {
//           text-align: center;
//         }

//         .footer-logo {
//           font-size: 28px;
//           font-weight: 800;
//         }

//         .footer-logo span {
//           color: #20c997;
//         }

//         .footer-content > p {
//           color: #667a80;
//           margin-top: 8px;
//         }

//         .footer-links {
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           margin: 25px 0;
//           flex-wrap: wrap;
//         }

//         .footer-links button {
//           border: none;
//           background: transparent;
//           color: white;
//           cursor: pointer;
//           padding: 7px 12px;
//           transition: 0.3s ease;
//         }

//         .footer-links button:hover {
//           color: #20c997;
//         }

//         .footer-bottom {
//           padding-top: 22px;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           color: #4f6368;
//           font-size: 13px;
//         }

//         /* ================= RESPONSIVE ================= */
//         @media (max-width: 991px) {
//           .hero-content {
//             grid-template-columns: 1fr;
//             text-align: center;
//           }

//           .small-intro {
//             justify-content: center;
//           }

//           .hero-text p {
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .hero-buttons,
//           .social-links {
//             justify-content: center;
//           }

//           .hero-card-wrapper {
//             margin-top: 25px;
//           }

//           .about-grid,
//           .contact-grid {
//             grid-template-columns: 1fr;
//           }

//           .projects-grid {
//             grid-template-columns: 1fr;
//             max-width: 650px;
//             margin: auto;
//           }
//         }

//         @media (max-width: 768px) {
//           .nav-container {
//             height: 70px;
//           }

//           .menu-button {
//             display: block;
//           }

//           .nav-links {
//             position: absolute;
//             top: 70px;
//             left: 0;
//             width: 100%;
//             background: #09161a;
//             border-bottom: 1px solid rgba(255,255,255,0.08);
//             display: none;
//             flex-direction: column;
//             align-items: stretch;
//             padding: 15px;
//           }

//           .nav-links.open {
//             display: flex;
//           }

//           .nav-links button {
//             width: 100%;
//             text-align: left;
//             padding: 13px 15px;
//           }

//           .hero-section {
//             padding-top: 120px;
//           }

//           .mern-card {
//             width: 100%;
//             max-width: 390px;
//           }

//           .skills-grid {
//             grid-template-columns: 1fr;
//           }

//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 0;
//           }
//         }

//         @media (max-width: 576px) {
//           .container {
//             width: 92%;
//           }

//           .about-section,
//           .skills-section,
//           .projects-section,
//           .contact-section {
//             padding: 80px 0;
//           }

//           .hero-text h1 {
//             font-size: 48px;
//           }

//           .hero-text h2 {
//             font-size: 25px;
//           }

//           .hero-buttons {
//             flex-direction: column;
//             align-items: center;
//           }

//           .primary-btn,
//           .secondary-btn {
//             width: 100%;
//             max-width: 280px;
//           }

//           .mern-card {
//             padding: 22px;
//           }

//           .mern-technologies {
//             grid-template-columns: 1fr;
//           }

//           .about-info,
//           .education-card,
//           .contact-info,
//           .contact-form {
//             padding: 25px;
//           }

//           .project-content {
//             padding: 25px;
//           }

//           .stack-box {
//             align-items: flex-start;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Portfolio;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaArrowRight,
//   FaBars,
//   FaTimes,
//   FaCode,
//   FaGraduationCap,
//   FaCar,
//   FaTasks,
//   FaRobot,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
// } from "react-icons/fa";
// import { SiMongodb, SiExpress } from "react-icons/si";
// import emailjs from "@emailjs/browser";

// const Portfolio = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(
//     window.location.pathname.replace(/^\//, "") || "home",
//   );
//   const navRef = useRef(null);

//   /* ================= URL + SCROLL NAVIGATION ================= */
//   useEffect(() => {
//     const getSectionFromPath = () => {
//       const path = window.location.pathname
//         .replace(/^\//, "")
//         .replace(/\/$/, "");
//       return path || "home";
//     };

//     const scrollToCurrentSection = (behavior = "smooth") => {
//       const sectionId = getSectionFromPath();
//       const section = document.getElementById(sectionId);

//       if (section) {
//         setActiveSection(sectionId);
//         requestAnimationFrame(() => {
//           section.scrollIntoView({
//             behavior,
//             block: "start",
//           });
//         });
//       } else {
//         setActiveSection("home");
//       }
//     };

//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section[id]");
//       const scrollPosition = window.scrollY + 150;

//       let currentSection = "home";

//       sections.forEach((section) => {
//         const top = section.offsetTop;
//         const bottom = top + section.offsetHeight;
//         const id = section.getAttribute("id");

//         if (scrollPosition >= top && scrollPosition < bottom) {
//           currentSection = id;
//         }
//       });

//       setActiveSection(currentSection);

//       const currentPath = window.location.pathname;
//       const desiredPath =
//         currentSection === "home" ? "/" : `/${currentSection}`;

//       if (currentPath !== desiredPath) {
//         window.history.replaceState(
//           { section: currentSection },
//           "",
//           desiredPath,
//         );
//       }
//     };

//     const handlePopState = () => {
//       scrollToCurrentSection("smooth");
//       setMenuOpen(false);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("popstate", handlePopState);

//     // If the page is opened directly at /skills, /projects, etc.
//     scrollToCurrentSection("auto");

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, []);

//   /* ================= CLOSE MOBILE MENU ON OUTSIDE CLICK ================= */
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         menuOpen &&
//         navRef.current &&
//         !navRef.current.contains(event.target)
//       ) {
//         setMenuOpen(false);
//       }
//     };

//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("touchstart", handleOutsideClick);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("touchstart", handleOutsideClick);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [menuOpen]);

//   /* ================= NAVIGATE TO SECTION + UPDATE URL ================= */
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);

//     setMenuOpen(false);
//     setActiveSection(id);

//     if (window.location.pathname !== `/${id}`) {
//       window.history.pushState({ section: id }, "", `/${id}`);
//     }

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   /* ================= SKILLS ================= */
//   const skills = [
//     {
//       name: "HTML5",
//       icon: <FaHtml5 />,
//       level: "90%",
//     },
//     {
//       name: "CSS3",
//       icon: <FaCss3Alt />,
//       level: "85%",
//     },
//     {
//       name: "JavaScript",
//       icon: <FaJs />,
//       level: "80%",
//     },
//     {
//       name: "React",
//       icon: <FaReact />,
//       level: "80%",
//     },
//     {
//       name: "Node.js",
//       icon: <FaNodeJs />,
//       level: "75%",
//     },
//     {
//       name: "Express.js",
//       icon: <SiExpress />,
//       level: "75%",
//     },
//     {
//       name: "MongoDB",
//       icon: <SiMongodb />,
//       level: "75%",
//     },
//     {
//       name: "Artificial Intelligence",
//       icon: <FaRobot />,
//       level: "65%",
//     },
//   ];

//   return (
//     <>
//       <div className="portfolio">
//         {/* ================= NAVBAR ================= */}
//         <nav className="navbar-custom" ref={navRef}>
//           <div className="container nav-container">
//             <div className="logo" onClick={() => scrollToSection("home")}>
//               A<span>wais</span>
//             </div>

//             <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//               <button
//                 className={activeSection === "home" ? "active" : ""}
//                 onClick={() => scrollToSection("home")}
//               >
//                 Home
//               </button>
//               <button
//                 className={activeSection === "about" ? "active" : ""}
//                 onClick={() => scrollToSection("about")}
//               >
//                 About
//               </button>
//               <button
//                 className={activeSection === "skills" ? "active" : ""}
//                 onClick={() => scrollToSection("skills")}
//               >
//                 Skills
//               </button>
//               <button
//                 className={activeSection === "projects" ? "active" : ""}
//                 onClick={() => scrollToSection("projects")}
//               >
//                 Projects
//               </button>
//               <button
//                 className={activeSection === "contact" ? "active" : ""}
//                 onClick={() => scrollToSection("contact")}
//               >
//                 Contact
//               </button>
//             </div>

//             <button
//               className="menu-button"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </nav>

//         {/* ================= HOME ================= */}
//         <section id="home" className="hero-section">
//           <div className="container">
//             <div className="hero-content">
//               {/* LEFT SIDE */}
//               <div className="hero-text">
//                 <div className="small-intro">
//                   <span></span>
//                   WELCOME TO MY PORTFOLIO
//                 </div>

//                 <h1>
//                   Hi, I'm <span>Awais</span>
//                 </h1>

//                 <h2>
//                   MERN Stack
//                   <strong> Web Developer</strong>
//                 </h2>

//                 <p>
//                   I am a passionate MERN Stack Web Developer and an APD CS
//                   student. I enjoy creating modern, responsive, and
//                   user-friendly web applications.
//                 </p>

//                 <div className="hero-buttons">
//                   <button
//                     className="primary-btn"
//                     onClick={() => scrollToSection("projects")}
//                   >
//                     View My Work
//                     <FaArrowRight />
//                   </button>

//                   <button
//                     className="secondary-btn"
//                     onClick={() => scrollToSection("contact")}
//                   >
//                     Contact Me
//                   </button>
//                 </div>

//                 <div className="social-links">
//                   <a
//                     href="https://github.com/awaisariffsdev-glitch"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaGithub />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/in/awais-arif-webdev/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaLinkedin />
//                   </a>

//                   <a href="mailto:awais.arif.fs.dev@gmail.com">
//                     <FaEnvelope />
//                   </a>
//                 </div>
//               </div>

//               {/* MERN CARD */}
//               <div className="hero-card-wrapper">
//                 <div className="mern-card">
//                   <div className="mern-card-top">
//                     <div className="mern-main-icon">
//                       <FaCode />
//                     </div>

//                     <div>
//                       <span>FULL STACK</span>
//                       <h3>MERN Stack</h3>
//                     </div>
//                   </div>

//                   <p className="mern-description">
//                     Building modern full-stack web applications with the MERN
//                     technology stack.
//                   </p>

//                   <div className="mern-technologies">
//                     <div className="mern-tech">
//                       <div className="mern-icon mongodb-icon">
//                         <SiMongodb />
//                       </div>
//                       <div>
//                         <strong>MongoDB</strong>
//                         <span>Database</span>
//                       </div>
//                     </div>

//                     <div className="mern-tech">
//                       <div className="mern-icon express-icon">
//                         <SiExpress />
//                       </div>
//                       <div>
//                         <strong>Express.js</strong>
//                         <span>Backend</span>
//                       </div>
//                     </div>

//                     <div className="mern-tech">
//                       <div className="mern-icon react-icon">
//                         <FaReact />
//                       </div>
//                       <div>
//                         <strong>React</strong>
//                         <span>Frontend</span>
//                       </div>
//                     </div>

//                     <div className="mern-tech">
//                       <div className="mern-icon node-icon">
//                         <FaNodeJs />
//                       </div>
//                       <div>
//                         <strong>Node.js</strong>
//                         <span>Runtime</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mern-footer">
//                     <span></span>
//                     <p>MERN Stack Developer</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= ABOUT ================= */}
//         <section id="about" className="about-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>ABOUT ME</span>
//               <h2>Who I Am</h2>
//               <p>
//                 A developer focused on building scalable, modern web
//                 applications.
//               </p>
//             </div>

//             <div className="about-grid">
//               <div className="about-info">
//                 <div className="about-icon">
//                   <FaGraduationCap />
//                 </div>
//                 <h3>MERN Stack Developer</h3>
//                 <p>
//                   I am Awais, a MERN Stack Web Developer currently studying APD
//                   CS in Lahore.
//                 </p>
//                 <p>
//                   I have built both frontend and backend architectures and enjoy
//                   developing complete web systems using modern frameworks and
//                   libraries.
//                 </p>
//                 <p>
//                   My focus is on writing clean, maintainable code and building
//                   performant, responsive, and secure user experiences.
//                 </p>
//               </div>

//               <div className="education-card">
//                 <h3>Education</h3>
//                 <div className="education-item">
//                   <div className="education-icon">
//                     <FaGraduationCap />
//                   </div>
//                   <div>
//                     <h4>APD CS</h4>
//                     <p>Associate Degree Program</p>
//                     <span>Undergraduate Studies</span>
//                   </div>
//                 </div>

//                 <div className="cgpa-box">
//                   <div>
//                     <span>First 2 Semesters</span>
//                     <strong>3.3 CGPA</strong>
//                   </div>
//                   <div className="cgpa-circle">3.3</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= SKILLS ================= */}
//         <section id="skills" className="skills-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>MY SKILLS</span>
//               <h2>Technologies I Use</h2>
//               <p>
//                 Technologies and tools I work with for modern full-stack
//                 development.
//               </p>
//             </div>

//             <div className="skills-grid">
//               {skills.map((skill, index) => (
//                 <div className="skill-card" key={index}>
//                   <div className="skill-top">
//                     <div className="skill-icon">{skill.icon}</div>
//                     <h3>{skill.name}</h3>
//                   </div>

//                   <div className="progress-container">
//                     <div className="progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{
//                           width: skill.level,
//                         }}
//                       ></div>
//                     </div>
//                     <span>{skill.level}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="stack-box">
//               <div className="stack-box-icon">
//                 <FaCode />
//               </div>
//               <div>
//                 <h3>MERN Stack Development</h3>
//                 <p>MongoDB • Express.js • React • Node.js</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= PROJECTS ================= */}
//         <section id="projects" className="projects-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>MY PROJECTS</span>
//               <h2>Projects I've Built</h2>
//               <p>Some of my web development projects.</p>
//             </div>

//             <div className="projects-grid">
//               {/* TASKER */}
//               <div className="project-card">
//                 <div className="project-content">
//                   <div className="project-heading">
//                     <div className="project-icon tasker-project-icon">
//                       <FaTasks />
//                     </div>
//                     <div>
//                       <span className="project-category">MERN STACK</span>
//                       <h3>Tasker App</h3>
//                     </div>
//                   </div>
//                   <p>
//                     A task management web application designed to help users
//                     organize, manage and track their daily tasks efficiently.
//                   </p>

//                   <div className="project-tech">
//                     <span>React</span>
//                     <span>Node.js</span>
//                     <span>Express</span>
//                     <span>MongoDB</span>
//                   </div>

//                   <button
//                     className="project-btn"
//                     onClick={() => scrollToSection("contact")}
//                   >
//                     Discuss Project
//                     <FaArrowRight />
//                   </button>
//                 </div>
//               </div>

//               {/* CYBER MOTORS */}
//               <div className="project-card">
//                 <div className="project-content">
//                   <div className="project-heading">
//                     <div className="project-icon cyber-project-icon">
//                       <FaCar />
//                     </div>
//                     <div>
//                       <span className="project-category">CAR MARKETPLACE</span>
//                       <h3>Cyber Motors</h3>
//                     </div>
//                   </div>
//                   <p>
//                     A car selling and purchasing platform where users can
//                     explore cars and manage car listings through a modern web
//                     interface.
//                   </p>

//                   <div className="project-tech">
//                     <span>React</span>
//                     <span>Node.js</span>
//                     <span>Express</span>
//                     <span>MongoDB</span>
//                   </div>

//                   <button
//                     className="project-btn"
//                     onClick={() => scrollToSection("contact")}
//                   >
//                     Discuss Project
//                     <FaArrowRight />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= CONTACT ================= */}
//         <section id="contact" className="contact-section">
//           <div className="container">
//             <div className="section-heading">
//               <span>CONTACT ME</span>
//               <h2>Let's Work Together</h2>
//               <p>Have a project or idea? Feel free to get in touch.</p>
//             </div>

//             <div className="contact-grid">
//               {/* CONTACT INFORMATION */}
//               <div className="contact-info">
//                 <h3>Get In Touch</h3>
//                 <p>
//                   I am always interested in learning, building new projects, and
//                   collaborating on interesting web development ideas.
//                 </p>

//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <FaEnvelope />
//                   </div>
//                   <div>
//                     <span>Email</span>
//                     <a href="mailto:awais.arif.fs.dev@gmail.com">
//                       awais.arif.fs.dev@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* <div className="contact-item">
//                   <div className="contact-icon">
//                     <FaPhone />
//                   </div>
//                   <div>
//                     <span>Phone</span>
//                     <p>+92 320 7870705</p>
//                   </div>
//                 </div> */}

//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <FaPhone />
//                   </div>
//                   <div>
//                     <span>Phone</span>
//                     <a
//                       href="https://wa.me/923207870705"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       +92 320 7870705
//                     </a>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <FaMapMarkerAlt />
//                   </div>
//                   <div>
//                     <span>Location</span>
//                     <p>Lahore, Pakistan</p>
//                   </div>
//                 </div>

//                 <div className="contact-socials">
//                   <a
//                     href="https://github.com/awaisariffsdev-glitch"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaGithub />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/in/awais-arif-webdev/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaLinkedin />
//                   </a>

//                   <a href="mailto:awais.arif.fs.dev@gmail.com">
//                     <FaEnvelope />
//                   </a>
//                 </div>
//               </div>

//               {/* CONTACT FORM */}
//               <div className="contact-form">
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();

//                     emailjs
//                       .sendForm(
//                         "service_ej6dl7s",
//                         "template_j1han28",
//                         e.currentTarget,
//                         "tKoUFC7TYH7vtKDCM",
//                       )
//                       .then(
//                         () => {
//                           alert(
//                             "Thank you! Your message has been sent successfully.",
//                           );
//                           e.target.reset();
//                         },
//                         (error) => {
//                           console.error("EmailJS Error:", error);
//                           alert(
//                             "Sorry, your message could not be sent. Please try again.",
//                           );
//                         },
//                       );
//                   }}
//                 >
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>Your Name</label>
//                       <input
//                         type="text"
//                         name="from_name"
//                         placeholder="Enter your name"
//                         required
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Email Address</label>
//                       <input
//                         type="email"
//                         name="from_email"
//                         placeholder="Enter your email"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label>Subject</label>
//                     <input
//                       type="text"
//                       name="subject"
//                       placeholder="Enter subject"
//                       required
//                     />
//                   </div>

//                   <div className="form-group message-group">
//                     <label>Message</label>
//                     <textarea
//                       name="message"
//                       placeholder="Write your message..."
//                     ></textarea>
//                   </div>

//                   <button type="submit" className="send-btn">
//                     Send Message
//                     <FaArrowRight />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= FOOTER ================= */}
//         <footer className="footer">
//           <div className="container footer-content">
//             <div className="footer-logo">
//               A<span>wais</span>
//             </div>

//             <p className="text-light">MERN Stack Web Developer</p>

//             <div className="footer-links">
//               <button onClick={() => scrollToSection("home")}>Home</button>
//               <button onClick={() => scrollToSection("about")}>About</button>
//               <button onClick={() => scrollToSection("skills")}>Skills</button>
//               <button onClick={() => scrollToSection("projects")}>
//                 Projects
//               </button>
//               <button onClick={() => scrollToSection("contact")}>
//                 Contact
//               </button>
//             </div>

//             <div className="footer-bottom">
//               © 2026{" "}
//               <a
//                 href="https://www.instagram.com/cyb3r.awais/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="footer-author"
//               >
//                 Awais
//               </a>
//               . All Rights Reserved.
//             </div>
//           </div>
//         </footer>
//       </div>

//       {/* ================= CSS ================= */}
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           font-family: "Inter", "Segoe UI", Arial, sans-serif;
//           background: #071014;
//           color: #ffffff;
//         }

//         button {
//           font-family: inherit;
//         }

//         .portfolio {
//           width: 100%;
//           overflow: hidden;
//           background: #071014;
//         }

//         .container {
//           width: 90%;
//           max-width: 1180px;
//           margin: auto;
//         }

//         /* ================= NAVBAR ================= */
//         .navbar-custom {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           z-index: 999;
//           background: rgba(7, 16, 20, 0.93);
//           backdrop-filter: blur(14px);
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }

//         .nav-container {
//           height: 78px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .logo {
//           font-size: 30px;
//           font-weight: 800;
//           color: #ffffff;
//           cursor: pointer;
//           letter-spacing: -1px;
//         }

//         .logo span {
//           color: #20c997;
//         }

//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .nav-links button {
//           border: none;
//           background: transparent;
//           color: #aab8bd;
//           padding: 10px 16px;
//           border-radius: 8px;
//           font-size: 15px;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .nav-links button:hover,
//         .nav-links button.active {
//           color: #20c997;
//           background: rgba(32,201,151,0.08);
//         }

//         .menu-button {
//           display: none;
//           border: none;
//           background: transparent;
//           color: white;
//           font-size: 25px;
//           cursor: pointer;
//         }

//         /* ================= HERO ================= */
//         .hero-section {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           padding: 120px 0 80px;
//           position: relative;
//           background:
//             radial-gradient(
//               circle at 80% 30%,
//               rgba(32,201,151,0.12),
//               transparent 30%
//             ),
//             #071014;
//         }

//         .hero-content {
//           display: grid;
//           grid-template-columns: 1.1fr 0.9fr;
//           gap: 70px;
//           align-items: center;
//         }

//         .small-intro {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           color: #20c997;
//           font-size: 14px;
//           font-weight: 600;
//           margin-bottom: 20px;
//         }

//         .small-intro span {
//           width: 35px;
//           height: 2px;
//           background: #20c997;
//         }

//         .hero-text h1 {
//           font-size: clamp(48px, 6vw, 76px);
//           line-height: 1.05;
//           font-weight: 800;
//           letter-spacing: -3px;
//         }

//         .hero-text h1 span {
//           color: #20c997;
//         }

//         .hero-text h2 {
//           margin-top: 15px;
//           font-size: clamp(25px, 3vw, 38px);
//           color: #dce6e8;
//           font-weight: 500;
//         }

//         .hero-text h2 strong {
//           color: #20c997;
//           font-weight: 700;
//         }

//         .hero-text p {
//           max-width: 650px;
//           margin-top: 25px;
//           color: #91a3a9;
//           line-height: 1.8;
//           font-size: 16px;
//         }

//         .hero-buttons {
//           display: flex;
//           gap: 15px;
//           margin-top: 32px;
//         }

//         .primary-btn,
//         .secondary-btn {
//           height: 52px;
//           min-width: 155px;
//           padding: 0 24px;
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           cursor: pointer;
//           font-weight: 700;
//           transition: 0.3s ease;
//         }

//         .primary-btn {
//           border: 1px solid #20c997;
//           background: #20c997;
//           color: #06110e;
//         }

//         .primary-btn:hover {
//           background: transparent;
//           color: #20c997;
//           transform: translateY(-4px);
//           box-shadow: 0 10px 30px rgba(32,201,151,0.15);
//         }

//         .secondary-btn {
//           border: 1px solid rgba(255,255,255,0.2);
//           background: transparent;
//           color: white;
//         }

//         .secondary-btn:hover {
//           border-color: #20c997;
//           color: #20c997;
//           transform: translateY(-4px);
//         }

//         .social-links {
//           display: flex;
//           gap: 12px;
//           margin-top: 30px;
//         }

//         .social-links a {
//           width: 42px;
//           height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 1px solid rgba(255,255,255,0.12);
//           border-radius: 50%;
//           color: #9bacb1;
//           text-decoration: none;
//           transition: 0.3s ease;
//         }

//         .social-links a:hover {
//           color: #20c997;
//           border-color: #20c997;
//           transform: translateY(-5px);
//           background: rgba(32,201,151,0.08);
//         }

//         /* ================= MERN HERO CARD ================= */
//         .hero-card-wrapper {
//           display: flex;
//           justify-content: center;
//         }

//         .mern-card {
//           width: 390px;
//           padding: 30px;
//           border-radius: 24px;
//           background: linear-gradient(145deg, #10272b, #09161a);
//           border: 1px solid rgba(32,201,151,0.25);
//           box-shadow: 0 30px 80px rgba(0,0,0,0.35);
//           transition: 0.4s ease;
//         }

//         .mern-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(32,201,151,0.65);
//           box-shadow: 0 35px 90px rgba(32,201,151,0.12);
//         }

//         .mern-card-top {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           padding-bottom: 24px;
//           border-bottom: 1px solid rgba(255,255,255,0.07);
//         }

//         .mern-main-icon {
//           width: 65px;
//           height: 65px;
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(32,201,151,0.1);
//           border: 1px solid rgba(32,201,151,0.25);
//           color: #20c997;
//           font-size: 27px;
//         }

//         .mern-card-top span {
//           color: #71878c;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 2px;
//         }

//         .mern-card-top h3 {
//           font-size: 30px;
//           margin-top: 3px;
//           color: #ffffff;
//         }

//         .mern-description {
//           color: #82969b;
//           font-size: 14px;
//           line-height: 1.7;
//           margin: 22px 0;
//         }

//         .mern-technologies {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 12px;
//         }

//         .mern-tech {
//           min-height: 90px;
//           padding: 15px;
//           border-radius: 13px;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           background: rgba(255,255,255,0.025);
//           border: 1px solid rgba(255,255,255,0.07);
//           transition: 0.3s ease;
//         }

//         .mern-tech:hover {
//           transform: translateY(-5px);
//           border-color: rgba(32,201,151,0.35);
//           background: rgba(32,201,151,0.05);
//         }

//         .mern-icon {
//           width: 42px;
//           height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 10px;
//           font-size: 23px;
//         }

//         .mongodb-icon {
//           color: #47a248;
//           background: rgba(71,162,72,0.1);
//         }

//         .express-icon {
//           color: #ffffff;
//           background: rgba(255,255,255,0.08);
//         }

//         .react-icon {
//           color: #61dafb;
//           background: rgba(97,218,251,0.1);
//         }

//         .node-icon {
//           color: #68a063;
//           background: rgba(104,160,99,0.1);
//         }

//         .mern-tech strong {
//           display: block;
//           font-size: 13px;
//           color: #e4edef;
//         }

//         .mern-tech span {
//           display: block;
//           color: #667c82;
//           font-size: 11px;
//           margin-top: 4px;
//         }

//         .mern-footer {
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           margin-top: 24px;
//           padding-top: 20px;
//           border-top: 1px solid rgba(255,255,255,0.07);
//         }

//         .mern-footer > span {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: #20c997;
//           box-shadow: 0 0 10px rgba(32,201,151,0.7);
//         }

//         .mern-footer p {
//           color: #7d9297;
//           font-size: 12px;
//           margin: 0;
//         }

//         /* ================= SECTIONS ================= */
//         section {
//           scroll-margin-top: 80px;
//         }

//         .about-section,
//         .skills-section,
//         .projects-section,
//         .contact-section {
//           padding: 110px 0;
//         }

//         .about-section,
//         .projects-section {
//           background: #09161a;
//         }

//         .section-heading {
//           text-align: center;
//           max-width: 650px;
//           margin: 0 auto 60px;
//         }

//         .section-heading span {
//           color: #20c997;
//           font-size: 13px;
//           font-weight: 800;
//           letter-spacing: 3px;
//         }

//         .section-heading h2 {
//           font-size: clamp(34px, 4vw, 48px);
//           margin-top: 10px;
//           letter-spacing: -1px;
//         }

//         .section-heading p {
//           color: #83969b;
//           margin-top: 14px;
//           line-height: 1.7;
//         }

//         /* ================= ABOUT ================= */
//         .about-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 35px;
//         }

//         .about-info,
//         .education-card {
//           padding: 38px;
//           border-radius: 18px;
//           border: 1px solid rgba(255,255,255,0.07);
//           background: #0c1b20;
//           transition: 0.35s ease;
//         }

//         .about-info:hover,
//         .education-card:hover {
//           transform: translateY(-7px);
//           border-color: rgba(32,201,151,0.35);
//         }

//         .about-icon {
//           width: 60px;
//           height: 60px;
//           border-radius: 14px;
//           background: rgba(32,201,151,0.1);
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 25px;
//           margin-bottom: 25px;
//         }

//         .about-info h3 {
//           font-size: 25px;
//           margin-bottom: 18px;
//         }

//         .about-info p {
//           color: #91a3a9;
//           line-height: 1.8;
//           margin-bottom: 14px;
//         }

//         .education-card h3 {
//           font-size: 25px;
//           margin-bottom: 28px;
//         }

//         .education-item {
//           display: flex;
//           gap: 18px;
//           align-items: center;
//         }

//         .education-icon {
//           min-width: 55px;
//           height: 55px;
//           border-radius: 12px;
//           background: rgba(32,201,151,0.1);
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 23px;
//         }

//         .education-item h4 {
//           font-size: 20px;
//         }

//         .education-item p {
//           color: #d0dcdf;
//           margin-top: 4px;
//         }

//         .education-item span {
//           color: #74888e;
//           font-size: 14px;
//           display: block;
//           margin-top: 5px;
//         }

//         .cgpa-box {
//           margin-top: 35px;
//           padding: 22px;
//           border-radius: 14px;
//           background: rgba(32,201,151,0.05);
//           border: 1px solid rgba(32,201,151,0.12);
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .cgpa-box span {
//           display: block;
//           color: #83969b;
//           font-size: 14px;
//         }

//         .cgpa-box strong {
//           display: block;
//           font-size: 25px;
//           color: #20c997;
//           margin-top: 5px;
//         }

//         .cgpa-circle {
//           width: 65px;
//           height: 65px;
//           border-radius: 50%;
//           border: 2px solid #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #20c997;
//           font-weight: 800;
//           font-size: 18px;
//         }

//         /* ================= SKILLS ================= */
//         .skills-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 18px;
//         }

//         .skill-card {
//           padding: 25px;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 15px;
//           background: #0b191e;
//           transition: 0.35s ease;
//         }

//         .skill-card:hover {
//           transform: translateY(-7px);
//           border-color: rgba(32,201,151,0.4);
//           box-shadow: 0 15px 35px rgba(0,0,0,0.2);
//         }

//         .skill-top {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           margin-bottom: 20px;
//         }

//         .skill-icon {
//           width: 48px;
//           height: 48px;
//           border-radius: 11px;
//           background: rgba(32,201,151,0.08);
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 25px;
//           transition: 0.3s ease;
//         }

//         .skill-card:hover .skill-icon {
//           transform: scale(1.1) rotate(-5deg);
//           background: rgba(32,201,151,0.14);
//         }

//         .skill-top h3 {
//           font-size: 17px;
//         }

//         .skill-card:nth-child(1) .skill-icon {
//           color: #e34f26;
//           background: rgba(227,79,38,0.10);
//         }

//         .skill-card:nth-child(2) .skill-icon {
//           color: #1572b6;
//           background: rgba(21,114,182,0.10);
//         }

//         .skill-card:nth-child(3) .skill-icon {
//           color: #f7df1e;
//           background: rgba(247,223,30,0.10);
//         }

//         .skill-card:nth-child(4) .skill-icon {
//           color: #61dafb;
//           background: rgba(97,218,251,0.10);
//         }

//         .skill-card:nth-child(5) .skill-icon {
//           color: #68a063;
//           background: rgba(104,160,99,0.10);
//         }

//         .skill-card:nth-child(6) .skill-icon {
//           color: #ffffff;
//           background: rgba(255,255,255,0.08);
//         }

//         .skill-card:nth-child(7) .skill-icon {
//           color: #47a248;
//           background: rgba(71,162,72,0.10);
//         }

//         .skill-card:nth-child(8) .skill-icon {
//           color: #a78bfa;
//           background: rgba(167,139,250,0.10);
//         }

//         .skill-card:hover .skill-icon {
//           transform: scale(1.1) rotate(-5deg);
//         }

//         .progress-container {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }

//         .progress-bar {
//           flex: 1;
//           height: 6px;
//           background: #16272c;
//           border-radius: 20px;
//           overflow: hidden;
//         }

//         .progress-fill {
//           height: 100%;
//           background: #20c997;
//           border-radius: 20px;
//         }

//         .progress-container span {
//           color: #20c997;
//           font-size: 13px;
//           min-width: 35px;
//         }

//         .stack-box {
//           margin-top: 30px;
//           padding: 25px;
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           border: 1px solid rgba(32,201,151,0.2);
//           background: rgba(32,201,151,0.04);
//           border-radius: 15px;
//           transition: 0.3s ease;
//         }

//         .stack-box:hover {
//           transform: translateY(-5px);
//           border-color: rgba(32,201,151,0.4);
//         }

//         .stack-box-icon {
//           width: 55px;
//           height: 55px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #20c997;
//           color: #06110e;
//           font-size: 23px;
//         }

//         .stack-box h3 {
//           font-size: 20px;
//         }

//         .stack-box p {
//           color: #82969b;
//           margin-top: 5px;
//         }

//         /* ================= PROJECTS ================= */
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 30px;
//         }

//         .project-card {
//           background: #0c1b20;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 18px;
//           overflow: hidden;
//           transition: 0.4s ease;
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(32,201,151,0.35);
//           box-shadow: 0 25px 60px rgba(0,0,0,0.3);
//         }

//         .project-content {
//           padding: 30px;
//         }

//         .project-heading {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           margin-bottom: 20px;
//         }

//         .project-icon {
//           width: 58px;
//           height: 58px;
//           min-width: 58px;
//           border-radius: 14px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 25px;
//           transition: 0.35s ease;
//         }

//         .tasker-project-icon {
//           color: #20c997;
//           background: rgba(32,201,151,0.1);
//           border: 1px solid rgba(32,201,151,0.25);
//         }

//         .cyber-project-icon {
//           color: #61dafb;
//           background: rgba(97,218,251,0.1);
//           border: 1px solid rgba(97,218,251,0.25);
//         }

//         .project-card:hover .project-icon {
//           transform: scale(1.08) rotate(-4deg);
//         }

//         .project-category {
//           display: block;
//           margin-bottom: 5px;
//           font-size: 11px;
//           letter-spacing: 2px;
//           font-weight: 700;
//           color: #6f898f;
//         }

//         .project-content h3 {
//           font-size: 26px;
//         }

//         .project-content p {
//           color: #87999e;
//           line-height: 1.75;
//           margin: 15px 0 20px;
//         }

//         .project-tech {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           margin-bottom: 25px;
//         }

//         .project-tech span {
//           padding: 6px 11px;
//           border-radius: 20px;
//           background: rgba(32,201,151,0.08);
//           color: #20c997;
//           font-size: 12px;
//         }

//         .project-btn {
//           border: none;
//           background: transparent;
//           color: #20c997;
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .project-btn:hover {
//           gap: 15px;
//           color: #62e5bd;
//         }

//         /* ================= CONTACT ================= */
//         .contact-grid {
//           display: grid;
//           /* Equal 50/50 columns */
//           grid-template-columns: 1fr 1fr;
//           gap: 40px;
//           /* Stretches both cards to match the exact same vertical height */
//           align-items: stretch;
//         }

//         .contact-info,
//         .contact-form {
//           background: #0c1b20;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 18px;
//           padding: 35px;
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }

//         .contact-info h3 {
//           font-size: 27px;
//         }

//         .contact-info > p {
//           color: #87999e;
//           line-height: 1.8;
//           margin: 15px 0 30px;
//         }

//         .contact-item {
//           display: flex;
//           gap: 15px;
//           align-items: center;
//           margin-bottom: 22px;
//         }

//         .contact-icon {
//           min-width: 45px;
//           height: 45px;
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(32,201,151,0.09);
//           color: #20c997;
//         }

//         .contact-item span {
//           display: block;
//           font-size: 12px;
//           color: #687d83;
//           margin-bottom: 4px;
//         }

//         .contact-item p,
//         .contact-item a {
//           color: #d3dfe1;
//           text-decoration: none;
//           margin: 0;
//           transition: 0.3s ease;
//         }

//         .contact-item a:hover {
//           color: #20c997;
//         }

//         .contact-socials {
//           display: flex;
//           gap: 10px;
//           margin-top: auto;
//           padding-top: 25px;
//         }

//         .contact-socials a {
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           color: #84969b;
//           border: 1px solid rgba(255,255,255,0.1);
//           transition: 0.3s ease;
//         }

//         .contact-socials a:hover {
//           color: #20c997;
//           border-color: #20c997;
//           transform: translateY(-4px);
//         }

//         .contact-form form {
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//           flex: 1;
//         }

//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 18px;
//         }

//         .form-group {
//           margin-bottom: 20px;
//         }

//         .form-group.message-group {
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//         }

//         .form-group label {
//           display: block;
//           color: #d7e1e3;
//           font-size: 14px;
//           margin-bottom: 8px;
//         }

//         .form-group input,
//         .form-group textarea {
//           width: 100%;
//           border: 1px solid rgba(255,255,255,0.09);
//           background: #081419;
//           color: white;
//           border-radius: 9px;
//           padding: 14px;
//           outline: none;
//           transition: 0.3s ease;
//           font-family: inherit;
//         }

//         .form-group input {
//           height: 50px;
//         }

//         .form-group textarea {
//           flex: 1;
//           min-height: 120px;
//           resize: vertical;
//         }

//         .form-group input:focus,
//         .form-group textarea:focus {
//           border-color: #20c997;
//           box-shadow: 0 0 0 3px rgba(32,201,151,0.08);
//         }

//         .form-group input::placeholder,
//         .form-group textarea::placeholder {
//           color: #4f646a;
//         }

//         .send-btn {
//           height: 52px;
//           padding: 0 25px;
//           border: 1px solid #20c997;
//           border-radius: 8px;
//           background: #20c997;
//           color: #06110e;
//           font-weight: 800;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           cursor: pointer;
//           transition: 0.3s ease;
//           margin-top: auto;
//         }

//         .send-btn:hover {
//           background: transparent;
//           color: #20c997;
//           transform: translateY(-3px);
//         }

//         /* ================= FOOTER ================= */
//         .footer {
//           padding: 45px 0 25px;
//           background: #050c0f;
//           border-top: 1px solid rgba(255,255,255,0.06);
//         }

//         .footer-content {
//           text-align: center;
//         }

//         .footer-logo {
//           font-size: 28px;
//           font-weight: 800;
//         }

//         .footer-logo span {
//           color: #20c997;
//         }

//         .footer-content > p {
//           color: #667a80;
//           margin-top: 8px;
//         }

//         .footer-links {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 15px; /* Adjust gap for smaller mobile screens */
//   flex-wrap: wrap; /* Allows buttons to wrap cleanly on small screens */
//   width: 100%;
//   max-width: 100%;
//   margin: 25px auto;
//   padding: 2px 4px;
// }

//         .footer-links::-webkit-scrollbar {
//           display: none;
//         }

//       .footer-links button {
//   flex: 0 0 auto;
//   white-space: nowrap;
//   border: none;
//   background-color: #050C0F;
//   color: white;
//   padding: 7px 12px;
//   font-size: 13px;
//   cursor: pointer;
//   transition: color 0.2s ease;
// }

//         .footer-links button:hover {
//   color: #20c997;
// }

//         .footer-author {
//           color: #4f6368;
//           text-decoration: none;
//           transition: 0.3s ease;
//         }

//         .footer-author:hover {
//           color: #20c997;
//         }

//         .footer-bottom {
//           padding-top: 22px;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           color: #4f6368;
//           font-size: 13px;
//         }

//         /* ================= RESPONSIVE ================= */
//         @media (max-width: 991px) {
//           .hero-content {
//             grid-template-columns: 1fr;
//             text-align: center;
//           }

//           .small-intro {
//             justify-content: center;
//           }

//           .hero-text p {
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .hero-buttons,
//           .social-links {
//             justify-content: center;
//           }

//           .hero-card-wrapper {
//             margin-top: 25px;
//           }

//           .about-grid,
//           .contact-grid {
//             grid-template-columns: 1fr;
//           }

//           .projects-grid {
//             grid-template-columns: 1fr;
//             max-width: 650px;
//             margin: auto;
//           }
//         }

//         @media (max-width: 768px) {
//           .nav-container {
//             height: 70px;
//           }

//           .menu-button {
//             display: block;
//           }

//           .nav-links {
//             position: absolute;
//             top: 70px;
//             left: 0;
//             width: 100%;
//             background: #09161a;
//             border-bottom: 1px solid rgba(255,255,255,0.08);
//             display: none;
//             flex-direction: column;
//             align-items: stretch;
//             padding: 15px;
//           }

//           .nav-links.open {
//             display: flex;
//           }

//           .nav-links button {
//             width: 100%;
//             text-align: left;
//             padding: 13px 15px;
//           }

//           .hero-section {
//             padding-top: 120px;
//           }

//           .mern-card {
//             width: 100%;
//             max-width: 390px;
//           }

//           .skills-grid {
//             grid-template-columns: 1fr;
//           }

//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 0;
//           }
//         }

//         @media (max-width: 576px) {
//           .container {
//             width: 92%;
//           }

//           .about-section,
//           .skills-section,
//           .projects-section,
//           .contact-section {
//             padding: 80px 0;
//           }

//           .hero-text h1 {
//             font-size: 48px;
//           }

//           .hero-text h2 {
//             font-size: 25px;
//           }

//           .hero-buttons {
//             flex-direction: column;
//             align-items: center;
//           }

//           .primary-btn,
//           .secondary-btn {
//             width: 100%;
//             max-width: 280px;
//           }

//           .mern-card {
//             padding: 22px;
//           }

//           .mern-technologies {
//             grid-template-columns: 1fr;
//           }

//           .about-info,
//           .education-card,
//           .contact-info,
//           .contact-form {
//             padding: 25px;
//           }

//           .project-content {
//             padding: 25px;
//           }

//           .stack-box {
//             align-items: flex-start;
//           }

//           .project-content {
//             padding: 22px;
//           }

//           .project-heading {
//             gap: 12px;
//           }

//           .project-icon {
//             width: 50px;
//             height: 50px;
//             min-width: 50px;
//             font-size: 22px;
//           }

//           .project-content h3 {
//             font-size: 22px;
//           }

//           .project-category {
//             font-size: 10px;
//             letter-spacing: 1.5px;
//           }

//         .footer-links {
//     justify-content: center; /* Ensures centering stays active on mobile */
//     gap: 10px;
//   }

//         .footer-links button {
//     padding: 7px 9px;
//   }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Portfolio;

import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaCode,
  FaGraduationCap,
  FaCar,
  FaTasks,
  FaRobot,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    window.location.pathname.replace(/^\//, "") || "home",
  );
  const navRef = useRef(null);

  /* ================= PAGE PRELOADER ANIMATION ================= */
  useEffect(() => {
    // Prevent scrolling during loader animation
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "auto";
          }, 450); // slight buffer for a seamless exit transition
          return 100;
        }
        // Smooth progressive increment
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 90);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  /* ================= URL + SCROLL NAVIGATION ================= */
  useEffect(() => {
    const getSectionFromPath = () => {
      const path = window.location.pathname
        .replace(/^\//, "")
        .replace(/\/$/, "");
      return path || "home";
    };

    const scrollToCurrentSection = (behavior = "smooth") => {
      const sectionId = getSectionFromPath();
      const section = document.getElementById(sectionId);

      if (section) {
        setActiveSection(sectionId);
        requestAnimationFrame(() => {
          section.scrollIntoView({
            behavior,
            block: "start",
          });
        });
      } else {
        setActiveSection("home");
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);

      const currentPath = window.location.pathname;
      const desiredPath =
        currentSection === "home" ? "/" : `/${currentSection}`;

      if (currentPath !== desiredPath) {
        window.history.replaceState(
          { section: currentSection },
          "",
          desiredPath,
        );
      }
    };

    const handlePopState = () => {
      scrollToCurrentSection("smooth");
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("popstate", handlePopState);

    // If the page is opened directly at /skills, /projects, etc.
    scrollToCurrentSection("auto");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  /* ================= CLOSE MOBILE MENU ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  /* ================= NAVIGATE TO SECTION + UPDATE URL ================= */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    setMenuOpen(false);
    setActiveSection(id);

    if (window.location.pathname !== `/${id}`) {
      window.history.pushState({ section: id }, "", `/${id}`);
    }

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* ================= SKILLS ================= */
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "90%",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "80%",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "80%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "75%",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: "75%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "75%",
    },
    {
      name: "Artificial Intelligence",
      icon: <FaRobot />,
      level: "65%",
    },
  ];

  return (
    <>
      {/* ================= PRELOADER OVERLAY ================= */}
      <div className={`loader-wrapper ${!loading ? "loader-hidden" : ""}`}>
        <div className="loader-backdrop-glow"></div>
        <div className="loader-center-content">
          <div className="loader-ring-container">
            <div className="spinner-ring"></div>
            <div className="spinner-ring-inner"></div>
            <div className="loader-logo-core">
              A<span>.</span>
            </div>
          </div>

          <div className="loader-text-group">
            <h2 className="loader-title">
              A<span>wais</span>
            </h2>
            <p className="loader-subtitle">MERN STACK DEVELOPER</p>
          </div>

          <div className="loader-progress-track">
            <div
              className="loader-progress-fill"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>

          <div className="loader-progress-number">
            <span>{loadingProgress}%</span>
          </div>
        </div>
      </div>

      <div className="portfolio">
        {/* ================= NAVBAR ================= */}
        <nav className="navbar-custom" ref={navRef}>
          <div className="container nav-container">
            <div className="logo" onClick={() => scrollToSection("home")}>
              A<span>wais</span>
            </div>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <button
                className={activeSection === "home" ? "active" : ""}
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className={activeSection === "about" ? "active" : ""}
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
              <button
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
              <button
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </div>

            <button
              className="menu-button"
              aria-label="Toggle Navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* ================= HOME ================= */}
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-content">
              {/* LEFT SIDE */}
              <div className="hero-text">
                <div className="small-intro">
                  <span></span>
                  WELCOME TO MY PORTFOLIO
                </div>

                <h1>
                  Hi, I'm <span>Awais</span>
                </h1>

                <h2>
                  MERN Stack
                  <strong> Web Developer</strong>
                </h2>

                <p>
                  I am a passionate MERN Stack Web Developer and an ADP CS
                  student. I enjoy creating modern, responsive, and
                  user-friendly web applications.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-btn"
                    onClick={() => scrollToSection("projects")}
                  >
                    View My Work
                    <FaArrowRight />
                  </button>

                  <button
                    className="secondary-btn"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Me
                  </button>
                </div>

                <div className="social-links">
                  <a
                    href="https://github.com/awaisariffsdev-glitch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/awais-arif-webdev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  <a href="mailto:awais.arif.fs.dev@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* MERN CARD */}
              <div className="hero-card-wrapper">
                <div className="mern-card">
                  <div className="mern-card-top">
                    <div className="mern-main-icon">
                      <FaCode />
                    </div>

                    <div>
                      <span>FULL STACK</span>
                      <h3>MERN Stack</h3>
                    </div>
                  </div>

                  <p className="mern-description">
                    Building modern full-stack web applications with the MERN
                    technology stack.
                  </p>

                  <div className="mern-technologies">
                    <div className="mern-tech">
                      <div className="mern-icon mongodb-icon">
                        <SiMongodb />
                      </div>
                      <div>
                        <strong>MongoDB</strong>
                        <span>Database</span>
                      </div>
                    </div>

                    <div className="mern-tech">
                      <div className="mern-icon express-icon">
                        <SiExpress />
                      </div>
                      <div>
                        <strong>Express.js</strong>
                        <span>Backend</span>
                      </div>
                    </div>

                    <div className="mern-tech">
                      <div className="mern-icon react-icon">
                        <FaReact />
                      </div>
                      <div>
                        <strong>React</strong>
                        <span>Frontend</span>
                      </div>
                    </div>

                    <div className="mern-tech">
                      <div className="mern-icon node-icon">
                        <FaNodeJs />
                      </div>
                      <div>
                        <strong>Node.js</strong>
                        <span>Runtime</span>
                      </div>
                    </div>
                  </div>

                  <div className="mern-footer">
                    <span></span>
                    <p>MERN Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-heading">
              <span>ABOUT ME</span>
              <h2>Who I Am</h2>
              <p>
                A developer focused on building scalable, modern web
                applications.
              </p>
            </div>

            <div className="about-grid">
              {/* First Card */}
              <div className="about-info">
                <div className="about-icon">
                  <FaGraduationCap />
                </div>
                <h3>MERN Stack Developer</h3>
                <p>
                  I am Awais, a MERN Stack Web Developer currently studying ADP
                  CS in Lahore.
                </p>
                <p>
                  I have built both frontend and backend architectures and enjoy
                  developing complete web systems using modern frameworks and
                  libraries.
                </p>
                <p>
                  My focus is on writing clean, maintainable code and building
                  performant, responsive, and secure user experiences.
                </p>
              </div>

              {/* Second Card (Formatted identically to the first) */}
              <div className="education-card">
                <div className="about-icon">
                  <FaGraduationCap />
                </div>
                <h3>Education & Academics</h3>
                <p>
                  Pursuing an <strong>ADP CS</strong> (Associate Degree Program
                  in Computer Science) with a focus on core software
                  fundamentals.
                </p>
                <p>
                  Actively building full-stack engineering skills alongside
                  undergraduate coursework, bridging theoretical computer
                  science with practical web architecture.
                </p>
                <div className="education-stat">
                  <span>First 2 Semesters</span>
                  <strong>3.3 CGPA</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-heading">
              <span>MY SKILLS</span>
              <h2>Technologies I Use</h2>
              <p>
                Technologies and tools I work with for modern full-stack
                development.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-top">
                    <div className="skill-icon">{skill.icon}</div>
                    <h3>{skill.name}</h3>
                  </div>

                  <div className="progress-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: skill.level,
                        }}
                      ></div>
                    </div>
                    <span>{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="stack-box">
              <div className="stack-box-icon">
                <FaCode />
              </div>
              <div>
                <h3>MERN Stack Development</h3>
                <p>MongoDB • Express.js • React • Node.js</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-heading">
              <span>MY PROJECTS</span>
              <h2>Projects I've Built</h2>
              <p>Some of my web development projects.</p>
            </div>

            <div className="projects-grid">
              {/* TASKER */}
              <div className="project-card">
                <div className="project-content">
                  <div className="project-heading">
                    <div className="project-icon tasker-project-icon">
                      <FaTasks />
                    </div>
                    <div>
                      <span className="project-category">MERN STACK</span>
                      <h3>Tasker App</h3>
                    </div>
                  </div>
                  <p>
                    A task management web application designed to help users
                    organize, manage and track their daily tasks efficiently.
                  </p>

                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                  </div>

                  <button
                    className="project-btn"
                    onClick={() => scrollToSection("contact")}
                  >
                    Discuss Project
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* CYBER MOTORS */}
              <div className="project-card">
                <div className="project-content">
                  <div className="project-heading">
                    <div className="project-icon cyber-project-icon">
                      <FaCar />
                    </div>
                    <div>
                      <span className="project-category">CAR MARKETPLACE</span>
                      <h3>Cyber Motors</h3>
                    </div>
                  </div>
                  <p>
                    A car selling and purchasing platform where users can
                    explore cars and manage car listings through a modern web
                    interface.
                  </p>

                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                  </div>

                  <button
                    className="project-btn"
                    onClick={() => scrollToSection("contact")}
                  >
                    Discuss Project
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-heading">
              <span>CONTACT ME</span>
              <h2>Let's Work Together</h2>
              <p>Have a project or idea? Feel free to get in touch.</p>
            </div>

            <div className="contact-grid">
              {/* CONTACT INFORMATION */}
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>
                  I am always interested in learning, building new projects, and
                  collaborating on interesting web development ideas.
                </p>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span>Email</span>
                    <a href="mailto:awais.arif.fs.dev@gmail.com">
                      awais.arif.fs.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <span>Phone</span>
                    <a
                      href="https://wa.me/923207870705"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +92 320 7870705
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span>Location</span>
                    <p>Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="contact-socials">
                  <a
                    href="https://github.com/awaisariffsdev-glitch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/awais-arif-webdev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  <a href="mailto:awais.arif.fs.dev@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="contact-form">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    emailjs
                      .sendForm(
                        "service_ej6dl7s",
                        "template_j1han28",
                        e.currentTarget,
                        "tKoUFC7TYH7vtKDCM",
                      )
                      .then(
                        () => {
                          alert(
                            "Thank you! Your message has been sent successfully.",
                          );
                          e.target.reset();
                        },
                        (error) => {
                          console.error("EmailJS Error:", error);
                          alert(
                            "Sorry, your message could not be sent. Please try again.",
                          );
                        },
                      );
                  }}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  <div className="form-group message-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button type="submit" className="send-btn">
                    Send Message
                    <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-logo">
              A<span>wais</span>
            </div>

            <p className="text-light">MERN Stack Web Developer</p>

            <div className="footer-links">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("skills")}>Skills</button>
              <button onClick={() => scrollToSection("projects")}>
                Projects
              </button>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </div>

            <div className="footer-bottom">
              © 2026{" "}
              <a
                href="https://www.instagram.com/cyb3r.awais/"
                target="_blank"
                rel="noreferrer"
                className="footer-author"
              >
                Awais
              </a>
              . All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          background: #071014;
          color: #ffffff;
        }

        button {
          font-family: inherit;
        }

        /* ================= PRELOADER STYLES ================= */
        .loader-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #050c0f;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .loader-hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loader-backdrop-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(32, 201, 151, 0.18) 0%, transparent 70%);
          filter: blur(50px);
          animation: pulseGlow 2.5s infinite alternate ease-in-out;
        }

        .loader-center-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .loader-ring-container {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #20c997;
          border-right-color: #20c997;
          box-shadow: 0 0 20px rgba(32, 201, 151, 0.4);
          animation: spinFast 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }

        .spinner-ring-inner {
          position: absolute;
          width: 78%;
          height: 78%;
          border-radius: 50%;
          border: 2px dashed rgba(32, 201, 151, 0.4);
          animation: spinCounter 2.5s linear infinite;
        }

        .loader-logo-core {
          font-size: 38px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          animation: pulseCore 1.5s ease-in-out infinite alternate;
        }

        .loader-logo-core span {
          color: #20c997;
        }

        .loader-text-group {
          margin-bottom: 22px;
        }

        .loader-title {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #ffffff;
        }

        .loader-title span {
          color: #20c997;
        }

        .loader-subtitle {
          color: #6d8288;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-top: 5px;
        }

        .loader-progress-track {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .loader-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #20c997, #62e5bd);
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(32, 201, 151, 0.7);
          transition: width 0.2s ease;
        }

        .loader-progress-number {
          font-size: 13px;
          font-weight: 700;
          color: #20c997;
          letter-spacing: 1px;
        }

        @keyframes spinFast {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spinCounter {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes pulseGlow {
          0% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes pulseCore {
          0% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1.05);
          }
        }

        /* ================= PORTFOLIO BASE ================= */
        .portfolio {
          width: 100%;
          overflow: hidden;
          background: #071014;
        }

        .container {
          width: 90%;
          max-width: 1180px;
          margin: auto;
        }

        /* ================= NAVBAR ================= */
        .navbar-custom {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          background: rgba(7, 16, 20, 0.93);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .nav-container {
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 30px;
          font-weight: 800;
          color: #ffffff;
          cursor: pointer;
          letter-spacing: -1px;
        }

        .logo span {
          color: #20c997;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-links button {
          border: none;
          background: transparent;
          color: #aab8bd;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .nav-links button:hover,
        .nav-links button.active {
          color: #20c997;
          background: rgba(32, 201, 151, 0.08);
        }

        .menu-button {
          display: none;
          border: none;
          background: transparent;
          color: white;
          font-size: 25px;
          cursor: pointer;
        }

        /* ================= HERO ================= */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(32, 201, 151, 0.12),
              transparent 30%
            ),
            #071014;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: center;
        }

        .small-intro {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #20c997;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .small-intro span {
          width: 35px;
          height: 2px;
          background: #20c997;
        }

        .hero-text h1 {
          font-size: clamp(48px, 6vw, 76px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -3px;
        }

        .hero-text h1 span {
          color: #20c997;
        }

        .hero-text h2 {
          margin-top: 15px;
          font-size: clamp(25px, 3vw, 38px);
          color: #dce6e8;
          font-weight: 500;
        }

        .hero-text h2 strong {
          color: #20c997;
          font-weight: 700;
        }

        .hero-text p {
          max-width: 650px;
          margin-top: 25px;
          color: #91a3a9;
          line-height: 1.8;
          font-size: 16px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 32px;
        }

        .primary-btn,
        .secondary-btn {
          height: 52px;
          min-width: 155px;
          padding: 0 24px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .primary-btn {
          border: 1px solid #20c997;
          background: #20c997;
          color: #06110e;
        }

        .primary-btn:hover {
          background: transparent;
          color: #20c997;
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(32, 201, 151, 0.15);
        }

        .secondary-btn {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: white;
        }

        .secondary-btn:hover {
          border-color: #20c997;
          color: #20c997;
          transform: translateY(-4px);
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 30px;
        }

        .social-links a {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          color: #9bacb1;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .social-links a:hover {
          color: #20c997;
          border-color: #20c997;
          transform: translateY(-5px);
          background: rgba(32, 201, 151, 0.08);
        }

        /* ================= MERN HERO CARD ================= */
        .hero-card-wrapper {
          display: flex;
          justify-content: center;
        }

        .mern-card {
          width: 390px;
          padding: 30px;
          border-radius: 24px;
          background: linear-gradient(145deg, #10272b, #09161a);
          border: 1px solid rgba(32, 201, 151, 0.25);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
          transition: 0.4s ease;
        }

        .mern-card:hover {
          transform: translateY(-10px);
          border-color: rgba(32, 201, 151, 0.65);
          box-shadow: 0 35px 90px rgba(32, 201, 151, 0.12);
        }

        .mern-card-top {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .mern-main-icon {
          width: 65px;
          height: 65px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(32, 201, 151, 0.1);
          border: 1px solid rgba(32, 201, 151, 0.25);
          color: #20c997;
          font-size: 27px;
        }

        .mern-card-top span {
          color: #71878c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .mern-card-top h3 {
          font-size: 30px;
          margin-top: 3px;
          color: #ffffff;
        }

        .mern-description {
          color: #82969b;
          font-size: 14px;
          line-height: 1.7;
          margin: 22px 0;
        }

        .mern-technologies {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .mern-tech {
          min-height: 90px;
          padding: 15px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: 0.3s ease;
        }

        .mern-tech:hover {
          transform: translateY(-5px);
          border-color: rgba(32, 201, 151, 0.35);
          background: rgba(32, 201, 151, 0.05);
        }

        .mern-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 23px;
        }

        .mongodb-icon {
          color: #47a248;
          background: rgba(71, 162, 72, 0.1);
        }

        .express-icon {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .react-icon {
          color: #61dafb;
          background: rgba(97, 218, 251, 0.1);
        }

        .node-icon {
          color: #68a063;
          background: rgba(104, 160, 99, 0.1);
        }

        .mern-tech strong {
          display: block;
          font-size: 13px;
          color: #e4edef;
        }

        .mern-tech span {
          display: block;
          color: #667c82;
          font-size: 11px;
          margin-top: 4px;
        }

        .mern-footer {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .mern-footer > span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #20c997;
          box-shadow: 0 0 10px rgba(32, 201, 151, 0.7);
        }

        .mern-footer p {
          color: #7d9297;
          font-size: 12px;
          margin: 0;
        }

        /* ================= ABOUT SECTIONS ================= */
        section {
          scroll-margin-top: 80px;
        }

        .about-section,
        .skills-section,
        .projects-section,
        .contact-section {
          padding: 110px 0;
        }

        .about-section,
        .projects-section {
          background: #09161a;
        }

        .section-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 60px;
        }

        .section-heading span {
          color: #20c997;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .section-heading h2 {
          font-size: clamp(34px, 4vw, 48px);
          margin-top: 10px;
          letter-spacing: -1px;
        }

        .section-heading p {
          color: #83969b;
          margin-top: 14px;
          line-height: 1.7;
        }

        /* ================= ABOUT ================= */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }

        .about-info,
        .education-card {
          padding: 38px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: #0c1b20;
          transition: 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .about-info:hover,
        .education-card:hover {
          transform: translateY(-7px);
          border-color: rgba(32, 201, 151, 0.35);
        }

        .about-icon,
        .education-icon {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: rgba(32, 201, 151, 0.1);
          color: #20c997;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          margin-bottom: 25px;
        }

        .about-info h3,
        .education-card h3 {
          font-size: 25px;
          margin-bottom: 18px;
          color: #ffffff;
        }

        .about-info p,
        .education-card p {
          color: #91a3a9;
          line-height: 1.8;
          margin-bottom: 14px;
        }

        .education-item {
          display: flex;
          flex-direction: column;
        }

        .education-item h4 {
          font-size: 20px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .education-item p {
          margin-bottom: 6px;
        }

        .education-item span {
          color: #667c82;
          font-size: 13px;
          display: block;
        }

        .cgpa-box {
          margin-top: auto;
          padding: 16px 20px;
          border-radius: 12px;
          background: rgba(32, 201, 151, 0.05);
          border: 1px solid rgba(32, 201, 151, 0.12);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cgpa-box span {
          display: block;
          color: #83969b;
          font-size: 13px;
        }

        .cgpa-box strong {
          display: block;
          font-size: 22px;
          color: #20c997;
          margin-top: 3px;
        }

        .cgpa-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #20c997;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #20c997;
          font-weight: 800;
          font-size: 16px;
        }

        /* ================= SKILLS ================= */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .skill-card {
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 15px;
          background: #0b191e;
          transition: 0.35s ease;
        }

        .skill-card:hover {
          transform: translateY(-7px);
          border-color: rgba(32, 201, 151, 0.4);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .skill-top {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          border-radius: 11px;
          background: rgba(32, 201, 151, 0.08);
          color: #20c997;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          transition: 0.3s ease;
        }

        .skill-top h3 {
          font-size: 17px;
        }

        .skill-card:nth-child(1) .skill-icon {
          color: #e34f26;
          background: rgba(227, 79, 38, 0.1);
        }

        .skill-card:nth-child(2) .skill-icon {
          color: #1572b6;
          background: rgba(21, 114, 182, 0.1);
        }

        .skill-card:nth-child(3) .skill-icon {
          color: #f7df1e;
          background: rgba(247, 223, 30, 0.1);
        }

        .skill-card:nth-child(4) .skill-icon {
          color: #61dafb;
          background: rgba(97, 218, 251, 0.1);
        }

        .skill-card:nth-child(5) .skill-icon {
          color: #68a063;
          background: rgba(104, 160, 99, 0.1);
        }

        .skill-card:nth-child(6) .skill-icon {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .skill-card:nth-child(7) .skill-icon {
          color: #47a248;
          background: rgba(71, 162, 72, 0.1);
        }

        .skill-card:nth-child(8) .skill-icon {
          color: #a78bfa;
          background: rgba(167, 139, 250, 0.1);
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: #16272c;
          border-radius: 20px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #20c997;
          border-radius: 20px;
        }

        .progress-container span {
          color: #20c997;
          font-size: 13px;
          min-width: 35px;
        }

        .stack-box {
          margin-top: 30px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 18px;
          border: 1px solid rgba(32, 201, 151, 0.2);
          background: rgba(32, 201, 151, 0.04);
          border-radius: 15px;
          transition: 0.3s ease;
        }

        .stack-box:hover {
          transform: translateY(-5px);
          border-color: rgba(32, 201, 151, 0.4);
        }

        .stack-box-icon {
          width: 55px;
          height: 55px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #20c997;
          color: #06110e;
          font-size: 23px;
        }

        .stack-box h3 {
          font-size: 20px;
        }

        .stack-box p {
          color: #82969b;
          margin-top: 5px;
        }

        /* ================= PROJECTS ================= */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .project-card {
          background: #0c1b20;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          overflow: hidden;
          transition: 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(32, 201, 151, 0.35);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }

        .project-content {
          padding: 30px;
        }

        .project-heading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .project-icon {
          width: 58px;
          height: 58px;
          min-width: 58px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          transition: 0.35s ease;
        }

        .tasker-project-icon {
          color: #20c997;
          background: rgba(32, 201, 151, 0.1);
          border: 1px solid rgba(32, 201, 151, 0.25);
        }

        .cyber-project-icon {
          color: #61dafb;
          background: rgba(97, 218, 251, 0.1);
          border: 1px solid rgba(97, 218, 251, 0.25);
        }

        .project-card:hover .project-icon {
          transform: scale(1.08) rotate(-4deg);
        }

        .project-category {
          display: block;
          margin-bottom: 5px;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 700;
          color: #6f898f;
        }

        .project-content h3 {
          font-size: 26px;
        }

        .project-content p {
          color: #87999e;
          line-height: 1.75;
          margin: 15px 0 20px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 25px;
        }

        .project-tech span {
          padding: 6px 11px;
          border-radius: 20px;
          background: rgba(32, 201, 151, 0.08);
          color: #20c997;
          font-size: 12px;
        }

        .project-btn {
          border: none;
          background: transparent;
          color: #20c997;
          display: flex;
          align-items: center;
          gap: 9px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .project-btn:hover {
          gap: 15px;
          color: #62e5bd;
        }

        /* ================= CONTACT ================= */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }

        .contact-info,
        .contact-form {
          background: #0c1b20;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          padding: 35px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .contact-info h3 {
          font-size: 27px;
        }

        .contact-info > p {
          color: #87999e;
          line-height: 1.8;
          margin: 15px 0 30px;
        }

        .contact-item {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-bottom: 22px;
        }

        .contact-icon {
          min-width: 45px;
          height: 45px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(32, 201, 151, 0.09);
          color: #20c997;
        }

        .contact-item span {
          display: block;
          font-size: 12px;
          color: #687d83;
          margin-bottom: 4px;
        }

        .contact-item p,
        .contact-item a {
          color: #d3dfe1;
          text-decoration: none;
          margin: 0;
          transition: 0.3s ease;
        }

        .contact-item a:hover {
          color: #20c997;
        }

        .contact-socials {
          display: flex;
          gap: 10px;
          margin-top: auto;
          padding-top: 25px;
        }

        .contact-socials a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #84969b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: 0.3s ease;
        }

        .contact-socials a:hover {
          color: #20c997;
          border-color: #20c997;
          transform: translateY(-4px);
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
          height: 100%;
          flex: 1;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group.message-group {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .form-group label {
          display: block;
          color: #d7e1e3;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: #081419;
          color: white;
          border-radius: 9px;
          padding: 14px;
          outline: none;
          transition: 0.3s ease;
          font-family: inherit;
        }

        .form-group input {
          height: 50px;
        }

        .form-group textarea {
          flex: 1;
          min-height: 120px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #20c997;
          box-shadow: 0 0 0 3px rgba(32, 201, 151, 0.08);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #4f646a;
        }

        .send-btn {
          height: 52px;
          padding: 0 25px;
          border-radius: 8px;
          border: 1px solid white;
          background: #20c997;
          color: #06110e;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.3s ease;
          margin-top: auto;
        }

        .send-btn:hover {
          background: white;
          color: black;
          transform: translateY(-3px);
        }

        /* ================= FOOTER ================= */
        .footer {
          padding: 45px 0 25px;
          background: #050c0f;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-content {
          text-align: center;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 800;
        }

        .footer-logo span {
          color: #20c997;
        }

        .footer-content > p {
          color: #667a80;
          margin-top: 8px;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          width: 100%;
          max-width: 100%;
          margin: 25px auto;
          padding: 2px 4px;
        }

        .footer-links button {
          flex: 0 0 auto;
          white-space: nowrap;
          border: none;
          background-color: #050c0f;
          color: white;
          padding: 7px 12px;
          font-size: 13px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .footer-links button:hover {
          color: #20c997;
        }

        .footer-author {
          color: #4f6368;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .footer-author:hover {
          color: #20c997;
        }

        .footer-bottom {
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          color: #4f6368;
          font-size: 13px;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 991px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .small-intro {
            justify-content: center;
          }

          .hero-text p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons,
          .social-links {
            justify-content: center;
          }

          .hero-card-wrapper {
            margin-top: 25px;
          }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 650px;
            margin: auto;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            height: 70px;
          }

          .menu-button {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: #09161a;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: none;
            flex-direction: column;
            align-items: stretch;
            padding: 15px;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links button {
            width: 100%;
            text-align: left;
            padding: 13px 15px;
          }

          .hero-section {
            padding-top: 120px;
          }

          .mern-card {
            width: 100%;
            max-width: 390px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        @media (max-width: 576px) {
          .container {
            width: 92%;
          }

          .about-section,
          .skills-section,
          .projects-section,
          .contact-section {
            padding: 80px 0;
          }

          .hero-text h1 {
            font-size: 48px;
          }

          .hero-text h2 {
            font-size: 25px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            max-width: 280px;
          }

          .mern-card {
            padding: 22px;
          }

          .mern-technologies {
            grid-template-columns: 1fr;
          }

          .about-info,
          .education-card,
          .contact-info,
          .contact-form {
            padding: 25px;
          }

          .project-content {
            padding: 22px;
          }

          .stack-box {
            align-items: flex-start;
          }

          .project-heading {
            gap: 12px;
          }

          .project-icon {
            width: 50px;
            height: 50px;
            min-width: 50px;
            font-size: 22px;
          }

          .project-content h3 {
            font-size: 22px;
          }

          .project-category {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .footer-links {
            justify-content: center;
            gap: 10px;
          }

          .footer-links button {
            padding: 7px 9px;
          }
        }
`}</style>
    </>
  );
};

export default Portfolio;
