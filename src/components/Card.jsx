const Card = ({ movie }) => {
  const dateFormatter = (release_date) => {
    let [yy, mm, dd] = release_date.split("-");
    return [dd, mm, yy].join("-");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[0]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Adventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comedy`);
          break;
        case 80:
          genreArray.push(`Crime`);
          break;
        case 99:
          genreArray.push(`Documentary`);
          break;
        case 18:
          genreArray.push(`Drama`);
          break;
        case 10751:
          genreArray.push(`Family`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`History`);
          break;
        case 27:
          genreArray.push(`History`);
          break;
        case 10402:
          genreArray.push(`Music`);
          break;
        case 9648:
          genreArray.push(`Mystery`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`TV Movie`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`War`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre, i) => <li key={i}>{genre}</li>);
  };

  const addMovieToLikedList = () => {
    let storedMovies = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!storedMovies.includes(movie.id.toString())) {
      storedMovies.push(movie.id);
      window.localStorage.movies = storedMovies;
    }
  };

  const deleteMovieFromLikedList = () => {
    let storedMovies = window.localStorage.movies.split(",");
    // eslint-disable-next-line eqeqeq
    let newStoredMovies = storedMovies.filter((id) => id != movie.id);
    window.localStorage.movies = newStoredMovies;
    window.location.reload();
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "./img/poster.jpg"
        }
        alt={movie.original_title}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Release date: {dateFormatter(movie.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {movie.vote_average}/10<span> ⭐</span>
      </h4>
      <ul>
        {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}
      </ul>
      {movie.overview ? <h3>Overview</h3> : ""}
      <p>{movie.overview}</p>

      {movie.genre_ids ? (
        <div className="btn" onClick={() => addMovieToLikedList()}>
          Add to liked movies
        </div>
      ) : (
        <div className="btn" onClick={() => deleteMovieFromLikedList()}>
          Delete from List
        </div>
      )}
    </div>
  );
};

export default Card;
