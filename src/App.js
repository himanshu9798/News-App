import logo from "./logo.svg";
import "./App.css";
import video from "./images/nes.mp4";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <div className="background-video">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="header">
          <marquee>
            <h1 className="h1">Breaking News</h1>
          </marquee>
        </div>
           <Link to="/apple">
        <div className="first">
          <h1>
            <b>1.</b>
            <i>
              Apple's Latest iPhone Update Brings Groundbreaking AI Features
            </i>
          </h1>
        </div>
        </Link>
        <Link to="/Business">
        <div className="second">
          <h1>
            <b>2.</b>
            <i>
            Top business headlines
            </i>
          </h1>
        </div>
        </Link>
        <Link to="/Tech">
        <div className="first">
          <h1>
            <b>3.</b>
            <i>
            Top headlines from TechCrunch
            </i>
          </h1>
        </div>
        </Link>
        <Link to="/latest">
        <div className="second">
          <h1>
            <b>4.</b>
            <i>
            Latest Insights from The Wall Street Journal: Top Stories from the Last 6 Months
            </i>
          </h1>
        </div>
        </Link>
        <Link to="/tesala">
        <div className="first">
          <h1>
            <b>5.</b>
            <i>
            Tesla's Turning Point: From Affordable EVs to Autonomous Revolution
            </i>
          </h1>
        </div>
        </Link>
      </div>
    </>
  );
}

export default App;
