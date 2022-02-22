import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detailp from "../components/Detailp";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  //   console.log(x);

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail Page</h1>

      <div>
        {loading ? (
          <h1>"Loading..."</h1>
        ) : (
          <div>
            {/* <h3>title:{movies.title}</h3>
            <img src={movies.medium_cover_image} />
            <p>Summary:{movies.description_full}</p>
            <ul>
              {movies.genres.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul> */}
            <Detailp
              key={movies.id}
              id={movies.id}
              coverImg={movies.medium_cover_image}
              title={movies.title}
              summary={movies.description_full}
              genres={movies.genres}
            />
            {/* {movies.map((x) => (
              <Detailp
                key={x.id}
                id={x.id}
                coverImg={x.medium_cover_image}
                title={x.title}
                summary={x.decription_full}
                genres={x.genres}
              />
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
}
export default Detail;
