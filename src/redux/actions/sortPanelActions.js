export const SET_PLATFORM_VALUE = "SET_PLATFORM_VALUE";
export const SET_CATEGORY_VALUE = "SET_CATEGORY_VALUE";
export const SET_ORDER_VALUE = "SET_ORDER_VALUE";
export const RESET_FIELDS = "RESET_FIELDS";

export function setPlatformField(platformValue) {
  return { type: SET_PLATFORM_VALUE, payload: platformValue };
}

export function setCategoryField(categoryValue) {
    return { type: SET_CATEGORY_VALUE, payload: categoryValue };
}

export function setOrderField(orderValue) {
    return { type: SET_ORDER_VALUE, payload: orderValue };
}

export function resetFields() {
  return { type: RESET_FIELDS };
}