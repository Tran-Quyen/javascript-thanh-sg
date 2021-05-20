// 1===================================================
/*
  4.Logical
  1. && - And --1 false => false het, true khi all đều true
  2. || - Or  --1 true => true het, false khi all đều false
  3. ! - Not  --Reverse: !true=false và !false=true
*/

// var a = 1,
//   b = 2,
//   c = 3;
// if (a < 0 && b > 0 && c > 0) {
//   console.log('DIEU KIEN DUNG!');
// } else {
//   console.log('DIEU KIEN SAI!!!');
// }

// if (a > 0 || b < 0 || c < 0) {
//   console.log('DIEU KIEN DUNG!');
// } else {
//   console.log('DIEU KIEN SAI!!!');
// }

// 2===================================================
/*
  DataType In JS
  1. Primitive Data - Dữ liệu nguyên thủy (đơn giản)
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol

  2. Complex Data - Dữ liệu phức tạp
  - Function
  - Object (Array)

  *Convert to: DataType(el);
*/

// Number type
// var a = 1;
// var b = -2;
// var c = 1.5;
// console.log(typeof a); //number

// Convert To Number
// console.log(Number('230'));

// String type
// var fullName = "Tran 'Quyen";
// var fullName = 'Tran "Quyen';
// var fullName = "Tran 'Quyen";
// var fullName = 'Tran "Quyen';
// console.log(fullName);
// console.log(typeof fullName); //string

// Convert To String
// console.log(String(234234234234));
// console.log((425345).toString());

// Boolean type
// var isSuccess = true;
// console.log(typeof isSuccess);//boolean

// Convert To Boolean
// console.log(Boolean('Hello'));

// Undefined type
// var age;
// console.log(age);
// console.log(typeof age); //undefined

// Null
// var isNull = null; //nothing
// console.log(isNull);
// console.log(typeof isNull); //object

// Symbol
// var id = Symbol('id'); //unique --duy nhất
// var id2 = Symbol('id'); //unique --duy nhất
// console.log(id);
// console.log(id2);
// console.log(id === id2);
// console.log(typeof id); //symbol

// Function
// var myFunction = function () {
//   alert('Hi. Xin chao cac ban!');
// };
// myFunction();
// console.log(typeof myFunction); //function

// Objects types (literal)
// var myObject = {
//   name: 'Tran Quyen',
//   age: 18,
//   address: 'Phu Tho',
//   myFunction: function () {},
// };
// console.log('myObject', myObject);
// console.log(typeof myObject); //object

// var myArray = ['JavaScript', 'PHP', 'Ruby'];
// console.log(myArray);
// console.log(typeof myArray); //object

// 3===================================================
// Comparison - P2
/*
  === và !== : dùng để so sánh tuyệt đối cả value và Datatype
  còn == và != chỉ so sánh value ( EX: 1 == '1' => true)
*/

// var a = 1;
// var b = '1';
// console.log("1 == '1'? " + (a == b));
// console.log("1 === '1'? " + (a === b));
// console.log("1 != '1'? " + (a != b));
// console.log("1 !== '1'? " + (a !== b));

// 4===================================================
// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh
//  Note: && thuộc 1 trong 6 Falsy là lấy đầu tiên gặp
//        || thuộc truthy (ngoài 6 Falsy) là lấy cái đầu tiên gặp

// var a = 1;
// var b = 2;
// var result = a < b && a < 0;
// console.log('result', result); //false

// Not Working with true
// result = 'A' && true && 'C' && 'D'; //D
// console.log('result', result); //true

// 6 Falsy: 0,false,null,undefined,NaN,'' _ "" _ ``
// Nếu nằm ngoài 6 giá trị Falsy thì lấy cái cuối gán lại
// result = 'A' && 'B' && 'C' && 'D'; //D
// console.log('result', result); //true

// Nếu gặp 1 trong 6 giá trị Falsy từ trái qua phải lần đầu tiên thì lấy luôn
// result = 'A' && null && 'C' && 'D'; //null
// console.log('result', result); //null => else

