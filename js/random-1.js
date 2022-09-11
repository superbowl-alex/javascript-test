function guessNumber(minNumber, maxNumber) {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const x = randomNumber(minNumber, maxNumber);
  let number;
  do {
    number = Number(
      prompt(`Guess a number in the range from ${minNumber} to ${maxNumber}`)
    );
  } while (number !== x);

  return `Well done!!! It's exactly ${number}`;
}
console.log(guessNumber(1, 10));
