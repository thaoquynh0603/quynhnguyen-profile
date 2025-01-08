// eslint-disable-next-line
import logo from './logo.svg';
import './components/style/App.css';
import About from './components/about';
import Nabbar from './components/nabbar';
import Education from './components/education';
import Skills from './components/skills';
import Experience from './components/experience';
import Project from './components/project';
import Qualification from './components/qualification';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Nabbar />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Education />
      <Qualification />
      <Contact />
      
    </div>
  );
}

export default App;