// Nếu gặp 1 trong 6 giá trị Falsy từ trái qua phải lần đầu tiên thì lấy luôn
// result = 'A' && undefined && false && 'D'; //undefined
// console.log('result', result); //undefined => else

// ngoài 6 Falsy thì lấy luôn (ngược lại &&) và gán lại
// result = 'A' || 'B' || 'C' || 'D';//A
// console.log('result', result);//true

// ngoài 6 Falsy thì lấy luôn (ngược lại &&) và gán lại
// result = 'A' || null || 'C' || 'D';//A
// console.log('result', result);//true

// ngoài 6 Falsy thì lấy luôn (ngược lại &&) và gán lại
// result = undefined || null || 'C' || 'D'; //C
// console.log('result', result);//true

// nếu toàn bộ thuộc vào 6 Falsy => lấy cái cuối
// result = undefined || null || false || NaN; //NaN vì nó cuối cùng
// console.log('result', result);//NaN => vào else

// if (result) {
//   console.log('DIEU KIEN DUNG!');
// } else {
//   console.log('DIEU KIEN SAI!!!');
// }
// 5=============================================================
/* String In JS
   1. Create String
   - Các cách tạo chuỗi
   - Nên dùng cách nào? lý do?
   - Kiểm tra data type

   2. Một số case sử dụng backslash(\)
   3. Xem độ dài chuỗi
   4. Chú ý độ dài khi viết code
   5. Template string ES6
*/
//1. Create String: có 2 cách tạo chuỗi
// var fullName = 'Tran Quyen'; //Nên sử dụng cách 1 vì nó là kiểu string
// var fullNameWay2 = new String('Tran Quyen');

// console.log(fullName);
// console.log('Type: ' + typeof fullName); //string

// console.log(fullNameWay2);
// console.log('Type: ' + typeof fullNameWay2); //object

// Check String In Real Project
// var myVar = 'Hello';
// if (typeof myVar === 'string' || myVar instanceof String) {
//   console.log("it 's a string");
// } else {
//   console.log("it 's something else");
// }

// 2. Một số case sử dụng backslash(\)
// var petName = "Milk is 'Super Man'";
// petName = 'Milk is "Super Man"';
// petName = 'Milk is \\Super Man\\';

// console.log(petName);

// 3. Xem độ dài chuỗi
// var fullName = 'Tran Quyen';
// console.log(fullName.length);

// 4. Chú ý độ dài khi viết code (Cố trình bày tối đa 80 ký tự trên 1 dòng)
// var text =
//   'Một số case sử dụng backslash\n' +
//   '1 - Một số case sử dụng backslash\n' +
//   '2 - Một số case sử dụng backslash\n' +
//   '3 - Một số case sử dụng backslash';

// console.log(text);

// 5. Template string ES6
// var firstName = 'Quyen';
// var lastName = 'Dang';

// Normal
// console.log('Toi la: ' + firstName + ' ' + lastName);
// Template ES6 (khi dùng `` và ${<variable>} sẽ tự convert sang string)
// console.log(`Toi la: ${firstName} ${lastName}`);

// 6=============================================================
// Work With String
// Keyword: JavaScript string methods
// var myString = 'Hoc JS From 0 to JS Hero!';

// 1.Length: .length
// console.log(myString.length);

// 2. Find Index: .indexOf(<String>,<Number>) (From 0 for first index)
// console.log(myString.indexOf('JS')); //4 --Tìm thấy JS đầu tiên
// console.log(myString.indexOf('ABC')); // -1 --k0 tìm thấy
// console.log(myString.indexOf('JS', 6)); //17 Tìm thấy JS đầu tiên từ vị trí thứ 6

// 17 Tìm thấy JS ở cuối cùng của chuỗi
// console.log(myString.lastIndexOf('JS'));

// Search (.search(<String>)) khác indexOf ở chỗ k0 có tham số start tìm kiếm
// và hỗ trợ tìm theo biểu thức chính quy
// console.log(myString.search('JS')); //4

