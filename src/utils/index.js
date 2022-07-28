export function debounce(funk, timeout = 800) {
  let timer;
  return (...args) => {
    if (!timer) {
      funk.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}
