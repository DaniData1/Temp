const data = [0, 1, 2, 3, 6, 2, 6, 5, 2];

const result = data.reduce(
  (acc, curr, i) => {
    if (i === 0) {
      acc.tempItem = curr;
      return acc;
    }

    if (curr < acc.tempItem) {
      // Look ahead for repetition
      const sliceArr = data.slice(i + 1);
      let repeatIndex = null;
      const repeats = sliceArr.some((item, i) => {
        if (item >= acc.tempItem) {
          repeatIndex = i;
        }
        return item >= acc.tempItem;
      });

      if (repeats) {
        const area = acc.tempItem - curr;
        acc.totalArea += area;
        return acc;
      }

      let nextTarget = acc.tempItem - 1;
      while (!sliceArr.includes(nextTarget) && nextTarget !== 0) {
        nextTarget -= 1;
      }

      const totalDescending = sliceArr.every((item, i) => {
        if (sliceArr.length - 1 === i) {
          return true;
        } else {
          return sliceArr[i + 1] <= item;
        }
      });

      if (totalDescending) return acc;

      if (nextTarget === 0) {
        return acc;
      } else {
        acc.tempItem = nextTarget;
        const area = acc.tempItem - curr;
        acc.totalArea += area;
        return acc;
      }
    } else {
      acc.tempItem = curr;
      return acc;
    }
  },
  { tempItem: null, totalArea: 0 }
);

console.log(result.totalArea);