// 3. Cut String: .slice(<start>,<end>)
// console.log(myString.slice(4, 6)); //cắt từ số 4 => 6
// console.log(myString.slice(4)); //cắt từ 4 => hết
// console.log(myString.slice(0)); //cắt hết (0 => hết)
// console.log(myString.slice(-5, -1)); //cắt từ phải qua trái thì ở cuối start từ 0 và trừ dần

// 4.Replace: .replace(<String>,<New String>)
// console.log(myString.replace('JS', 'JavaScript')); //thay chuỗi 'JS' đầu tiên và thay bằng 'JavaScript'
// // Sử dụng biểu thức chính quy để thay thế all: .replace(/<string>/g,'Another String');
// console.log(myString.replace(/JS/g, 'JavaScript'));
// console.log(myString.replaceAll('JS', 'JavaScript'));

// 5. Convert to upper case: .toUpperCase()
// console.log(myString.toUpperCase()); //Chuyển toàn bộ ký tự thành chữ hoa

// 6. Convert to lower case: .toLowerCase()
// console.log(myString.toLowerCase()); //Chuyển toàn bộ ký tự thành chữ thường

// 7.Trim: .trim()
// console.log('           Hoc JS From 0 to JS Hero!          '); //Chưa bỏ
// console.log('           Hoc JS From 0 to JS Hero!          '.trim()); //Khi đã bỏ Khoảng trắng đầu cuối

// 8.Split: .split(<Điểm Chung>) (thường xài cùng join)
// var languages = 'JavaScript, PHP, Ruby';
// tách chuỗi thành array dựa vào điểm chung
// console.log(languages.split(', '));
// tách chuỗi thành array chữ cái
// var common = 'Funny Day';
// console.log(common.split(''));

// 9.Get a character by index: charAt(<Number>);
// var myString2 = 'Quyen Dang';
// console.log(myString2.charAt(0)); //tìm ký tự tại vị trí 0
// console.log(myString2.charAt(20)); //k0 tìm thấy trả về ''

// Cach 2
// console.log(myString2[0]); //tìm ký tự tại vị trí 0
// console.log(myString2[20]); //k0 tìm thấy trả về undefined

// substring(start,end)
// var myString = 'Hom nay troi nang to!';
// console.log(myString.substring(8, 17));

// substr(start, length)
// var myString = 'Hom nay troi nang to!';
// console.log(myString.substring(0, 17));

// includes(<string>)
// var myString = 'Hom nay troi nang to!';
// console.log(myString.includes('nang'));

// 7===============================================================
/*
  Kiểu số (Number) trong javascript

  1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type

  2. Làm việc với Number
    - To string
    - To Fixed
*/

// 1.Create Number (Nên xài cách này)
// var age = 18;
// var PI = 3.14;

// Cách 2
// var otherNumber = new Number(9);

// console.log(typeof age);
// console.log(typeof otherNumber);

// var result = 20 / 'ABC';
// console.log(result); //NaN not a number

// Hàm check NaN: isNaN(<value>); kiểm tra xem số truyền vào có phải number hay k0
// console.log(isNaN(result)); //true

// var n = 20 / 1;
// console.log(isNaN(n)); //false

// 2. Làm việc với Number
// toString() => chuyển sang kiểu string
// var myString = age.toString();
// console.log(typeof myString);

// toFixed(<Phần Thập Phân>)
// console.log(PI.toString());
// console.log(PI.toFixed());
// console.log(PI.toFixed(3));
// console.log(typeof PI.toFixed());

// 8=============================================================
/*  Mảng trong JS - Array
    1.Tạo mảng
      - Cách tạo
      - Sử dụng cách nào? Tại sao?
      - Kiểm tra DataType
    2.Truy xuất mảng
      - Độ Dài Mảng
      - Lấy phần tử theo index
*/
// Nên dùng cách 1
// var languages = ['Javascript', 'PHP', 'Ruby', 'Dart', 5.5, null, undefined, function () {}, {}];

// console.log(languages);
// Cách 2 phải tạo Instance nên mất thời gian hơn
// var languages2 = new Array(
//   'Javascript',
//   'PHP',
//   'Ruby',
//   'Dart',
//   5.5,
//   null,
//   undefined,
//   function () {},
//   {}
// );

// console.log(languages2);

