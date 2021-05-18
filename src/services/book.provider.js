import { fetcher } from "../server/utils";
import { apiUrls } from "../server/urlConfig";

export async function getMyBooks() {
  const response = await fetcher(`${apiUrls.book}/My`);
  return response;
}
