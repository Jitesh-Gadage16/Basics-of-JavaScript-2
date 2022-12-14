// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// const users = [
// {
//   name:'Brook',
//   scores:75,
//   skills:['HTM', 'CSS', 'JS'],
//   age:16
// },
// {
//   name:'Alex',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'David',
//   scores:75,
//   skills:['HTM', 'CSS'],
//   age:22
// },
// {
//   name:'John',
//   scores:85,
//   skills:['HTML'],
//   age:25
// },
// {
//   name:'Sara',
//   scores:95,
//   skills:['HTM', 'CSS', 'JS'],
//   age: 26
// },
// {
//   name:'Martha',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'Thomas',
//   scores:90,
//   skills:['HTM', 'CSS', 'JS'],
//   age:20
// }
// ]
// ---


// const constants = [2.72, 3.14, 9.81, 37, 100]

// - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.


const constants = [2.72, 3.14, 9.81, 37, 100]

const [e,pi,gravity,humanBodyTemp, waterBoilingTemp] = constants

console.log(`e = ${e}, pi = ${pi}, gravity = ${gravity}, humanBodyTemp = ${humanBodyTemp}, waterBoilingTemp = ${waterBoilingTemp} `)


// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

// - Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = countries

console.log(`fin = ${fin} est = ${est} , sw = ${sw}, den = ${den}, nor = ${nor}`)


const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}


// - Destructure the rectangle object by its properties or keys.


console.log(rectangle)

for(let xyz in rectangle){
    console.log(`${xyz} = ${} `)
}