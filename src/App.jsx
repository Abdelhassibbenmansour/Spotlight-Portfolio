import Header from "./sections/Header";
import Presentation from "./sections/Presentation";
import Projects from "./sections/Projects";
import Reviews from "./sections/Reviews";
import Experiences from "./sections/Experiences";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen text-inter bg-bg text-white max-md:px-4 max-md:py-2">
      <Header />
      <Presentation />
      <Projects />
      <Reviews />
      <Experiences />
      <Contact />
    </div>
  )
}

export default App;