import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieContainer from "./components/MovieContainer";
import Footer from "./components/Footer";
import { PiUpload } from "react-icons/pi";

const URL = "https://api.themoviedb.org/3/discover/movie";
const APIKEY = "4d6828685b314971b2603249bffcbe84";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDY4Mjg2ODViMzE0OTcxYjI2MDMyNDliZmZjYmU4NCIsInN1YiI6IjY2MTU3YTBhYTZhNGMxMDE4NmJmMTM0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z81OCtijgKYuMmvxfMxOfafFW4q-PQ7Kj7HyHc-jr14";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const sortedMovies = [...movies]
      ?.sort((a, b) => b.popularity - a.popularity)
      .slice(0, 5);

    setPopular(sortedMovies);

    const sortFeatured = [...movies]
      ?.sort((a, b) => b.vote_average - a.vote_average)
      .slice(0, 5);
    setFeatured(sortFeatured);
  }, [movies]);

  useEffect(() => {
    fetch(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data?.results));
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero movie={popular?.[0]} />
      <MovieContainer title="Featured" movies={featured} />
      <MovieContainer title="Popular" movies={popular} />
      <Footer />
    </div>
  );
};

export default App;
