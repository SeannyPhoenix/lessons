// const pink = (arg1, arg2) => {
// // function callback(arg1, arg2) {
//   console.log(arg1);
//   if (arg2) {
//     console.log(`Well that was fun, ${arg2}`);
//   }
// }

// function orange(sprinkles, iceCream) {
//   console.log(sprinkles, iceCream);
// }

// function green(skyscraper) {
//   skyscraper('Seanny', 'Jim');
// }

// green(pink);
// green(orange);
// green((hot, potato) => console.log(`Give me my ${hot} ${potato}`));
// green(console.log);

const array = [1, 2, 3, 4, 5];

function checkItem(item) {
  if (typeof item === 'number') {
    return true;
  }
  return false;
}

const checkArray = array.map(checkItem)
console.log(checkArray);

let counter = 0;
const goodAmount = array.map(
  (pumpkin, index) => {
    counter += .6
    // return pumpkin > 3
    const stuff = (
      <div>
        <h1>
          Fuck!
        </h1>
      </div>
    )
    return stuff;
  }
);
console.log(counter);
console.log(goodAmount);