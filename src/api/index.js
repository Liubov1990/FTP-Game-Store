import axios from "axios";
import { API_LINK, API_LINK_BIG } from "../constants";
import { API_KEY, API_KEY_BIG } from "../constants/apiKey";

export function getGamesListRequest({ platformField, categoryField, orderField }) {
  return axios.get(`${API_LINK}/games`, {
    headers: {
      "x-rapidapi-key": API_KEY
    },
    params: {
      ...(platformField && { platform: platformField }),
      ...(categoryField && { category: categoryField }),
      ...(orderField && { "sort-by": orderField })
    }
  });
}

export function getSpecificDataRequest(id) {
  return axios.get(`${API_LINK}/game`, {
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": API_KEY
    },
    params: {
      id: id
    }
  });
}

export function getVideoSearchRequest(queryTitle) {
  return axios.get(
    `${API_LINK_BIG}/search/?api_key=${API_KEY_BIG}&format=json&query=${queryTitle}&resources=video,videos&field_list=id,name,hd_url,high_url,low_url`,
    {}
  );
}

export function getGuidRequest(queryTitle) {
  return axios.get(`${API_LINK_BIG}/search/?api_key=${API_KEY_BIG}&format=json&query=${queryTitle}&resources=game`, {});
}

export function getGameDataRequest(guid) {
  return axios.get(`${API_LINK_BIG}/game/${guid}/?api_key=${API_KEY_BIG}&format=json`, {});
}
