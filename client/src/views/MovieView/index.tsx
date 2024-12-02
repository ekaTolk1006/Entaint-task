import React from "react";
import "./MovieView.scss";
import { useParams } from "react-router";
import { useGetMovieByIdQuery } from "../../store/queries";
import moment from "moment";

interface I_MovieView {}

const MovieView: React.FC<I_MovieView> = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMovieByIdQuery(Number(id));
  const runtime: string = moment(data?.runtime).format("h[h] m[m]");

  return (
    <div className="movieView">
      <div
        className="movie"
        style={{
          backgroundImage: `url(${data?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={data?.poster_path} />
        <div className="movie__details">
          <h2>
            {data?.title}
            <span>{moment(data?.release_date).format("YYYY")}</span>
          </h2>
          <div className="movie__details-facts">
            <span>{data?.release_date}</span>
            <span className="movie__details-facts-genres">
              {data?.genres?.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </span>
            <span>{runtime}</span>
          </div>

          <div className="movieView__details-overview">
            <h3>Overview</h3>
            <p>{data?.overview}</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
