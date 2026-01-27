import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const course = location.state?.course || localStorage.getItem("course");

  return (
    <div className="page">
      <h1>This is the About page</h1>
      <p>I'm belongs to {course}</p>
    </div>
  );
}

export default About;