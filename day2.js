// Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its
//  author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
console.log("\"Allama Iqbal once said, \"Raise yourself to such heights that before destiny unveils itself, God Himself asks, 'What is your wish?\"");
// Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable
//  called famous_person. Then compose your message and store it in a new variable called message. Print your
//  message.
var famousPerson = "Allama Iqbal";
var message = "\"".concat(famousPerson, " once said, \"Raise yourself to such heights that before destiny unveils itself, God Himself asks, 'What is your wish?\"");
console.log(message);
// Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
//  and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the 
// whitespace around the name is displayed. Then print the name after stripping the white spaces.
var personName = "\t\n Muhammad Saleem Khan\t\n";
console.log(personName);
console.log(personName.trim());
