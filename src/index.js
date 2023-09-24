// var val1 = "var";
// console.log(val1);

// val1 = "var2";
// console.log(val1);

// var val1 = "var3";
// console.log(val1);

// let val2 = "let1";
// console.log(val2);
// val2 = "let2";
// console.log(val2);
// let val2 = "let3";
// console.log(val2);

// const val3 = "const1";
// console.log(val3);

// val3 = "const2";
// console.log(val3);

// const val4 = { name: "a", age: 28 };
// val4.name = "b";
// console.log(val4);

// const name = "isd";
// const age = 27;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

// function func1(str) {
//   return str;
// }

// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1"));

// const func2 = (str) => str;
// console.log(func2("func2"));

// const func3 = (num1, num2)=>{
//   return num1 + num2;
// }
// console.log(func3(10,20));

// const myProfile ={
//   name:"isd",
//   age:27,
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile = ['isd',27];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// //console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん。`);
// sayHello('isd');

// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
