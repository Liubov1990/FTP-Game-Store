import { debounce } from "..";

jest.useFakeTimers();

describe("Debounce util", () => {
  test("should be executed just once", () => {
    const callback = jest.fn();
    const debouncedCallback = debounce(callback, 800);
    debouncedCallback();
    expect(callback).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(callback).toBeCalledTimes(1);
  });
});