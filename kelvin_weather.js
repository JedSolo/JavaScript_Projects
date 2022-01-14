// Assigning a variable kelvin to the value 293:
const kelvin = 0;

// Converting kelvin to celsius:
let celsius = kelvin - 273;

// Converting celsius to fahrenheit:
let fahrenheit = celsius * (9/5) + 32;

// Changing the value of fahrenheit to whole number:
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Converting celsius to Newton scale:
let newton = Math.floor(celsius * (33/100));
console.log(`Newton scale: ${newton}`);