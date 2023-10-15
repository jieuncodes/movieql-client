import { gql, useQuery } from "@apollo/client";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
  }
`;

function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul>
      {data.allMovies.map((movie, index) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
export default Movies;
