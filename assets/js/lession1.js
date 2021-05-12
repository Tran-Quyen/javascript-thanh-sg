// Do something to show Hello World! :v
// alert('Hello From Alert Popup !');
// console.log('Hello From Console !');
// document.write('Hello From document.write !');

// 1===================================================
// Declare with var (variable)
// var fullName = 'Dang Tran Quyen';
// var age = 21;
// console.log('FullName: ' + fullName);
// alert('Age: ' + age);

// 2===================================================
/*
  Comment In JS

  1.Uses
  - Note
  - Disable

  2.Comments types
  - Comment Single Line
  - Comment Multiple Line

  3.Shortcut key
  - Windows: Ctrl + / and / + * + *
  - MacOS: Command + /
 */

// This is a command

/*
  Comment Multiple Line
  Comment Multiple Line
  Comment Multiple Line
*/

/**
 * @param {string,number}
 * return alert
 */

// 3===================================================
/*
  Introduce some functions built-in use usually
    1.alert (push to popup have ok btn)
    2.console (work with console)
    3.confirm (push to popup have ok btn and cancel btn)
    4.prompt (like confirm but have 1 more input)
    5.set timeout (after a period of time, the function is executed)
    6.set interval (every time, the function is executed)
*/

// alert('Sign Up Successfully!');
// confirm('Are You Sure?');
// prompt('What is your name?');

// var msg = 'This is a message!';
// console.log(msg); //hay dùng để debug
// console.warn(msg);
// console.error(msg);
// console.table(['A', 'B', 'C', 'D', 5]); //cực kỳ hữu ích khi debug vì nhìn dưới dạng bảng
// console.table({ name: 'Quyen Dang', age: 19, address: 'Phu Tho' }); //cực kỳ hữu ích khi debug vì nhìn dưới dạng bảng

// Sau 2000ms thì thực hiện hàm đúng 1 lần sau khi được gọi tới clearTimeout
// setTimeout(() => {
//   alert('This is a popup after 2s');
// }, 5000);

// Cứ mỗi 1000ms thì thực hiện hàm clearInterval
// setInterval(() => {
//   console.log('Day la log ' + Math.random() * 10);
// }, 1000);

// 4===================================================
/*
  Introduce about operator in js
    1.Toán tử số học - Arithmetic
    2.Toán tử gán - Assignment
    3.Toán tử so sánh - Comparison
    4.Toán tử logic - Logical
*/

/*
 1.Arithmetic
 +   --> Plus => Cộng và Nối chuỗi
 -   --> Minus
 *   --> Multiply
 **  --> Exponential (Lũy thừa)
 /   --> Divide
 %   --> Divide get surplus
 ++  --> Increase by 1
 --  --> Reduced by 1
*/

// Test with another operator
// var a = 5;
// var b = 2;

// var c = a % b;
// console.log('c = ' + c);

// 6===================================================
// Prefix and Postfix

// var a = 6;
// console.log(a);
// console.log(++a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a--);
// console.log(a);

// var output = a++ + --a;
// a đầu lưu vào 6 xong tăng lên sang a sau phải là 7 rồi --7 = 6
// 6 + --7 = 6 + 6 = 12
// console.log(output);
// console.log(a);

// output = ++a * 2 - a-- * 2;
// console.log(output);
// 7 * 2 - 7 * 2 = 0
// console.log(output);

// 7===================================================
/*
  2.Assignment
  Toán tử    Ví dụ      Tương đương
  =          x = y      x = y
  +=         x += y     x = x + y
  -=         x -= y     x = x - y
  *=         x *= y     x = x * y
  /=         x /= y     x = x / y
  %=         x %= y     x = x % y
  **=        x **= y    x = x ** y
*/

// Test More Example
// var a = 2;
// a *= 5;
// console.log(a);

// 8===================================================
// String operator -- Toán tử chuỗi

// var firstName = 'Quyen';
// var lastName = 'Tran';

// console.log(firstName + ' ' + lastName);

// var name = firstName;
// name += ' ' + lastName;
// console.log(name);

// var a = '10' + 5;
// var b = '10' - 5;
// var c = 10 + '5';
// var d = 10 - '5';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// 9===================================================
/*
  3.Comparison
  Toán tử             Ý Nghĩa
  ==                  So sánh bằng (Equal)
	===				          So sánh bằng (Equal) => so sánh cả về DataType
  !=                  So sánh không bằng (Not equal)
	!==				          So sánh không bằng (Not equal) => so sánh cả về DataType
  >                   Lớn hơn (Greater than)
  <                   Nhỏ hơn (Less than)
  >=                  Lớn hơn hoặc bằng (Greater or equal)
  <=                  Nhỏ hơn hoặc bằng (Less or equal)
*/

// var a = 'Dang Tran Quyen';
// var b = 'Dang TrAn Quyen';

// // Test More Example
// if (a > b) {
//   // a > A <=> 97 > 65
//   console.log('Dieu Kien Dung!');
// } else {
//   console.log('Dieu Kien Sai!!!');
// }

// 10===================================================
// Boolean --true/false

// var isSuccess = true;
// console.log(isSuccess);
// console.log(!isSuccess);
// var a = 5,
//   b = 2;
// console.log(5 > 2);

// 11===================================================
/*
  if - else
  *Note: Ngoài 6 giá trị Falsy bên dưới tất cả đều là true (Truthy)
  0             	  null
  false         	  NaN
  '' _ "" _ ``      undefined
*/

// var isSuccess = 1 > 2;
// if (isSuccess) {
//   console.log('DIEU KIEN DUNG!');
// } else {
//   console.log('DIEU KIEN SAI!!!');
// }

// var name = '0';
// if (name) {
//   console.log('DIEU KIEN DUNG!');
// } else {
//   console.log('DIEU KIEN SAI!!!');
// }

// var score = prompt('Nhập điểm bạn:');
// if (score >= 8) {
//   console.log('Gioi');
// } else if (score >= 6.5) {
//   console.log('Kha');
// } else if (score >= 5) {
//   console.log('Trung Binh');
// } else {
//   console.log('Yeu');
// }

// Toán tử 3 ngôi
// var isOn = true;
// var light = isOn ? 'Bat' : 'Tat';
// console.log(light);

// Switch-case (break default - return)
// var month = 8;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12: {
//     console.log('31');
//     break;
//   }
//   case 2: {
//     console.log('28 hoặc 29');
//     break;
//   }
//   case 4:
//   case 6:
//   case 9:
//   case 11: {
//     console.log('30');
//   }
//   default: {
//     console.log('K0 có tháng này');
//     break;
//   }
// }
