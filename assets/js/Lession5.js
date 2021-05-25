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

var courses = ['Javascript', 'PHP', 'Ruby'];

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
