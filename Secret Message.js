let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Removing the last element in the array:
secretMessage.pop()

//Checking the length of the array:
console.log(secretMessage.length)

// Adding the words 'to' and 'Program' to the array.
secretMessage.push('to', 'Program')

// Changing the word 'easily' with the word 'right'
secretMessage[7] = 'right'

//Removing the first element in the array:
secretMessage.shift()

// Adding the word 'Programming' to the start of the array:
secretMessage.unshift('Programming')

secretMessage.splice(6, 11, 'know')
console.log(secretMessage.join(' '));