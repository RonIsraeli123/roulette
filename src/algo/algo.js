function getRandomInt(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
  );
}

const returnNumbers = (players, sum_balls) => {
  let results = [];
  let array = [
    [1, 'rgb(237, 241, 13)'],
    [2, 'rgb(48, 18, 242)'],
    [3, 'rgb(242, 18, 18)'],
    [4, 'rgb(186, 18, 242)'],
    [5, 'rgb(242, 130, 18)'],
    [6, 'rgb(42, 187, 76)'],
    [7, 'rgb(193, 106, 20)'],
    [8, 'rgb(33, 32, 31)'],
    [9, 'rgb(237, 241, 13)'],
    [10, 'rgb(48, 18, 242)'],
    [11, 'rgb(242, 18, 18)'],
    [12, 'rgb(186, 18, 242)'],
    [13, 'rgb(242, 130, 18)'],
    [14, 'rgb(42, 187, 76)'],
    [15, 'rgb(193, 106, 20)'],
  ];
  for (let player = 0; player < players; player++) {
    let options = [];
    for (let num = 0; num < sum_balls; num++) {
      let index = getRandomInt(0, array.length - 1);
      options.push(array[index]);
      array.splice(index, 1);
    }
    results.push(
      options.sort(function (a, b) {
        return a[0] - b[0];
      })
    );
  }
  return results;
};

export default returnNumbers;
