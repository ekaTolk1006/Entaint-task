import React from "react";
import "./MovieView.scss";
import { useParams } from "react-router";
import { useGetMovieByIdQuery } from "../../store/queries";
import moment from "moment";
import { OVERVIEW_TEXT, TIME_FORMAT, YEAR_FORMAT } from "./constants";

interface I_MovieView {}

const MovieView: React.FC<I_MovieView> = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMovieByIdQuery(Number(id));
  const runtime: string = moment(data?.runtime).format(TIME_FORMAT);

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
          <h2 className="movie__details-title">
            {data?.title}
            <span>{`(${moment(data?.release_date).format(YEAR_FORMAT)})`}</span>
          </h2>
          <div className="movie__details-facts">
            <span>{data?.release_date}</span>
            <span className="movie__details-genres">
              {data?.genres?.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </span>
            <span>{runtime}</span>
          </div>

          <div className="movie__details-overview">
            <h3>{OVERVIEW_TEXT}</h3>
            <p>{data?.overview}</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
