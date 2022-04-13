import axios from 'axios';
import { useState } from 'react';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import MovieCard from '../../components/movieCard';
import MyNav from '../../components/MyNav';
import Pagination from '../../components/pagination';

export default function Search() {
  const [defaultSearch, setDefaultSearch] = useState('');
  const [search, setSearch] = useState('');
  // redux
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const handleSearch = async () => {
    try {
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=7819d7f3&s=${search}&page=1`
      );
      dispatch({ type: 'TOTAL_RESULT', payload: data.data.totalResults });
      dispatch({ type: 'MOVIE_LIST', payload: data.data.Search });
      setDefaultSearch(search);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="wrap">
      <MyNav
        onClick={handleSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container">
        <div className="head">
          <FiHome color="rgb(255, 136, 0)" />
          <FiChevronRight />
          <span>search</span>
          {!globalState.movieReducer.data ? (
            <span>: movie not found</span>
          ) : null}
        </div>
        <div className="content">
          {globalState.movieReducer.data?.map((item) => {
            return (
              <MovieCard
                key={item.imdbID}
                image={item.Poster}
                imdbID={item.imdbID}
                title={item.Title}
                year={item.Year}
              />
            );
          })}
        </div>
        <Pagination defaultSearch={defaultSearch} />
      </div>
      <Footer />
    </div>
  );
}
