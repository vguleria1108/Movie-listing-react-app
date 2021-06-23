import React from "react";

const MovieCard = (props) => {
  return (
    <>
      <div className="movieCardWrapper">
        <img
          alt={props.title}
          src={props.image}
          oading="lazy"
          className="movieImg"
        />
        <h3 className={"movieName"}>{props.title} </h3>
        <a
          className="imdbUrl"
          target="_blank"
          href={"https://www.imdb.com/title/" + props.id}
          rel="noreferrer"
        >
          View on Imdb
        </a>
      </div>
    </>
  );
};

export default MovieCard;
