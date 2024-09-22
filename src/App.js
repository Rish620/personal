import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skill from "./components/skills/skill";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skill/>
       <Work />
       <Contact />
       <Footer />
    </div>
  );
}
export default App;
