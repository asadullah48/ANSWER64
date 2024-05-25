//Q 64
// This function mixes a text and a number into one text
function combineStringAndNumber(
  text: string,
  number: number,
  textAddition: string,
): string {
  return text + number + textAddition;
}
console.log(combineStringAndNumber("I spend around[", 3, "]hours daily to learn coding"));
// Joins the text and number into a single text

// Trying it out with "Age: " and 30
// Shows "Age: 30"
// Here, we put together the text and number.
