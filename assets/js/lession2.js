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
