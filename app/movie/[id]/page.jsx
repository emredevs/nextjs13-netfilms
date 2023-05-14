import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "../../../container/movie";
import Movies from "../../../mocks/movies.json";
export default function MoviePage({ params }) {
  // console.log(params);
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if (!movieDetail) {
    notFound();
  }
  console.log();
  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
}
