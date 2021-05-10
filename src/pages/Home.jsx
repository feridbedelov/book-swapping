import { useState } from "react";
import "../styles/home.scss";
import { BooksList } from "../components/BooksList";
import { data } from "../data";

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="home-container">
      <div className="search-box">
        <form className="form">
          <p className="search-title">Search for the book you wish to read</p>
          <div className="form-field">
            <input
              name="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ex: The caves of steel"
            />
            <button className="search-btn">Search</button>
          </div>
        </form>
      </div>
      <div className="results-wrapper">
        <div className="results">
          <BooksList books={data} goTo="detail" />
        </div>
      </div>
    </div>
  );
}
