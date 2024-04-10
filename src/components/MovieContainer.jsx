import Card from "./Card";
const MovieContainer = ({ title }) => {
  return (
    <div className="px-8 my-8">
      <div className="font-semibold text-xl mb-3">
        <h1>{title} Movies</h1>
      </div>
      <div className="flex gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MovieContainer;
