import "./index.scss";
import { Avatar, Text } from "evergreen-ui";

export const Book = ({ book }) => {
  return (
    <div className="book-card">
      <div className="image">
        <img alt="" src="https://picsum.photos/300/250" />
      </div>
      <div className="meta">
        <Avatar
          marginRight={10}
          src={book?.userImage}
          name={book?.userName}
          size={40}
        />
        <div>
          <div>
            <Text color="#ffffff">
              <strong>Title:</strong> {book?.bookTitle}
            </Text>
          </div>
          <div>
            <Text color="#ffffff">
              <strong>Author:</strong> {book?.bookAuthor}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
