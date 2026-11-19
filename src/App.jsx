import Header from "./sections/Header";
import Presentation from "./sections/Presentation";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="min-h-screen text-inter bg-bg text-white max-md:px-4 max-md:py-2">
      <Header />
      <Presentation />
      <Projects />
    </div>
  )
}

export default App;