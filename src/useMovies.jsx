import { useState, useEffect } from "react";
export function useMovies (query) {
	  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
const KEY = "f84fc31d";

	 useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong when fetching the movies");
          const data = await res.json();
          if (data.Response === "False")
            throw new Error("Error fetching movies");
          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          if (error.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
          setError("");
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      // handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
		
    [query, error]
  );
			return {movies, isLoading, error}


}