// 1=====================================================================
/*
   Math object (built-in object)

   - Math.PI
   - Math.round()
   - Math.abs()
   - Math.ceil()
   - Math.floor()
   - Math.random()
   - Math.min()
   - Math.max()
*/

// Math.PI - lấy số PI
// console.log(Math.PI);

// Math.round() - làm tròn cả trên cả dưới
// console.log(Math.round(3.5));
// console.log(Math.round(3.4));

// Math.abs() lấy trị tuyệt đối
// console.log(Math.abs(-30));
// console.log(Math.abs(10));

// Math.ceil() chỉ làm tròn trên
// console.log(Math.ceil(3.5));
// console.log(Math.ceil(3.4));

// Math.floor() chỉ làm tròn dưới
// console.log(Math.floor(3.9));
// console.log(Math.floor(3.4));

// Math.random() random các số
// console.log(Math.floor(Math.random() * 10));

// Khi làm game
// var random = Math.floor(Math.random() * 5);
// var bonus = ['10 coin', '20 coin', '30 coin', '40 coin', '50 coin', '60 coin'];
// console.log(bonus[random]);

// var random = Math.floor(Math.random() * 100);
// if (random < 50) {
//   console.log('Cường hóa thành công!');
// }

//  Math.min() tìm ra số nhỏ nhất
// console.log(Math.min(-100, 1, 90, 50, 40));

//  Math.max() tìm ra số lớn nhất
// console.log(Math.max(-100, 1, 90, 50, 40));

// 2=====================================================================
/*Callback ?
  Là hàm (function) được truyền qua đối số
  Khi gọi hàm khác

  1.Hàm
  2.Được truyền qua đối số
  3.Được gọi lại (trong hàm nhận đối số)
*/

// function myFunction(param) {
//   // Nên có điều kiện để check tham số truyền vào có phải function hay k0
//   if (typeof param === 'function') {
//     param('Học lập trình');
//   }
// }

// function myCallBack(value) {
//   console.log('Value: ', value);
// }
// myCallBack(123);
// myFunction(myCallBack);

// var courses = ['Javascript', 'PHP', 'Ruby'];

// var htmls = courses.map(function (course) {
//   // Anonymous function
//   return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));

// Các method của array đều sử dụng callback (forEach,find,filter,every,some,map,reduce)
// Tái hiện hàm map với map2 (chỉ là base)
// console.log(Array.prototype); // __proto__
// Array.prototype.map2 = function (callback) {
//   var newArray = [],
//     length = this.length; //tạo mảng rỗng để truyền các giá trị trả về

//   //lặp qua độ dài của this (đối tượng gọi map2 method)
//   for (var i = 0; i < length; i++) {
//     //sử dụng hàm truyền vào 2 tham số this[i] (value), i (index) và this(currentArray)
//     // rồi lưu kết quả vào returnValue
//     var returnValue = callback(this[i], i, this); //currentValue,currentIndex, originArray
//     newArray.push(returnValue); //Đưa giá trị trả về vào mảng mới
//   }

//   return newArray; //Trả về mảng mới
// };

// var htmls = courses.map2(function (course) {
//   //đĩnh nghĩa hàm để sử dụng callback
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

// BTVN: tái hiện forEach,find,filter,every,some,reduce
// Kiến thức:
// Object Prototype
// For Loop
// hasOwnProperty
// Data for testing
// var courses = [
//   { id: 1, name: 'Javascript', price: 500 },
//   { id: 2, name: 'Dart', price: 0 },
//   { id: 3, name: 'Ruby', price: 500 },
//   { id: 4, name: 'PHP', price: 0 },
//   { id: 5, name: 'NodeJS', price: 500 },
// ];

// forEach2
// Array.prototype.forEach2 = function (callback) {
//   for (index in this) {
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     }
//   }
// };

// courses.forEach2((course, index) => {
//   console.log(index, course);
// });

