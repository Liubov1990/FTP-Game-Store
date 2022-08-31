import { IFullGameInfo } from "../imageSearchReducer/types";

export interface ISimilarGames {
  api_detail_url: string;
  id: number;
  name: string;
  site_detail_url: string;
}

export interface IGamePageState {
  gameDetails: Partial<IFullGameInfo>;
  similarGames?: ISimilarGames[];
  status: string;
}
