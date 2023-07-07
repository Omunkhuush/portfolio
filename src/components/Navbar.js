import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./styles/Navbar.css";

const NavBar = (props) => {
  const { active } = props;
  return (
    <Router>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-back">
            <ul className="nav-list">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === "articles" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/articles">Articles</Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}
function Projects() {
  return <h1>Projets</h1>;
}
function Articles() {
  return <h1>Articles</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export default NavBar;