// find2
// Array.prototype.find2 = function (callback) {
//   for (index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (result) {
//         return this[index];
//       }
//     }
//   }
//   return undefined;
// };

// var rubyCourse = courses.find2((course, index) => {
//   return course.name === 'Ruby';
// });

// console.log(rubyCourse);

// filter2
// Array.prototype.filter2 = function (callback) {
//   var output = [];

//   for (index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }

//   return output;
// };

// var price500 = courses.filter2((course, index) => {
//   return course.price > 0;
// });

// console.log(price500);

// every2
// Array.prototype.every2 = function (callback) {
//   for (idx in this) {
//     if (this.hasOwnProperty(idx)) {
//       var result = callback(this[idx], idx, this);
//       if (!result) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// var test = courses.every2((course, index) => {
//   console.log(index, course.price);
//   return course.price > -1;
// });

// console.log('test', test);

// some2
// Array.prototype.some2 = function (callback) {
//   for (idx in this) {
//     if (this.hasOwnProperty(idx)) {
//       var result = callback(this[idx], idx, this);
//       if (result) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// var test = courses.some((course, index) => {
//   console.log(index, course.price);
//   return course.price > 0;
// });

// console.log('test', test);

// reduce2
// Array.prototype.reduce2 = function (callback, result) {
//   var i = 0,
//     length = this.length;

//   //Nếu số lượng tham số lớn hơn < 2
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0]; // result = giá trị đầu tiên của array
//   }

//   while (i < length) {
//     result = callback(result, this[i], i, this);
//     i++;
//   }

//   return result;
// };

// var sum = courses.reduce2((totalPrice, course) => {
//   return totalPrice + course.price;
// }, 0);

// console.log(sum);

// Empty element of array

// var courses = ['Javascript', 'PHP'];
// courses.length = 10;
// Dùng vòng for thường sẽ duyệt qua cả empty elêmnt và phần tử thực
// for (var i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }

// Nên sử dụng for/in để duyệt các phần tử thực tránh empty element
// for (var index in courses) {
//   console.log(courses[index]);
// }

// var arr = new Array(10); // TH tạo mảng 10 element cũng tạo ra empty element
// console.log(arr); // 10 empty elements
// arr.push('JS', 'C#');
// console.log(arr); // 12 value: 10 empty elements và 2 value mới push vào

// var arr2 = new Array(10, 12, 'Hello'); // Truyền ít nhất 2 giá trị thì các giá trị đưa vào sẽ là element của array
// console.log(arr2);

// Lọc trùng với Set
// var arr = ['a', 'b', 'c', 'a', 'b', 'c'];

// Set (đặc tính các phần tử trong Set k0 được trùng nhau)
// console.log(new Set(arr));
// Toán tử ... new Set(arr): Set(3){'a','b','c'} => 'a','b','c'
// console.log([...new Set(arr)]); // Convert sang array

// Đệ quy
/*
A -> Loop -> CPU
A -> Recursion --> RAM (memory overflow)
Functional Programing
*/

/*
Usage:
  1.Xác định điểm dừng
  2.Logic handle => Tạo ra điểm dừng
*/

// function countDown(num) {
//   if (num > 0) {
//     console.log(num);
//     return countDown(num - 1);
//   }
//   return num;
// }

// console.log(countDown(5));

// Mô phỏng bằng đệ quy
// function loop(start, end, callback) {
//   if (start < end) {
//     callback(start);
//     return loop(start + 1, end, callback);
//   }
// }

// loop(1, 11, (i) => {
//   console.log(i);
// });

// var arr = ['JS', 'PHP', 'Ruby'];
// loop(0, arr.length, (i) => {
//   console.log(arr[i]);
// });

// function run(x, y, output = []) {
//   var value = x + 1;
//   if (x < y - 1) {
//     output.push(value);
//     return run(value, y, output);
//   }

//   return output;
// }

// var arr = run(0, 10);
// console.log(arr);

// Tính giai thừa 5!
