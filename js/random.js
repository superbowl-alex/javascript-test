function getRandomNumber(min, max) {
  const x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}
function guessNumber(minNumber, maxNumber) {
  let randomNumber = getRandomNumber(minNumber, maxNumber);
  let number;
  do {
    number = Number(
      prompt(`Guess a number in the range from ${minNumber} to ${maxNumber}`)
    );
  } while (number !== randomNumber);

  return `Well done!!! It's exactly ${number}`;
}
console.log(guessNumber(1, 10));
