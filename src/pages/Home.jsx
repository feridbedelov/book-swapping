import { useRef, useState } from "react";
import "../styles/home.scss";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Spinner } from "../components/Spinner/Spinner";
import { useInfiniteQuery } from "react-query";
import { getMoreBooks } from "../services/book.provider";
import { Fragment } from "react";
import { Book } from "../components/BookCard";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreRef = useRef();

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery([searchTerm], getMoreBooks, {
    getNextPageParam: (page) =>
      page.page === page.totalPages ? undefined : page.page + 1,
  });

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <div className="home-container">
      <div className="search-box">
        <p className="search-title">Search for the book you wish to read</p>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-field">
            <input
              name="searchTerm"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ex: The caves of steel"
            />
            <label htmlFor="search">
              <button
                type="submit"
                style={{
                  border: "0",
                  position: "relative",
                  marginLeft: "-35px",
                  background: "transparent",
                }}
              >
                {isLoading ? (
                  <Spinner />
                ) : isError ? (
                  <FaTimes aria-label="error" style={{ color: "red" }} />
                ) : (
                  <FaSearch aria-label="search" />
                )}
              </button>
            </label>
          </div>
        </form>
      </div>
      <div className="results-wrapper">
        <div className="results">
          {isSuccess && (
            <div className="row py-4 px-4">
              {data?.pages.map((page, i) => (
                <Fragment key={i}>
                  {page.data.map((book) => {
                    return (
                      <div
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
                        key={book.id}
                      >
                        <Book book={book} />
                      </div>
                    );
                  })}
                </Fragment>
              ))}
            </div>
          )}

          <div ref={loadMoreRef} className={`text-center`}>
            {isFetchingNextPage ? <Spinner /> : ""}
          </div>

          {isLoading && (
            <div className="text-center">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
