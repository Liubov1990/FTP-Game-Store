export interface ISortPanelState {
  platformField: PlatformFieldEnum;
  categoryField: CategoryFieldEnum;
  orderField: OrderFieldEnum;
}

export enum SortPanelEnum {
  platformField = "platformField",
  categoryField = "categoryField",
  orderField = "orderField",
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