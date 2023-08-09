const arr1 = [345, 'hello', false, console.log];

console.log(arr1);
console.log(typeof arr1);

const movies = ['Bahubali', 'Asur','Vampire Diaries','Interstellar','Avengers','RRR'];
console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies[10]);
console.log(movies.at(-4))
console.log(movies.at(2))

movies[3] = 'Inception';
console.log(movies);

//Slicing
console.log(movies.slice(1,4));
console.log(movies.slice(1, -1)); //negative indexing is allowed in slicing
console.log(movies.slice(2))
console.log(movies.slice(2,100))

//Adding elements in array
movies.push('Flash'); //Add element at the end
movies.unshift('Pathaan');  //Add element at the beginning
console.log(movies);

//Remove elements from array
movies.pop(); //remove element from tht end
movies.shift(); //remove element from the beginning
console.log(movies);

//Remove elements from any index
movies.splice(3,2) //It removes 2 elements starting from index 3
console.log(movies)

//spread operator
console.log(...movies);
console.log(['ironman', ...movies, 'batman']);
//Add elements at any index
console.log([...movies.slice(0,3), 'new element', ...movies.slice(3)])



