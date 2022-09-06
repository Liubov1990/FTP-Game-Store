import {
  CategoryFieldEnum,
  OrderFieldEnum,
  PlatformFieldEnum,
  SortPanelEnum
} from "../redux/reducers/sortPanelReducer/types";

export const formInputs = [
  {
    id: SortPanelEnum.platformField,
    formLabel: "Platform",
    options: Object.values(PlatformFieldEnum)
  },
  {
    id: SortPanelEnum.categoryField,
    formLabel: "Category",
    options: Object.values(CategoryFieldEnum)
  },
  {
    id: SortPanelEnum.orderField,
    formLabel: "Order",
    options: Object.values(OrderFieldEnum)
  }
];