// console.log(typeof languages); //object
// console.log(typeof {}); //object
// Cách check Array bằng Array.isArray(<variable>);
// console.log(Array.isArray(languages));
// console.log(Array.isArray({}));

//  2.Truy xuất mảng
// console.log(languages.length);
// console.log(languages[0]);

// 9===============================================================
/* Làm việc với Array
    Keyword: JavaScript array methods
     1. To string
     2. Join
     3. Pop
     4. Push
     5. Shift
     6. Unshift
     7. Splicing
     8. Concat
     9. Slicing
     10. Reverse
*/

// var languages = ['JavaScript', 'PHP', 'Ruby', 'C++'];

// 1. To string: .toString()
// console.log(languages.toString()); //chuyển array thành chuỗi
// console.log(typeof languages.toString());

// 2. Join: .join(<el>)
// console.log(languages.join()); //tương tự toString
// console.log(languages.join(', ')); //có thể định dạng kiểu cách nhau (ngược lại split)

// 3.Pop: .pop()
// console.log(languages.pop()); //Xóa element cuối array và trả về phần tử đã xóa
// console.log(languages.pop());
// console.log(languages.pop());
// console.log(languages.pop()); //k0 còn element nào mà vẫn xóa sẽ trả về undefined
// console.log(languages);

//  4. Push: .push(<el1>,<el2>,...)
// console.log(languages.push('Dart')); //Thêm 1 phần tử vào cuối array và trả về length
// console.log(languages.push('Flutter', 'Java')); //Thêm nhiều phần tử vào cuối array và trả về length
// console.log(languages);

// 5.Shift: .shift()
// console.log(languages.shift()); //Ngược lại pop(): xóa 1 phần tử ở đầu array và trả về el đã xóa
// console.log(languages.shift());
// console.log(languages.shift());
// console.log(languages.shift());
// console.log(languages);

// 6. Unshift: .unshift(<el1>,<el2>,...) //Ngược lại push
// console.log(languages.unshift('Dart')); //Thêm 1 phần tử vào đầu array và trả về length
// console.log(languages.unshift('Flutter', 'Java')); //Thêm nhiều phần tử vào đầu array và trả về length
// console.log(languages);

// 7. Splicing: .splice(<start>,<How much Delete>,<el to insert>,<el to insert>,...)
// splice(5,3,'El1','El2') => Tìm đến vị trí index = 5, xóa 3 el từ vị trí đó về bên phải
// và thêm các el mới('El1', 'El2') vào array
// languages.splice(1, 0); //k0 xóa gì cả vì tham số thử 2 là 0
// languages.splice(1, 2); //Xóa phần tử từ vị trí trỏ tới start về cuối array cho đến khi xóa đủ số lượng <How much>
// languages.splice(1, 0, 'Dart');//Chèn vào vị trí start el 'Dart' và k0 xóa el nào cả
// languages.splice(1, 1, 'Dart');//Thay thế 'PHP' bằng 'Dart'
// console.log(languages);

// 8. Concat: .concat(<array2>)
// var languages2 = ['Dart', 'Flutter'];

// console.log(languages.concat(languages2)); //nối mảng 2 vào mảng sử dụng concat

// 9. Slicing: .slice(<start>,<end>)
// console.log(languages.slice(0)); //copy mảng (cắt từ 0 đến hết)
// console.log(languages.slice(1)); //cắt từ index 1 đến hết hết rồi trả về
// console.log(languages.slice(1, 3)); //cắt 1 phần của mảng từ index 1 đến index 2 rồi trả về mảng đã cắt
// console.log(languages.slice(-3, -1)); //cắt ngược (-1 là vị trí cuối cùng của array)

// 10. Reverse .reverse();
// console.log(languages);
// console.log(languages.reverse());

// 10============================================================
/*  Hàm(function) trong Javascript
    1. Hàm?
      - Một khối mã
      - Làm 1 việc cụ thể

    2. Loại hàm
      - Built-in
      - Tự định nghĩa

    3. Tính chất
      - Không thực thi khi định nghĩa
      - Sẽ thực thi khi được gọi
      - có thể nhận tham số
      - có thể trả về 1 giá trị
     4. Tạo hàm đầu tiên
*/

