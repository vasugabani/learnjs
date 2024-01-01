// concat()

// let text1 = "sea";
// let text2 = "food";
// let result = text1.concat(text2);

// console.log(result);            //seafood    (joining)

// let text1 = "sea";
// let text2 = "food";
// let result = text1.concat(" ",text2);

// console.log(result);        //sea food

// ---------------------------------------------------

// includes()

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");

// console.log(result);         //true  (boolean)

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world",7);

// console.log(result);        //false

// ---------------------------------------------

// indexOf()

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");

// console.log(result);        //13

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e");

// console.log(result);        //1

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e",6);

// console.log(result);            //14

// ---------------------------------------------

// startswith()

// let text = "Hello world, welcome to the universe.";
// let result=text.startsWith("Hello");

// console.log(result);        //true

// let text = "Hello world, welcome to the universe.";
// let result=text.startsWith("Hello",5);

// console.log(result);            //false

// -----------------------------------------

// endswith()

// let text = "Hello world";
// let result = text.endsWith("world");

// console.log(result);        //true

// -------------------------------------------

// slice()          (slice() extracts a part of a string and returns the extracted part)

// let text = "Hello world!";
// let result = text.slice(3);     //element start position

// console.log(result);        // lo world!

// let text = "Hello world!";
// let result = text.slice(0,5);     //(start position , how many element do you want)

// console.log(result);        //hello

// ---------------------------------------------

// substring()          

// let text = "Hello world!";
// let result = text.substring(1, 6);

// console.log(result);        //ello

// ----------------------------------------

// substr()         (The substr() method begins at a specified position, and returns a specified number of characters.)

// let text = "Hello world!";
// let result = text.substr(1,4);

// console.log(result);     //ello

// ------------------------------------

// replace()

// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "Bitkhanan");

// console.log(result);        //visit bitkhanan!

// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/g, "red");          //global

// console.log(result);            //Mr Blue has a red house and a red car

// -------------------------------------------

// replaceall()

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");

// console.log(text);          //I love dogs. Dogs are very easy to love. Dogs are very popular.

// ------------------------------------------

// trim()

// let text="          hello world         "
// let result=text.trim();

// console.log(result);        //hello world  ( remove space )

// ----------------------------------------

//split()         (splits a string into an array of substrings, and returns the array)

// let text = "How are you doing today?";
// let result = text.split(" ");

// console.log(result);            //['how','are','you','doing','today?']

// let text = "How are you doing today?";
// let result = text.split(" ",2);

// console.log(result);        //['how','are']

// -----------------------------------------

// match()      (method returns an array with the matches & method returns null if no match is found.)

// let text = "The rain in SPAIN stays mainly in the plain";
// let result=text.match("brain");

// console.log(result);            //null

// -------------------------------------

// toupercase()

// let text = "Hello World!";
// let result = text.toUpperCase();

// console.log(result);        //HELLO WORLD!

// ---------------------------------

// tolowercase()

// let text = "Hello World!";
// let result = text.toLowerCase();

// console.log(result);        //hello world!

// ----------------------------------

// test ()