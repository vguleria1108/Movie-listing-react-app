import React from "react";
import { useHistory } from "react-router-dom";

const MovieCard = (props) => {
  const history = useHistory();

  return (
    <>
      <div className="movieCardWrapper">
        <img src={props.image} oading="lazy" className="movieImg" />
        <h3 className={"movieName"}>{props.title} </h3>
        <a
          className="imdbUrl"
          target="_blank"
          href={"https://www.imdb.com/title/" + props.id}
        >
          View on Imdb
        </a>
      </div>

      <style jsx>{`
        .movieCardWrapper {
          display: flex;
          flex-direction: column;
          border: 0px solid;
          box-shadow: rgba(200, 200, 200, 0.63) 1px 1px 4px 1px;
          height: 330px;
          width: 250px;
          border-top-color: #0075ff;
          border-top-width: 4px;
          border-radius: 8px;
          position: relative;
          background: #ffffff;
          z-index: 2;
          padding: 10px;
          margin: 10px;
        }
        .movieCardWrapper .movieImg {
          height: 230px;
        }
        .movieCardWrapper .imdbUrl {
          text-align: center;
          font-size: 15px;
        }
        }
      `}</style>
    </>
  );
};

export default MovieCard;
