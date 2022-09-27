
// ---
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// ---
// - Explain the difference between forEach, map, filter, and reduce.
// - Define a callback function before you use it in forEach, map, filter or reduce.
// - Use forEach to console.log each name in the names array. ✅
// - Use forEach to console.log each country in the countries array. ✅ 
// - Use forEach to console.log each number in the numbers array. ✅
// - Use map to create a new array by changing each country to uppercase in the countries array.✅
// - Use map to create an array of countries length from countries array.✅
// - Use map to create a new array by changing each number to square in the numbers array ✅
// - Use map to change to each name to uppercase in the names array  ✅
// - Use map to map the products array to its corresponding prices.  ✅
// - Use filter to filter out countries containing land.✅
// - Use filter to filter out countries having six character. ✅
// - Use filter to filter out countries containing six letters and more in the country array.✅
// - Use filter to filter out country start with 'E';✅
// - Use filter to filter out only prices with values.✅
// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.✅
// - Use reduce to sum all the numbers in the numbers array.✅
// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries✅
// - Explain the difference between some and every
// - Use some to check if some names' length greater than seven in names array
// - Use every to check if all the countries contain the word land
// - Explain the difference between find and findIndex.
// - Use find to find the first country containing only six letters in the countries array
// - Use findIndex to find the position of the first country containing only six letters in the countries array
// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// ---

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' , 'England']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// names.forEach(e => {
    
//     console.log("names: ",e)
// })

// countries.forEach(e => {
//     console.log("countries: ",e)
// })

// numbers.forEach(e => {
//     console.log("numbers: ",e)
// })

// const CountryArry = [];
// const countryLength = []

// countries.map(e => {
//     let country = e.toLocaleUpperCase();
//     let countrylength = e.length;
//     CountryArry.push(country)
//     countryLength.push(countrylength)
// })

// console.log(CountryArry)
// console.log(countryLength)

// const sqrarray = [];

// numbers.map(e => {
//     let sqr = e ** 2;
//     sqrarray.push(sqr)

// })
// console.log(sqrarray)


// const namesArry = [];


// names.map(e => {
//     let name = e.toLocaleUpperCase();
    
//     namesArry.push(name)
    
// })

// console.log(namesArry)

// const productarray = []

// products.map(e =>{
//     // console.log(`${e.product} => ${e.price}`)

//     productarray.push(`${e.product} => ${e.price}`)
// })

// console.log(productarray)


// countries.filter(e => {

//     if(e.includes("land") || e.includes('Land')){
//         console.log(e)
//     } else {
//         console.log(`${e} don't have land`)
//     }

// })



// countries.filter(e => {

//     if(e.length <= 6){
//         console.log(e)
//     }
   
// })


// function serachEle(e){
//     if(e[0] == 'E'){
//         return e;
//     }
// }


// console.log(countries.filter(e => serachEle(e)))

// function search(obj){
//     if((obj.price !== " ") && (obj.price != '')){
//             return obj;
//     }
// }


// // - Use filter to filter out only prices with values.


// function isPrise(obj){
 
//     if(obj.price !== " " && obj.price !== '' ){
//         return obj
//     }
// }

// console.log(products.filter(e => isPrise(e)))


// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.


// let newarr = ["jtesh", 10, true, "gadage"];


// let stringarry = [];


// function getStringLists (newarr){
      
//  return newarr.filter(e => (typeof e == 'string') )
 
// }

// console.log(getStringLists(newarr))


// - Use reduce to sum all the numbers in the numbers array.

// let sum = numbers.reduce((acc,curr) => acc + curr, 0)

// console.log(sum)

// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' , 'England']

// let sumcountry = countries.reduce((acc,curr) =>{
//        if(acc == "Finland" && curr == "Sweden" ){
//         return `Estonia , ${acc}, ${curr}`
//        }

//        else if(acc == 'Estonia , Finland, Sweden, Denmark, Norway' && curr == 'IceLand'){
//              return `${acc} and ${curr} are north European countries ` 
//        }
// } )
// console.log(sumcountry)


// Use find to find the first country containing only six letters in the countries array


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' , 'England']

function checkLength(){
  if(countries.length > 6){
    return countries
  }
  // return countries.length > 6
}


console.log(countries.find(checkLength)) 

// countries.forEach(e => {
//   find
 
// })