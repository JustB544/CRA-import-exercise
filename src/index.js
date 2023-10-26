import food from "./foods";
import {choice, remove} from "./helpers";


// - Log the message “Here you go: *RANDOMFRUIT*”
// - Log the message “Delicious! May I have another?”
// - Remove the fruit from the array of fruits
// - Log the message “I’m sorry, we’re all out. We have *FRUITSLEFT* left.”

const fruit = choice(food);
console.log(`I would like one ${fruit}`);
console.log(`Here you go: ${remove(food, fruit)}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${food.length} left.`);
