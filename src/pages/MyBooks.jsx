import "../styles/mybooks.scss";
import { Link } from "react-router-dom";
import { MyBookList } from "../components/MyBookList";
import { useQuery } from "react-query";
import { getMyBooks } from "../services/book.provider";
import { FullPageSpinner } from "../components/Spinner/FullPageSpinner";
import { Empty } from "../components/Empty";

export function MyBooks() {
  const { data, isError, isLoading } = useQuery("my-books", getMyBooks);

  const renderContent = () => {
    if (isLoading) return <FullPageSpinner />;
    else if (isError)
      return <div className=" m-2 text-danger">Server Error</div>;
    else if (!isLoading && !data.length) {
      return (
        <Empty
          title={"Not book found"}
          description={"You have not yet added book to your list"}
        />
      );
    } else {
      return (
        <div className="my-books-list">
          {data && <MyBookList books={data} />}
        </div>
      );
    }
  };

  return (
    <div className="my-books-container">
      <div className="header">
        <h3>My books</h3>
        <Link to="/my-books/new">Add Book</Link>
      </div>
      {renderContent()}
    </div>
  );
}
