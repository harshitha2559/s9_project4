import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const course = location.state?.course || localStorage.getItem("course");

  return (
    <div className="page">
      <h1>This is the Home page</h1>
      <p>I'm belongs to {course}</p>
    </div>
  );
}

export default Home;