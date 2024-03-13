"use strict";
//question 01
// installion vs code , git , nodejs , typescript
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
// question 2
var personName = "ERIC";
console.log('\n\tquestion 2\t\n');
console.log("HELLO ".concat(personName, " ,WOULD YOU LIKE TO LEARN SOME PYTHON TODAY?"));
//question 3
// LOWER CASE
console.log('\n\tquestion 3\t\n');
var personName1 = "Iqra";
console.log("LowerCase:", personName1.toLowerCase());
//UPPER CASE
console.log("UpperCasecase:", personName1.toUpperCase());
//TITTLE CASE
console.log("titleCase:", personName1.charAt(0).toUpperCase() + personName1.slice(1).toLowerCase());
//question 4
console.log('\n\tquestion 4\t\n');
var qoute1 = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " once said ,\"").concat(qoute1));
//question 5
console.log('\n\tquestion 5\t\n');
var qoute = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, ").concat(qoute);
console.log(message);
// question 6
console.log('\n\tquestion 6\t\n');
var personName3 = "\n\tIqra khan\t\n";
console.log(personName3);
var stripped = personName3.trim();
console.log(stripped);
//question 7
console.log('\n\tquestion 7\t\n');
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//question 8
console.log('\n\tquestion 8\t\n');
console.log(4 + 4);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// question 9
console.log('\n\tquestion 9\t\n');
var favoriteNumber = 5;
console.log("my favorite number is ".concat(favoriteNumber));
//question 10
console.log('\n\tquestion 10\t\n');
//my name is IQRA KHAN
//dated: 19/02/2024
//THIS program will run simple code just like hello world
var myName = 'iqrakhan';
console.log("HELLO WORLD i am ".concat(myName));
//question 11
console.log('\n\tquestion 11\t\n');
var names = ["iqra", "sidra", "hasnain", "abida"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//question 12
console.log('\n\tquestion 12\t\n');
var names1 = ["iqra", "sidra", "hasnain", "abida"];
var message1 = "do you like play fOotbal";
for (var i = 0; i < names1.length; i++) {
    console.log(names1[i] + " " + message1);
}
//question 13
console.log('\n\tquestion 13\t\n');
var transportation = ["Honda motorcycle", "Audi", "civic"];
for (var i = 0; i < transportation.length; i++) {
    console.log(' i would like to own a' + " " + transportation[i]);
}
//question 14
console.log('\n\tquestion 14\t\n');
var guest_list = ['iqra', 'sidra', 'hasnain', 'abida'];
exports.guest_list = guest_list;
guest_list.forEach(function (guests) {
    console.log("respected sir/medam \" ".concat(guests, ", '\nme inivte you on dinner tommorw.\n\nthank you"));
});
//question 15
console.log('\n\tquestion 15\t\n');
var guest_list1 = ['iqra', 'sidra', 'bano', 'hasnain'];
for (var i = 0; i < guest_list1.length; i++) {
    console.log(' sir/medam' + " " + guest_list1[i] + '\n we inivted you on dinner tommorw \nthank you\n ');
}
var not_present1 = 'bano';
var new_guest1 = 'abida';
guest_list1[2] = new_guest1;
for (var i = 0; i < guest_list1.length; i++) {
    console.log(' sir/medam' + " " + guest_list1[i] + '\n we inivted you on dinner tommorw \nthank you\n ');
}
console.log("miss, ".concat(not_present1, " will not coming tommorw dinner."));
//question 16
console.log('\n\tquestion 16\t\n');
var guest_list2 = ['iqra', 'sidra', 'bano'];
var new_guest = 'abida';
guest_list2[2] = new_guest;
for (var i = 0; i < guest_list2.length; i++) {
    console.log('sir ' + " " + guest_list2[i] + "\ninvited you on dinner tommorw\n");
}
guest_list2.unshift('hasnain', 'hasan', 'hussain');
for (var i = 0; i < guest_list2.length; i++) {
    console.log('sir ' + " " + guest_list2[i] + " we found big table so \n we invited you on dinner tommorw\n ");
}
//question 17
console.log('\n\tquestion 17\t\n');
var guest_list3 = ['iqra', 'sidra', 'bano'];
var new_guest3 = 'abida';
guest_list3[2] = new_guest3;
guest_list3.unshift("hassan", 'hussain', 'hasnain');
console.log('\nunfortunately we can not arrange big table, only two people allow\n');
while (guest_list3.length > 2) {
    var remove_guest = guest_list3.pop();
    console.log("sorry sir/medam. ".concat(remove_guest, " you are not invited for dinner. "));
}
for (var i = 0; i < guest_list3.length; i++) {
    console.log('respected sir/medam ' + guest_list3[i] + '\nyes you are invited tommorw dinner\n thank you');
}
guest_list3.splice(0, 2);
console.log(guest_list3);
//question 18
console.log('\n\tquestion 18\t\n');
var places = ['cape town', 'delhi', 'faisalabad', 'bankok', 'larkana', 'sukkur'];
console.log("original :" + places);
//making a copy of an array
var copyOfArray = places.slice();
var sortedArray = copyOfArray.sort();
console.log(sortedArray);
// printing original array
console.log("original :" + places);
// reversing original array 
// first we have make a copy of original array
var copyOfArray2 = places.slice();
var reverseArray = copyOfArray2.reverse();
console.log(reverseArray);
// printing original array
console.log("original :" + places);
//reverse the order of original array
var reverseArray2 = places.reverse();
console.log(reverseArray2);
var againreverse = reverseArray2.reverse();
console.log(againreverse);
//sorting original array
var sortedArray1 = places.sort();
console.log(sortedArray1);
var reversesortedArray = sortedArray.reverse();
console.log(reversesortedArray);
// question 19
console.log('\n\tquestion 19\t\n');
// import{ guest_list } from '../14.guest list/app'
var guests = ['iqra', 'sidra', 'abida', 'hasnain'];
console.log("n PRINTING NUMBER OF GUEST INVITED");
console.log("we had finally invited ".concat(guests.length, " from excercise 14"));
//question 20
console.log('\n\tquestion 20\t\n');
var languages = ['english', 'urdu', 'hindi', 'french', 'arabic'];
console.log("list of languages : ");
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var top_1 = languages_1[_i];
    console.log(top_1);
}
//question 21
// interface item 
// // create two objects
console.log('\n\tquestion 21\t\n');
var person;
var person1 = { name: "iqra", fname: "g.nabi", age: 25 };
var person2 = { name: "sidra", fname: "g.nabi", age: 26 };
console.log("person1 ".concat(person1.name, " ,").concat(person1.fname, ",").concat(person1.age));
console.log("person2 ".concat(person2.name, " ,").concat(person2.fname, ",").concat(person2.age));
// question 22
console.log('\n\tquestion 22\t\n');
var array = ['iqra', 'sidra', 3, 4, 5, 'bano'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
// console.log(array[6]) // intentional error 
//question 23
// test 1 : Equality camparision
console.log('\n\tquestion 23\t\n');
var car = 'subaru';
console.log('is car == "subar"? i predict true.');
console.log(car == 'subaru');
// test 2 : Strict equality camparision
console.log('is car === "subar"? i predict true.');
console.log(car === 'subaru');
// test 3 : inequality camparision
console.log('is car != "subar"? i predict false.');
console.log(car != 'subaru');
// test 4 : strict inequality camparision
console.log('is car !== "subar"? i predict false.');
console.log(car !== 'subaru');
// test 5 : less than camparision
console.log('is car < "subar"? i predict false.');
console.log(car < 'subaru');
// test 6 : grater than camparision
console.log('is car > "subar"? i predict false.');
console.log(car > 'subaru');
// test 7 :less than or equal camparision
console.log('is car <= "subar"? i predict true.');
console.log(car <= 'subaru');
// test 8 :greater than or equal camparision
console.log('is car >= "subar"? i predict true.');
console.log(car >= 'subaru');
// test 9 :checking truthness
console.log('is car ? ');
console.log(car);
// test 9 :checking falsiness
console.log('is car ?  i predict false.');
console.log(!car);
//question 24
console.log('\n\tquestion 24\t\n');
var car1 = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
//test 1 : equality with string
console.log("test 1", car1 == 'subaru');
//test 2 :strict equality with string
console.log("test 2", car1 === 'toyota');
//test 3 : inequality with string
console.log("test 3", car1 != 'toyta');
//test 4 :strict inequality with string
console.log("test 4", car1 !== 'subaru');
//test 5 :LowerCase with string
console.log("test 5", car1.toLowerCase() == 'subaru');
//test 6 :LowerCase with string
console.log("test 6", car1.toLowerCase() === 'toyota');
//with numerical test
//test 7 : equality with number
console.log("test 7", age == 25); //true
//test 8 : strict equality with number
console.log("test 8", age === 15); // false
//test 9 : greater than
console.log("test 9", age > 20); // true
//test 10 : less than
console.log("test 10", age < 19); //false
//test 11 : greater than equality with number
console.log("test 11", age >= 25); //true
//test 12 : less than  equality with number
console.log("test 12 ", age <= 18); //false
//logical operators
//test 13 : AND &&
console.log("test 13 "); //TRUE
console.log(age > 20 && age < 30);
//test 14 : OR ||
console.log("test 14 "); //false
console.log(age > 30 && age < 20);
//Test  in Array
console.log('test in array');
console.log("test 15", 3 in numbers); // true
console.log("test 16", 5 in numbers); // false
//question 25
console.log('\n\tquestion 25\t\n');
// create a variable called alien color
var alien_color11 = "green";
if (alien_color11 == "green") {
    console.log(" the player just earned 5 point.");
}
//the version that fails will have no output
alien_color11 = "red";
if (alien_color11 == "green") {
    console.log(" the player just earned 5 point.");
}
//question 26
console.log('\n\tquestion 26\t\n');
var alien_color = "green";
// if the alien color is green , print a statement that...
if (alien_color == "green") {
    console.log(" the player just earned 5 point for shooting the alien.");
}
else {
    console.log("the player just earned 10 point.");
}
var alien_color1 = "red";
if (alien_color1 == "green") {
    console.log(" the player just earned 5 point for shooting the alien.");
}
else {
    console.log("the player just earned 10 point.");
}
//question 27
console.log('\n\tquestion 27\t\n');
var alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color3 == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color3 == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("the player earned 0 points");
}
//question 28
console.log('\n\tquestion 28\t\n');
var personAge = 10;
if (personAge < 2) {
    console.log("the person is a baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("the person is a  toddler");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("the person is a  kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("the person is a  teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("the person is a  adult");
}
else if (personAge >= 65) {
    console.log("the person is a elder");
}
//question 29
console.log('\n\tquestion 29\t\n');
var favoritFruits = ['apple', 'banana', 'orange'];
if (favoritFruits.includes('mango')) {
    console.log('i would like to eat mango');
}
else if (favoritFruits.includes('orange')) {
    console.log('i would like to eat orange');
}
else if (favoritFruits.includes('apple')) {
    console.log('fruits are not available apple');
}
else {
    console.log('fruits are not available');
}
//question 30
console.log('\n\tquestion 30\t\n');
var userNames = ['sidra', 'iqra', 'admin', 'hasnain', 'hassan', 'ali'];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] == "admin") {
        console.log("\nhello ".concat(userNames[i], " i would you  like to see a status report?\n"));
    }
    else {
        console.log("hello ".concat(userNames[i], " thank you for logging in again!"));
    }
}
//question 31
console.log('\n\tquestion 31\t\n');
var userNames2 = ['sidra', 'iqra', 'admin', 'hasnain', 'hassan', 'ali'];
// to remove all members
userNames2 = [];
console.log(userNames2);
if (userNames2.length > 0) {
    for (var i = 0; i < userNames2.length; i++) {
        if (userNames2[i] == "admin") {
            console.log("\nhello ".concat(userNames2[i], " i would you  like to see a status report?\n"));
        }
        else {
            console.log("hello ".concat(userNames2[i], " thank you for logging in again!"));
        }
    }
}
else {
    console.log('we need to find  some users');
}
//question 32
console.log('\n\tquestion 32\t\n');
var current_users = ['ali', 'Ammad', 'saiF', 'hasnain', 'ayaz'];
var new_users = ['ammad', 'hassan', 'saif', 'hussain', 'hadad'];
//we will use forEach method
new_users.forEach(function (new_user) {
    var new_userLower = new_user.toLowerCase();
    // we will use some() method
    var userNameTaken = current_users.some(function (current_users) { return current_users.
        toLowerCase() === new_userLower; }); //true or false
    // now we will apply conditions
    if (userNameTaken) {
        console.log("".concat(new_user, " needs to choose a  new user name because its alreday taken"));
    }
    else {
        console.log("".concat(new_user, " is the new member added"));
        current_users.push(new_user);
    }
});
console.log(current_users);
//question 33
console.log('\n\tquestion 33\t\n');
var myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < myNumber.length; i++) {
    if (myNumber[i] == 1) {
        console.log("".concat(myNumber[i], "st"));
    }
    else if (myNumber[i] == 2) {
        console.log("".concat(myNumber[i], "nd"));
    }
    else if (myNumber[i] == 3) {
        console.log("".concat(myNumber[i], "rd"));
    }
    else if (myNumber[i] >= 4 || myNumber[i] <= 9) {
        console.log("".concat(myNumber[i], "th"));
    }
}
//question 34
console.log('\n\tquestion 34\t\n');
var pizzas = ["chikken tikka", 'cheese pizza', "pepperoni pizzas"];
//print only names of pizza
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
//printing names and sentence/message
for (var i = 0; i < pizzas.length; i++) {
    console.log(" i like to eat ".concat(pizzas[i]));
}
console.log("\n i really like to eat pizzas . pizza comes in a variety of flavors and tooping, allowing individuals to customize it to their liking \n ");
//question 35
console.log('\n\tquestion 35\t\n');
var animals = ['dog', 'tigger', 'lion'];
for (var _a = 0, animals_1 = animals; _a < animals_1.length; _a++) {
    var i = animals_1[_a];
    console.log(i);
}
for (var _b = 0, animals_2 = animals; _b < animals_2.length; _b++) {
    var j = animals_2[_b];
    console.log("".concat(j, " is a danger animal"));
}
console.log(" all these animals' ".concat(animals[0], ", ").concat(animals[1], ", and  ").concat(animals[2], " meat is haram in islam"));
//question 36
console.log('\n\tquestion 36\t\n');
function make_shirt(size, label) {
    return size + label;
}
var myfun = make_shirt(36, "  the rainy day");
// how to print on console
console.log(myfun);
//question 37
console.log('\n\tquestion 37\t\n');
function makeShirt3(size, label) {
    if (size === void 0) { size = "large"; }
    if (label === void 0) { label = "  i love typescript"; }
    console.log("you have order a ".concat(size, " shirt that say ").concat(label));
}
makeShirt3();
makeShirt3("medium");
makeShirt3("any size", " i need to big shirt to wear");
//question 38
console.log('\n\tquestion 38\t\n');
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// default sentence
describe_city("karachi");
describe_city("france", "europe");
describe_city("lahore");
//question 39
console.log('\n\tquestion 39\t\n');
function city_country(city, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(city, ",").concat(country);
}
var c1 = city_country('lahore', 'karachi');
var c2 = city_country('tokyo', 'japan');
var c3 = city_country('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
//question 40
console.log('\n\tquestion 40\t\n');
function make_album(artist, tittle) {
    return { artist: artist, tittle: tittle };
}
var album1 = make_album("ali", "light");
console.log(album1);
var album2 = make_album("bilal", "red wave");
console.log(album2);
var album3 = make_album("hamza", "black bird");
console.log(album3);
function make_album1(artist, tittle, numberofTracks) {
    return { artist: artist, tittle: tittle, numberofTracks: numberofTracks };
}
var album4 = make_album1("ali", "light", 30);
console.log(album4);
var album5 = make_album1("bilal", "red wave", 55);
console.log(album5);
var album6 = make_album1("hamza", "black bird");
console.log(album6);
//question 41
console.log('\n\tquestion 41\t\n');
var magicians = ['iqra', 'sidra', 'fiza', 'afshan', 'sana'];
function show_magicians() {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magicianName = magicians_1[_i];
        console.log("magician", magicianName);
    }
}
;
show_magicians(); //calling of function
//question 42
console.log('\n\tquestion 42\t\n');
var magicians1 = ['iqra', 'sidra', 'fiza', 'afshan', 'sana'];
function show_magicians1(greet) {
    for (var _i = 0, magicians1_1 = magicians1; _i < magicians1_1.length; _i++) {
        var item = magicians1_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians1("hello  Mrs."); //calling of function
show_magicians1(" how are you Mrs.");
//question 43
console.log('\n\tquestion 43\t\n');
var magiciansNames = ['iqra', 'sidra', 'fiza', 'afshan', 'sana'];
//making a copy of an array 
var magiciansNamesCopy = __spreadArray([], magiciansNames, true);
function show_magicians2(greet) {
    var withGreeting = '';
    for (var _i = 0, magiciansNamesCopy_1 = magiciansNamesCopy; _i < magiciansNamesCopy_1.length; _i++) {
        var item = magiciansNamesCopy_1[_i];
        withGreeting += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreeting;
}
;
var myGreeting = show_magicians2("hello ");
var make_array = myGreeting.split('\n');
console.log(make_array);
console.log(magiciansNames);
//question 44
console.log('\n\tquestion 44\t\n');
function sandwiche() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwiches order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwich iqrakhan");
sandwiche("capsicum", "tomato", "chicken");
sandwiche("beef", "cheese");
sandwiche("garlic chicken", " mayo sauce");
//question 45
console.log('\n\tquestion 45\t\n');
function createcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var myCar = createcar("toyota", " corolla", { color: "silver", year: "2024" });
console.log(myCar);
