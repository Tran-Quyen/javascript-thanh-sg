// 1===================================================
// Includes method: includes(); (chỉ có trong string và array)
// Dùng để kiểm tra xem chuỗi có con là chuỗi bên trong includes hay k0
// Với Mảng là kiểm tra xem có element trong includes hay k0

// console.log(Array.prototype.includes); //f includes()
// console.log(String.prototype.includes); //f includes()
// console.log(Date.prototype.includes); //undefined
// console.log(Object.prototype.includes); //undefined
// console.log(Number.prototype.includes); //undefined

//Sử dụng: includes(<el>,<start>);
// var title = 'Responsive web design';

// console.log(title.includes('web')); //true: start 0 => right
// console.log(title.includes('Hello')); //false
// console.log(title.includes('web', 0)); //start: 0 tìm từ vị trí số 0 => right (default)
// console.log(title.includes('web', 2)); //start: 2 => right

// 3 - 2 = 1 => right (length - start => right )
// console.log(title.includes('web', -2)); //start: -2 => right

// var courses = ['Javascript', 'PHP', 'Dart'];

// console.log(courses.includes('Javascript')); //true: start 0 => right
// console.log(courses.includes('Ruby')); //false
// console.log(courses.includes('Javascript', 0)); //true: start 0 => right (default)
// console.log(courses.includes('Javascript', 1)); //false: start 1 => right

// 3 - 1 = 2 => right (length - start => right )
// console.log(courses.includes('Javascript', -1));//false: start -1 => right

// Polyfill ? keyword: String includes
// 1 số trình duyệt cũ k0 support ES6 includes thì xài cách này (trên mozilla mdn)
// if (!String.prototype.includes) {
//   //kiểm tra xem có includes method có hay k0 k0 có thì vào
//   // Tự định nghĩa search là đoạn chuỗi muốn tìm kiếm start là từ vị trí nào
//   String.prototype.includes = function (search, start) {
//     'use strict'; //chế độ nghiêm ngặt

//     if (search instanceof RegExp) {
//       //Kiểm tra tính hợp lệ (k0 hợp lệ thì in ra error)
//       throw TypeError('first argument must not be a RegExp');
//     }
//     // kiểm tra xem có start hay k0? nếu k0 có thì gán start = 0
//     if (start === undefined) {
//       start = 0;
//     }
//     // this là thằng gọi tới method <ThangGoiToi>.includes(<el>,<start>);
//     return this.indexOf(search, start) !== -1; //Nếu khác -1 thì true nếu k0 thì false
//   };
// }
