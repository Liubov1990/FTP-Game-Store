export interface IGameInfo {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: Date;
  freetogame_profile_url: string;
}

export interface IFullGameInfo {
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  minimum_system_requirements?: {
    os?: string;
    processor?: string;
    memory?: string;
    graphics?: string;
    storage?: string;
  };
  platform: string;
  publisher: string;
  release_date: Date;
  screenshots?: { id?: number; image?: string }[];
  short_description: string;
  status: string;
  thumbnail?: string;
  title: string;
}

export interface IImagesSearchState {
  gamesList: IGameInfo[];
  randomImagesList: IFullGameInfo[];
  page: number;
  totalPages: number;
  status: string;
}
