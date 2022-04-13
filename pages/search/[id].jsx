import axios from 'axios';
import { useEffect, useState } from 'react';
import MyNav from '../../components/MyNav';
import { FiClock } from 'react-icons/fi';
import { useRouter } from 'next/router';
// import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';

export default function Detail() {
  const [dataMovie, setDataMovie] = useState({});
  const router = useRouter();
  // redux
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const getData = async () => {
    try {
      const { id } = router.query;
      const data = await axios.get(
        `http://www.omdbapi.com/?i=${id}&plot=full&apikey=7819d7f3`
      );
      dispatch({ type: 'MOVIE_DETAIL', payload: data.data });
      setDataMovie(data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrap">
      <MyNav />
      <div className="container">
        <div className="top-detail">
          <img src={globalState.detailMovieReducer.Poster} alt="detail image" />
          <div className="wrap-desc">
            <h2>{globalState.detailMovieReducer.Title}</h2>
            <div className="main-detail">
              <span>{globalState.detailMovieReducer.Rated}</span>
              <div className="duration">
                <FiClock size={20} />
                <span>{globalState.detailMovieReducer.Runtime}</span>
              </div>
            </div>
            <div className="desc-detail">
              <div>
                <strong>Year : </strong>
                <span>{globalState.detailMovieReducer.Year}</span>
              </div>
              <div>
                <strong>Released : </strong>
                <span>{globalState.detailMovieReducer.Released}</span>
              </div>
              <div>
                <strong>Genre : </strong>
                <span>{globalState.detailMovieReducer.Genre}</span>
              </div>
              <div>
                <strong>Director : </strong>
                <span>{globalState.detailMovieReducer.Director}</span>
              </div>
              <div>
                <strong>Writer : </strong>
                <span>{globalState.detailMovieReducer.Writer}</span>
              </div>
              <div>
                <strong>Actors : </strong>
                <span>{globalState.detailMovieReducer.Actors}</span>
              </div>
              <div>
                <strong>Language : </strong>
                <span>{globalState.detailMovieReducer.Language}</span>
              </div>
              <div>
                <strong>Country : </strong>
                <span>{globalState.detailMovieReducer.Country}</span>
              </div>
              <div>
                <strong>Awards : </strong>
                <span>{globalState.detailMovieReducer.Awards}</span>
              </div>
              <div>
                <strong>Meta score : </strong>
                <span>{globalState.detailMovieReducer.Metascore}</span>
              </div>
              <div>
                <strong>Imdb Rating : </strong>
                <span>{globalState.detailMovieReducer.imdbRating}</span>
              </div>
              <div>
                <strong>Imdb Votes : </strong>
                <span>{globalState.detailMovieReducer.imdbVotes}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="synopsis">
          <span>Synopsis</span>
          <p>{globalState.detailMovieReducer.Plot}</p>
        </div>
        {/* <div className="synopsis">
          <span>Ratings</span>
          <div className="ratings">
            <span>imdbRating </span>
            <ReactStars
              count={5}
              value={dataMovie.imdbRating / 2}
              edit={false}
              isHalf={true}
              size={24}
              activeColor="#ffd700"
            />
          </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}
