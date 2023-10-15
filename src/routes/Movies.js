import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
            }
          }
        `,
      })
      .then((result) => setMovies(result.data.allMovies));
  }, [client]);
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie.title}</li>
      ))}
    </ul>
  );
}
export default Movies;
