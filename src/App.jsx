import Header from "./sections/Header";
import Presentation from "./sections/Presentation";

const App = () => {
  return (
    <div className="min-h-screen text-inter bg-bg text-white max-md:px-4 max-md:py-2">
      <Header />
      <Presentation />
    </div>
  )
}

export default App;