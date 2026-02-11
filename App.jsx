// App.jsx
import React from "react";
import "./App.css"; // Optional, or use Tailwind

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="bg-blue-900 text-white text-center p-10">
    <h1 className="text-4xl font-bold">
      Bashar Khaled{" "}
      <span role="img" aria-label="laptop">
        💻
      </span>
    </h1>
    <p className="text-lg">Frontend Developer | UI/UX Designer</p>
  </header>
);

const About = () => (
  <section id="about" className="container mx-auto p-5">
    <img
      src="Picture.png"
      alt="Profile"
      className="mx-auto rounded-full w-40 border-4 border-blue-900"
    />
    <h2 className="text-blue-900 text-3xl my-4 text-center">About Me</h2>
    <p className="text-center mb-4">
      Aspiring Front-End Developer with a strong foundation in web
      development...
    </p>
    <hr />
    {/* Continue formatting Education, Skills, etc. as above */}
  </section>
);

const Projects = () => (
  <section id="projects" className="container mx-auto p-5">
    <h2 className="text-blue-900 text-3xl mb-4">Projects</h2>
    <div className="bg-blue-100 p-4 border-l-4 border-blue-900 mb-4">
      <h3 className="text-xl font-semibold">Weather App</h3>
      <p>A simple weather app using OpenWeatherMap API and JavaScript.</p>
      <a href="#" className="text-blue-900 underline">
        View Project
      </a>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container mx-auto p-5">
    <h2 className="text-blue-900 text-3xl mb-4">Contact</h2>
    <p>
      Email:{" "}
      <a
        href="mailto:b.khalsadeq@gmail.com"
        className="text-blue-700 underline"
      >
        b.khalsadeq@gmail.com
      </a>
    </p>
  </section>
);

const Footer = () => (
  <footer className="text-center bg-blue-900 text-white p-5">
    &copy; 2024 Bashar Khaled.
  </footer>
);
