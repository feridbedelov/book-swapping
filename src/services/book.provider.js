import { fetcher, post, put, remove } from "../server/utils";
import { apiUrls } from "../server/urlConfig";

export async function getMyBooks() {
  const response = await fetcher(`${apiUrls.book}/My`);
  return response;
}

export async function fetchSingleBook(bookId) {
  const response = await fetcher(`${apiUrls.book}/${bookId}`);
  return response;
}

export async function deleteSingleBook(bookId) {
  const response = await remove(`${apiUrls.book}/${bookId}`);
  return response;
}

export const getMoreBooks = async ({ pageParam = 0, queryKey }) => {
  if (queryKey !== "") {
    const response = await fetcher(
      `${apiUrls.book}?page=${pageParam}&searchKey=${queryKey}&pageSize=${4}`
    );
    return response;
  }

  const videos = await fetcher(
    `${apiUrls.book}?page=${pageParam}&pageSize=${4}`
  );

  return videos;
};

export const editBook = async (id, formValues) => {
  put(`${apiUrls.book}/${id}`, formValues);
};

export const createtBook = async (formValues) => {
  await post(apiUrls.book, formValues);
};

export const postBookImage = async (formData) => {
  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await post(apiUrls.bookUploadImage, formData, options);
  return response;
};
