import React from "react";
import Genres from "../../../mocks/genres.json";
import Movies from "../../../mocks/movies.json";
import MoviesSection from "@/components/movies-section";
export default function CategoriesPage({ params }) {
  console.log(params.id);

  const matchedGenre = Genres.genres.find(
    (gen) => gen.id.toString() === params.id
  );

  if (matchedGenre) {
    console.log(matchedGenre.name);
  } else {
    console.log("hata");
  }

  return (
    <div>
      <MoviesSection
        title={matchedGenre.name}
        movies={Movies.results.slice(0, 7)}
      />
      {/* {matchedGenre.name}
      <div>
        {Movies.results.map((movi) => (
          <div key={movi.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original${movi.poster_path}`}
                alt=""
              />
              {movi.title}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
