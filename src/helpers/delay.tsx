export const delayHelper = (delay: number): Promise<void> =>
  new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });