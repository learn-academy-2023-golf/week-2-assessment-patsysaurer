// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

// You can create a Python function that takes a string as input and then iterates through the string to find the index of the first vowel. Here's a simple example of such a function:

// def find_first_vowel_index(input_string):
//     vowels = "AEIOUaeiou"
    
//     for index, char in enumerate(input_string):
//         if char in vowels:
//             return index
    
//     # If no vowel is found, return -1 to indicate that there are no vowels in the string.
//     return -1

// # Example usage:
// input_str = "Hello, World!"
// result = find_first_vowel_index(input_str)
// if result != -1:
//     print(f"The first vowel is at index {result}.")
// else:
//     print("No vowels found in the string.")


// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// My Critique:
// I was surprised by the output because I guess I was expecting to see JavaScript. The bot recommended to iterate with a function in Python. Some things were familar which I liked. It looked like a JS function with slightly different keywords used. 
// I also liked that there is an example usage which had an if else statement that made sense to me.   
// I disliked not knowing how to run the code, since I don't know Python.
// I noticed that the strict === equality is not being used. 
// I think I would take the filter approach, first converting it to an array with .split(""). Then checking for the first vowel. I attempted the problem, then got stuck at the conditional part. 

// const firstVowel = (string) => {
//     const vowels = "AEIOUaeiou"
//     let firstVowel = []
//     let stringArr = string.split("")
//     stringArr.filter(value, index => index === )
//     return firstVowel.join("")
// } 
// console.log(firstVowel("Patsy"))

// I learned that there are many ways to solving one problem. Also many languages that are out there. The format and most keywords seem similar to JavaScript so that makes it easier to get an idea of what is going on. 