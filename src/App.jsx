import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieContainer from "./components/MovieContainer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <MovieContainer title="Featured" />
      <MovieContainer title="Popular" />
    </div>
  );
};

export default App;
