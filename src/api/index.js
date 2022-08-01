import axios from "axios";
import { API_LINK, API_LINK_FREETOGAME } from "../constants";
import { API_KEY } from "../constants/apiKey";

export function getGamesListRequest({ platformField, categoryField, orderField }) {
  return axios.get(`${API_LINK_FREETOGAME}/games`, {
    params: {
      platform: platformField,
      ...(categoryField !== "all" && { category: categoryField }),
      ...(orderField !== "all" && { "sort-by": orderField })
    }
  });
}

export function getSpecificDataRequest(id) {
  return axios.get(`${API_LINK_FREETOGAME}/game`, {
    params: {
      id: Number(id)
    }
  });
}

export function getGuidRequest(queryTitle) {
  return axios.get(`${API_LINK}/search/?api_key=${API_KEY}&format=json&query=${queryTitle}&resources=game`, {});
}

export function getGameDataRequest(guid) {
  return axios.get(`${API_LINK}/game/${guid}/?api_key=${API_KEY}&format=json`, {});
}

