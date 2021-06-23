import React, { useState, useEffect } from "react";
import Layout from "../../components/LayoutComps/Layout";

import "./dashboard.css";
import MovieCard from "../../components/cardComp/movieCard";
import {
  showNotification,
  debouncer,
  check_login,
  scrollToTop,
} from "../../utils/common.util";
import axios from "axios";
import { Pagination, Empty, Spin } from "antd";
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {
  const history = useHistory();
  const [movieResData, setMovieResDate] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [movieData, setMovieDate] = useState([]);
  const [isSpining, setSpinning] = useState(true);

  useEffect(() => {
    setSpinning(true);
    //check if user is logged in
    if (!check_login()) {
      showNotification("info", "Please login to view dashboard");
      history.push("/login");
    }
    getMoviesData();
  }, []);

  useEffect(() => {
    //limiting data to 20 at a time to demonstrate pagination
    let movieData = movieResData.slice(
      currentPage * 20,
      (currentPage + 1) * 20
    );

    setMovieDate(movieData);
    setSpinning(false);
  }, [movieResData, currentPage]);

  //was not able to find api that only return fixed amount of results at a time
  const getMoviesData = (val = "") => {
    let apiKey = "k_8dw82pq1";
    setSpinning(true);
    let mode = "trending";
    setCurrentPage(0);
    let apiUrl = "https://imdb-api.com/en/API/Top250Movies/" + apiKey;

    if (val !== "") {
      mode = "search";
      apiUrl = "https://imdb-api.com/en/API/SearchMovie/" + apiKey + "/" + val;
    }
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data) {
          console.log("ddd", mode);
          let movieList = mode === "search" ? res.data.results : res.data.items;
          setMovieResDate(movieList);
        } else showNotification("error", "Unable to fetch movies");
      })
      .catch((e) => {
        console.log(e);
        showNotification("error", "Unable to fetch movies");
      });
  };

  const handleSearch = (e) => {
    //debouncing api request
    debouncer(function () {
      getMoviesData(e.target.value);
    }, 200)();
  };

  return (
    <>
      <Layout>
        <div className="movieListWrapper">
          <input
            placeholder="Search Movies"
            className="searchBox"
            onChange={handleSearch}
          />
          <Spin tip="Fetching Movies..." spinning={isSpining}>
            {console.log(movieData)}
            {movieData.length > 0 ? (
              <>
                <div className="movieListing">
                  {movieData.map((movie) => (
                    <MovieCard
                      image={movie?.image}
                      title={movie?.title}
                      id={movie?.id}
                    />
                  ))}
                </div>
                <Pagination
                  defaultCurrent={currentPage + 1}
                  total={movieResData.length}
                  onChange={(e) => {
                    setSpinning(true);
                    setCurrentPage(e - 1);
                    scrollToTop();
                  }}
                  showSizeChanger={false}
                  pageSize={20}
                />
              </>
            ) : (
              <Empty />
            )}
          </Spin>
        </div>
      </Layout>
    </>
  );
}
