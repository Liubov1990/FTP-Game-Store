import axios from "axios";
import { API_LINK_GIANT_BOMB, API_LINK_RAPID } from "../constants/apiLinks";
import { API_KEY_GIANT_BOMB } from "../constants/apiKey";

export function getGamesListRequest({ platformField, categoryField, orderField }) {
  return axios.get(`${API_LINK_RAPID}/games`, {
    params: {
      platform: platformField,
      ...(categoryField !== "all" && { category: categoryField }),
      ...(orderField !== "all" && { "sort-by": orderField })
    }
  });
}

export function getSpecificDataRequest(id) {
  return axios.get(`${API_LINK_RAPID}/game`, {
    params: {
      id: Number(id)
    }
  });
}

export function getGuidRequest(queryTitle) {
  return axios.get(`${API_LINK_GIANT_BOMB}/search/?api_key=${API_KEY_GIANT_BOMB}&format=json&query=${queryTitle}&resources=game`, {});
}

export function getGameDataRequest(guid) {
  return axios.get(`${API_LINK_GIANT_BOMB}/game/${guid}/?api_key=${API_KEY_GIANT_BOMB}&format=json`, {});
}