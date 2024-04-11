import Card from "./Card";
const MovieContainer = ({ title, movies }) => {
  return (
    <div className="px-8 my-8">
      <div className="font-semibold text-xl mb-3">
        <h1>{title} Movies</h1>
      </div>
      <div className="flex gap-5">
        {movies?.map((item, idx) => (
          <Card key={idx} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
