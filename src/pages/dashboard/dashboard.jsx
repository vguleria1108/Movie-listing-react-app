import React, { useState, useEffect } from "react";
import Layout from "../../components/LayoutComps/Layout";

import "./dashboard.css";
import MovieCard from "../../components/cardComp/movieCard";
import { showNotification } from "../../utils/common.util";
import axios from "axios";
import { Pagination } from "antd";
export default function Dashboard(props) {
  const [movieResData, setMovieResDate] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [movieData, setMovieDate] = useState([]);

  useEffect(() => {
    //was not able to find api that only return fixed amount of results at a time
    let apiUrl = "https://imdb-api.com/en/API/Top250Movies/k_9mb0z872";
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data) {
          let movieList = res.data.items;
          setMovieResDate(movieList);
        } else showNotification("error", "Unable to fetch movies");
      })
      .catch((e) => {
        console.log(e);
        showNotification("error", "Unable to fetch movies");
      });
  }, []);

  useEffect(() => {
    //limiting data to 20 at a time to demonstrate pagination
    let movieData = movieResData.slice(
      currentPage * 20,
      (currentPage + 1) * 20
    );
    setMovieDate(movieData);
  }, [movieResData, currentPage]);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Layout>
        <div className="movieListWrapper">
          <div className="movieListing">
            {movieData.length > 0
              ? movieData.map((movie) => (
                  <MovieCard
                    image={movie?.image}
                    title={movie?.title}
                    id={movie?.id}
                  />
                ))
              : ""}
          </div>
          <Pagination
            defaultCurrent={currentPage + 1}
            total={movieResData.length}
            onChange={(e) => {
              setCurrentPage(e - 1);
              scrollToTop();
            }}
            showSizeChanger={false}
            pageSize={20}
          />
        </div>
      </Layout>
    </>
  );
}
