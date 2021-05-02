import { useState } from "react";
import "../styles/home.scss";
import { Tabs } from "../components/Tabs";
import { BooksList } from "../components/BooksList";
import { data } from "../data";

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(1);

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
        <Tabs
          tabs={["Last Added Books", "Searched Books"]}
          onTabClick={setActiveTab}
          active={activeTab}
        />
        <div className="results">
          <BooksList books={data} goTo="detail" />
        </div>
      </div>
    </div>
  );
}
