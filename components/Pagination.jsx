import axios from 'axios';
import { useState } from 'react';
import {
  FiChevronRight,
  FiMoreHorizontal,
  FiChevronLeft,
  FiArrowRightCircle,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

export default function Pagination({ defaultSearch }) {
  const [pageActive, setPageActive] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [isMorePrev, setIsMorePrev] = useState(false);
  const [changePage, setChangePage] = useState(0);
  // redux
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const handleSearchPage = async (page) => {
    try {
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=7819d7f3&s=${defaultSearch}&page=${page}`
      );
      setPageActive(page);
      dispatch({ type: 'TOTAL_RESULT', payload: data.data.totalResults });
      dispatch({ type: 'MOVIE_LIST', payload: data.data.Search });
    } catch (error) {
      alert(error);
    }
  };

  const rendPagination = () => {
    if (globalState.movieReducer.data?.length) {
      let pageLength = Math.ceil(globalState.movieReducer.total_result / 10);
      let hiddenFirst = pageActive > 4;
      let hiddenLast = pageActive < pageLength - 4;

      // set number pagination
      let button = [];
      
      if (hiddenFirst && hiddenLast) {
        button.push(<button className="active">{pageActive}</button>);
      } else if (!hiddenFirst && hiddenLast) {
        for (let i = 1; i <= pageActive; i++) {
          if (i === pageActive) {
            button.push(<button className="active">{i}</button>);
          } else {
            button.push(
              <button onClick={() => handleSearchPage(i)}>{i}</button>
            );
          }
        }
      } else if (hiddenFirst && !hiddenLast) {
        for (let i = pageActive; i <= pageLength; i++) {
          if (i === pageActive) {
            button.push(<button className="active">{i}</button>);
          } else {
            button.push(
              <button onClick={() => handleSearchPage(i)}>{i}</button>
            );
          }
        }
      }

      // set button pagination
      return (
        <>
          {/* prev button*/}
          {pageActive > 1 && (
            <FiChevronLeft
              size={20}
              onClick={() => handleSearchPage(pageActive - 1)}
            />
          )}
          {/* first number & more */}
          {hiddenFirst ? (
            <>
              <button onClick={() => handleSearchPage(1)}>1</button>
              <div className="morebtn">
                <FiMoreHorizontal
                  size={20}
                  onClick={() => setIsMorePrev(!isMorePrev)}
                />
                <div
                  className={isMorePrev ? 'change-page show' : 'change-page'}
                >
                  <input
                    type="text"
                    onChange={(e) => setChangePage(parseInt(e.target.value))}
                  />
                  <FiArrowRightCircle
                    size={24}
                    onClick={() => {
                      handleSearchPage(changePage), setIsMorePrev(false);
                    }}
                  />
                </div>
              </div>
            </>
          ) : null}

          {/* number list */}
          {button}

          {/* last number & more */}
          {hiddenLast ? (
            <>
              <div className="morebtn">
                <FiMoreHorizontal
                  size={20}
                  onClick={() => setIsMore(!isMore)}
                />
                <div className={isMore ? 'change-page show' : 'change-page'}>
                  <input
                    type="text"
                    onChange={(e) => setChangePage(parseInt(e.target.value))}
                  />
                  <FiArrowRightCircle
                    size={24}
                    onClick={() => {
                      handleSearchPage(changePage), setIsMore(false);
                    }}
                  />
                </div>
              </div>
              <button
                className={pageActive === pageLength ? 'active' : null}
                onClick={() => handleSearchPage(pageLength)}
              >
                {pageLength}
              </button>
            </>
          ) : null}
          {/* next button */}
          {pageActive < pageLength && (
            <>
              <FiChevronRight
                size={20}
                onClick={() => handleSearchPage(pageActive + 1)}
              />
            </>
          )}
        </>
      );
    }
  };

  return <div className="pagination">{rendPagination()}</div>;
}
