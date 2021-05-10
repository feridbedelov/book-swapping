import { fetcher } from "../server/utils";
import { apiUrls } from "../server/urlConfig";

export async function getCurrentUser() {
  return await fetcher(apiUrls.me);
}
