import "./App.scss";
import Intro from "./componets/Intro/Intro";
import Navbar from "./componets/Navbar/navbar";
import Slides from "./componets/slides/Slides";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Slides />
    </div>
  );
}

export default App;
