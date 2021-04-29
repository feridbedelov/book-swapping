import { useState } from "react";
import "../styles/home.scss";
import { Tabs } from "../components/Tabs";
import { Button, SearchIcon, SearchInput, Heading } from "evergreen-ui";
import { BooksList } from "../components/BooksList";
import { data } from "../data";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="home-container">
      <div className="search-box">
        <form className="form">
          <Heading size={800} color="#ffffff" marginBottom="18px">
            Search for the book you wish to read
          </Heading>
          <div className="form-field">
            <SearchInput
              height={42}
              name="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ex: The caves of steel"
            />
            <Button iconBefore={SearchIcon} className="search-btn">
              Search
            </Button>
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
          <BooksList books={data} />
        </div>
      </div>
    </div>
  );
}
