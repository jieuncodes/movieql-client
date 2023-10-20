import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

function Movie() {
  const { movieId } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId,
    },
  });
  if (loading) {
    return <h1>Fetching Movie...</h1>;
  }
  if (error) {
    return <h1>Could not fetch Movie:{error.message}</h1>;
  }
  return <div>{data.movie.title}</div>;
}
export default Movie;
