import { BookForm } from "../components/BookForm";
import "../styles/newBook.scss";
import { queryClient } from "../contexts";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { createtBook, postBookImage } from "../services/book.provider";

export const NewBook = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const initialValues = {
    title: "",
    author: "",
    pageNum: "",
    description: "",
    condition: "",
    imageFile: "",
  };

  const onSubmitHandler = async (values) => {
    setLoading(true);
    const requestData = values;
    const image = requestData.imageFile;
    delete requestData.imageFile;

    const formData = new FormData();
    formData.append("file", image, image.name);

    try {
      const response = await postBookImage(formData);
      const imagePath = `${response?.fileName}`;
      await createtBook({ ...requestData, imagePath });
      await queryClient.invalidateQueries("my-books");
      toast.success("Successfully added");
      history.push("/my-books");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-book-container">
      <h2 className="title">Add New Book</h2>
      <div className="hr" />
      <BookForm
        initialValues={initialValues}
        loading={loading}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};