// Assign by value (Tham trị ) -- Not Object Type
// var a = 10;
// var b = a;
// b = a + 5;
// console.log(a);

// Asign by reference (Tham Chiếu) -- Object Type
// var arr = [1, 2, 3, 4, 5];
// var arr2 = arr;
// arr2.pop();
// console.log(arr);

// a-z A-Z 0-9 _ $ (số k0 được đưa lên đầu tiên)
// function showDialog() {
//   alert('Hello World!');
// }

// call()
// showDialog();

// 11============================================================
/*Tham số hàm - JS cơ bản
  1. Tham số?
    - Định nghĩa?
    - Data type?
    - Tính private
    - 1 tham số
    - nhiều tham số
  2. Truyền tham số
    - 1 tham số
    - Nhiều tham số
  3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
*/

// function writeLog(message, msg) {
//   console.log(message);
//   console.log(msg);
// }

// writeLog('Test Message', 135);
// writeLog(135); //135 và undifined
// writeLog(); //2 undefined

// Argument: Dùng để nhận toàn bộ tham số
// - chỉ dùng trong function (truyền nhiều giá trị?)
// console.log(1, 2, 3, 4, 5, 6);

// function useArgument() {
//   console.log(arguments);
// }

// useArgument('Log1', 'Log2', 'Log3');

// Sử dụng for of để duyệt arguments
// function show() {
//   var myString = '';
//   for (var param of arguments) {
//     myString += `${param} - `;
//   }
//   console.log(myString);
// }

// show('Log 1', 'Log 2', 'Log 3', 'Log 5', 'Log 6');

// Return trong hàm JS basic
// var isConfirm = confirm('Message?');
// console.log(isConfirm);//OK = true Cancle = false

// function sum(a, b) {
//   return a + b; //mặc định k0 trả về thì sẽ là undefined
//   console.log('123'); //các lệnh đằng sau khi return về thành công thì k0 chạy
// }
// var result = sum(15, 10);
// console.log(result);

// Shuffle Method (custom)
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// var arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);

/*
  Một số điều cần biết về function

  1.Khi function đặt trùng tên?
  2.Khai báo biến trong hàm?
  3.Định Nghĩa hàm trong hàm
*/

// function sau trùng tên sẽ ghi đè lên function trước
// function showMessage() {
//   console.log('Message 1');
// }

// function showMessage() {
//   console.log('Message 2');
// }

// function showMessage() {
//   console.log('Message 3');
// }

// showMessage();

// Khi khai báo biến function thì chỉ xài được trong function
// function showFullName() {
//   var fullName = 'Tran Quyen';
//   console.log('In Function: ' + fullName);
// }
// console.log('Outer Function: ' + fullName); // k0 xài được fullName trong function
// showFullName();

// function showMSG() {
//   function showMsg() {
//     console.log('From showMSG!');
//   }
//   showMsg();
// }
// showMSG();
// showMsg();//k0 gọi được hàm showMsg() trong showMSG()

/*
  Các loại function
  1. Declaration function
  2. Expression function
  3. Arrow function
*/

// showMessage(); //Declaration được hosting
// showMessage2(); //Expression k0 được hosting
// arrowFunction(); //Arrow k0 được hosting

// Declaration function (được hosting)
// hosting: TH này có nghĩa là có thể gọi ở bất kỳ đâu kể cả bên trên
// function showMessage() {
//   console.log('Declaration Function!');
// }

// Expression function (k0 được hosting)
// Điểm chung sau function k0 có tên cũng ok
// var showMessage2 = function () {
//   console.log('Expression Function!');
// };

// showMessage2();

// chỗ này nên đặt tên function
// setTimeout(function expressionFunction() {}, 1000);

// InObject
// var myObject = {
//   myFunction: function () {
//     console.log('Hello world');
//   },
// };

// myObject.myFunction();

// Arrow function (k0 được hosting)
// var arrowFunction = () => {
//   console.log('Arrow Function!');
// };

// arrowFunction();
