import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { BookForm } from "../components/BookForm";
import { FullPageSpinner } from "../components/Spinner/FullPageSpinner";
import { queryClient } from "../contexts";
import { apiUrls } from "../server/urlConfig";
import { post, put } from "../server/utils";
import {
  editBook,
  fetchSingleBook,
  postBookImage,
} from "../services/book.provider";
import "../styles/bookEdit.scss";

export const BookEdit = ({ match, history }) => {
  const id = match?.params?.id;
  const [onSubmitLoading, setOnSubmitLoading] = useState(false);

  const {
    data: bookDetails,
    isLoading,
    isError,
    refetch,
  } = useQuery(["book", id], () => fetchSingleBook(id));

  const onSubmitHandler = async (values) => {
    setOnSubmitLoading(true);
    const requestData = values;
    const image = requestData.imageFile;
    delete requestData.imageFile;

    try {
      if (image) {
        const formData = new FormData();
        formData.append("file", image, image.name);

        const response = await postBookImage(formData);
        const imagePath = `${response?.fileName}`;

        await editBook(bookDetails?.id, {
          ...requestData,
          imagePath,
        });
      } else {
        await editBook(bookDetails?.id, { ...requestData });
      }
      await refetch();
      await queryClient.invalidateQueries("my-books");
      toast.success("Successfully updated");
      history.push("/my-books");
    } catch (error) {
      console.log(error);
    } finally {
      setOnSubmitLoading(false);
    }
  };

  if (isLoading) return <FullPageSpinner />;

  if (isError) return <p>Server Error</p>;

  return (
    <div className="new-book-container">
      <h2 className="title">Edit the book</h2>
      <div className="hr" />
      <BookForm
        onSubmit={onSubmitHandler}
        loading={onSubmitLoading}
        initialValues={{
          ...bookDetails,
          imageFile: "",
        }}
      />
    </div>
  );
};
