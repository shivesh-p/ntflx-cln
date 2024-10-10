import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <div className="px-12 mt-4 space-y-8">
      <div className="">
        <p className="text-black text-2xl font-semibold mb-4">Popular Shows</p>
        <div className="grid grid-col gap-2">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
