import axios from "axios";
import { API_LINK_GIANT_BOMB, API_LINK_RAPID } from "../constants/apiLinks";
import { API_KEY_GIANT_BOMB, API_KEY_RAPID } from "../constants/apiKey";
import { CategoryFieldEnum, OrderFieldEnum, PlatformFieldEnum } from "../redux/reducers/sortPanelReducer/types";

export function getGamesListRequest({ platformField, categoryField, orderField }: {platformField: PlatformFieldEnum, categoryField: CategoryFieldEnum, orderField: OrderFieldEnum}) {
  return axios.get(`${API_LINK_RAPID}/games`, {
    headers: {
      "x-rapidapi-key": API_KEY_RAPID,
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
    params: {
      platform: platformField,
      ...(categoryField !== "all" && { category: categoryField }),
      ...(orderField !== "all" && { "sort-by": orderField })
    }
  });
}

export function getSpecificDataRequest(id: number) {
  return axios.get(`${API_LINK_RAPID}/game`, {
    headers: {
      "x-rapidapi-key": API_KEY_RAPID,
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
    params: {
      id: Number(id)
    }
  });
}

export function getGuidRequest(queryTitle: string) {  
  return axios.get(`${API_LINK_GIANT_BOMB}/search/?api_key=${API_KEY_GIANT_BOMB}&format=json&query=${queryTitle}&resources=game`, {});
}

export function getGameDataRequest(guid: string) {
  return axios.get(`${API_LINK_GIANT_BOMB}/game/${guid}/?api_key=${API_KEY_GIANT_BOMB}&format=json`, {});
}