export interface ISortPanelState {
  platformField: PlatformFieldEnum;
  categoryField: string;
  orderField: string;
}

export enum PlatformFieldEnum {
  all = "all",
  pc = "pc",
  browser = "browser"
}

export enum CategoryFieldEnum {
  all = "all",
  mmo = "mmo",
  mmorpg = "mmorpg",
  shooter = "shooter",
  strategy = "strategy",
  moba = "moba",
  racing = "racing",
  social = "social"
}

export enum OrderFieldEnum {
  all = "all",
  releaseDate = "release-date",
  popularity = "popularity",
  alphabetical = "alphabetical",
  relevance = "relevance"
}
