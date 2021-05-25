// 1===================================================
/*Object trong JS
  key: <value>,
*/

// Function -> method/phương thức
// Others -> properties/thuộc tính

// var myInfo = {
//   name: 'Quyen Dang', //cách 1
//   age: 18,
//   address: 'Ha Noi, VN',
//   'how-much': 10, //cách 2
//   getName: function () {
//     return this.name; //tương đương myInfo.name
//   },
//   getAge: function () {
//     return this.age;
//   },
//   book: {
//     id: 1,
//     name: 'Lord Founder',
//   },
// };

// console.log(myInfo);

//  Thêm key-value
//  Cách 1
// myInfo.email = 'quyenutt2000@gmail.com';
// console.log(myInfo);

// Cách 2
// myInfo['my-pet'] = 'Susan';
// console.log(myInfo);

// Lấy ra value dựa vào key
// console.log(myInfo.name); //C1:
// console.log(myInfo.not); //khi k0 có key trong obj thì trả về undefined
// console.log(myInfo['my-pet']); //C2

// Nên xài cách 2 trong TH này:
// var myKey = 'address';
// console.log(myInfo[myKey]);

// Sử dụng function trong object
// console.log(myInfo.getName);
// console.log(typeof myInfo.getName);
// console.log(myInfo.getName());

// Tạo key bằng cách khai báo
// var bookKey = 'ID';
// var myBook = {
//   [bookKey]: 'bk01', // ID: 'bk01' thì nó sẽ lấy key từ bookKey
//   name: 'JS BOM',
//   'sale-5': true,
// };

// console.log(myBook);

//Xóa key
// delete myBook.name; //C1
// console.log(myBook);

// delete myBook['sale-5']; //C2
// console.log(myBook);

// 2=====================================================================
// Object constructor (Xây Dựng Đối Tượng/Hàm Tạo/Bản Thiết Kế)
// Lý do: Để hkông phải khởi tạo các đối tượng với các properties
// cũng như method chung lặp lại nhiều lần(Tốn công) => Object constructor
// Quy ước: Viết hoa chữ cái đầu của mỗi từ (thường là danh từ)

// Declaration function
//avatar = 'author' author là giá trị mặc định khi khuyết tham số
// function User(firstName, lastName, avatar = 'author') {
//   // properties
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   // methods
//   this.getName = () => {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// var user1 = new User('Quyen', 'Dang');
// var user2 = new User('Loan', 'Phuong', 'manager');
// console.log(user1);
// console.log(user1.getName());
// console.log(user2);

// Expression function
// var MyBook = function (id, name, price) {
//   this.id = id;
//   this.name = name;
//   this.price = price;

//   this.getInfo = function () {
//     return `${this.name}: ${this.price}`;
//   };
// };

// 3=====================================================================
// String, Array, Number, Date đều là Object constructor (build-in)
// var author = new User('Quyen', 'Dang', 'Author');
// var user = new User('Quang', 'Le', 'User');

// console.log(author); //ở __proto__ sẽ thấy constructor
// console.log(user);
// console.log(author.constructor); //xem Bản thiết kế (constructor)
// console.log(author.constructor === User); //true: check xem có phải là constructor User k0

// thêm đặc tính khác nhau của mỗi User
// author.title = 'Chia sẻ lập trình';
// user.comment = `Có Gì Hot Không AD`;

// console.log(author);
// console.log(user);

// Xài method trong User
// console.log(author.getName());
// console.log(user.getName());

// 4=====================================================================
/*
  Object prototype - Basic

  1.Prototype là gì?
  2.Sử dụng khi nào?
*/
// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// Khi được add thì các properties và method sẽ nằm trong __proto__
// Thêm properties vào User thông qua prototype
// User.prototype.className = 'JS'; //properties k0 thể fix dynamic như các properties trong constructor

// Thêm method vào User thông qua prototype
// User.prototype.getClassName = function () {
//   return this.className + ' ' + this.avatar;
// };

// var author = new User('Quyen', 'Dang', 'Author');
// var user = new User('Quang', 'Le', 'User');

// console.log(author);
// console.log(user);

// Sử dụng như bình thường
// console.log(author.className);
// console.log(author.getClassName());

// 5=====================================================================
/*
  Đối tượng Date (build-in)
  Keyword: Date method
*/
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var newDate = Date(); //k0 thể truy xuất các properties và method của Date Object
// console.log(newDate);
// console.log(typeof newDate);

// var year = date.getFullYear();
// var month = date.getMonth() + 1; //getMonth() từ 0 -> 11
// var day = date.getDate();
// var hour = date.getHours();
// var minute = date.getMinutes();
// var second = date.getSeconds();

// console.log(`${day}/${month}/${year}`); //dd-MM-yyyy
// console.log(`${hour}:${minute}:${second}`); //hh:mm:ss

// 6=====================================================================
/*
  Câu lệnh rẽ nhánh - if else
*/
// Nếu bài toán chỉ cần 1 kết quả tại 1 thời điểm
// thì k0 nên chỉ xài if vì nó sẽ xét nhiều lần dù cái đầu tiên đã đúng
// var date = 2;

// Cách này khi xét tại 1 thời điểm chỉ cho về 1 kết quả và khi đúng sẽ k0 xét nữa
// if (date === 2) {
//   console.log('Hôm nay là thứ 2');
// } else if (date === 3) {
//   console.log('Hôm nay là thứ 3');
// } else if (date === 4) {
//   console.log('Hôm nay là thứ 4');
// }
// else {
//   console.log('Hôm nay k0 phải thứ 2,3,4');
// }

/*
  Câu lệnh rẽ nhánh - switch case (break)
*/
// var dayOfWeek = new Date().getDay() + 1;

// switch (dayOfWeek) {
//   case 2: //===
//     console.log('Hôm nay là thứ 2');
//     break;
//   case 3:
//     console.log('Hôm nay là thứ 3');
//     break; //nếu k0 có break nó sẽ lọt vào các case sau nó
//   // cho đến khi gặp break hoặc đến case cuối thực thi xong mới thoát
//   case 4:
//     console.log('Hôm nay là thứ 4');
//     break;
//   case 5:
//     console.log('Hôm nay là thứ 5');
//     break;
//   case 6:
//     console.log('Hôm nay là thứ 6');
//     break;
//   case 7:
//     console.log('Hôm nay là thứ 7');
//     break;
//   case 1:
//     console.log('Hôm nay là chủ nhật');
//     break;
//   default:
//     //Nếu k0 thuộc case nào sẽ vào default
//     console.log('Không có ngày này!');
//     break;
// }

// var month = new Date().getMonth() + 1;

// switch (month) {
//   case 1:
//   case 2:
//   case 3:
//     console.log(`Tháng ${month} thuộc Quý 1`);
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log(`Tháng ${month} thuộc Quý 2`);
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log(`Tháng ${month} thuộc Quý 3`);
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log(`Tháng ${month} thuộc Quý 4`);
//     break;
//   default:
//     console.log('Không có quý này!');
//     break;
// }

// Dùng khi nào: if else chỉ xét tính đúng sai hoặc sử dụng trên 1 khoảng ,
// sử dụng switch case khi biết trước giá trị và số giá trị > 3

// Toán tử 3 ngôi - Ternary operator - chỉ sử dụng trong những TH đơn giản
// var course = {
//   name: 'Javascript',
//   coin: 250,
// };

// if (course.coin > 0) {
//   console.log(`${course.coin} Coins`);
// } else {
//   console.log('Miễn phí');
// }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
// console.log(result);

// var a = 1,
//   b = 2;
// var c = a > 0 ? a : b;

// 7=====================================================================
/*
  Vòng lặp - Loop
  1. for - Lặp với điều kiện đúng (Lặp xác định)
  2. for/in - Lặp qua key của object (Array,Object,String)
  3. for/of - Lặp qua value của object  (Array,String)
  4. while - Lặp khi điều kiện đúng (Lặp K0 xác định)
  5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng (Lặp K0 xác định)
*/
// 1. For Loop  for(start;condition for stop;jump){//Code}
// In các số từ 1 -> 1000
// for (var i = 1; i <= 1000; i++) {
//   // Code Here
//   console.log(i);
// }

// var i = 1;
// for (; i <= 1000; i++) {
//   // Code Here
//   console.log(i);
// }

// var i = 1;
// for (; i <= 1000; ) {
//   // Code Here
//   console.log(i);
//   i++;
// }

// var i = 0;
// for (; i < 1000; ) {
//   // Code Here
//   i++;
//   console.log(i);
// }

// 1 số trường hợp vô hạn: khi condition để trống for(start;;jump)
// khi condition là true for(start;true;jump)
// khi condition k0 có điểm dừng for(;i>0;i++)

// For Loop dùng để duyệt mảng
// var myArray = ['Javascript', 'PHP', 'Java', 'Dart', 'Ruby', 'Python'];
// var arrayLength = myArray.length; //Nên viết bên ngoài vì viết trong for sẽ làm giảm hiệu năng 1 số trình duyệt

// for (var i = 0; i < arrayLength; i++) {
//   console.log(myArray[i]);
// }

// 2. for/in - Lặp qua key của object (Array,Object,String)
// Thường sử dụng để lấy ra key của các object

// With Object
// var myInfo = {
//   id: 1,
//   name: 'Quyen Dang',
//   age: 18,
//   address: 'Viet Tri - Phu Tho',
// };

// for (var key in myInfo) {
//   console.log(`${key}: ${myInfo[key]}`);
// }

// With Array
// var languages = ['Javascript', 'PHP', 'Ruby', 'Java'];

// for (var index in languages) {
//   console.log(`${index} - ${languages[index]}`);
// }

// With String
// var myString = 'Javascript';
// for (var character in myString) {
//   console.log(`${character} - ${myString[character]}`);
// }

// 3. for/of - Lặp qua value của object  (Array,String)
// With Array
// var languages = ['JavaScript', 'PHP', 'Java'];

// for (var value of languages) {
//   console.log(value);
// }

// With String
// var myString = 'Javascript';

// for (var value of myString) {
//   console.log(value);
// }

//With Object phải biến đổi mới xài được for/of
// var myInfo = {
//   id: 1,
//   name: 'Quyen Dang',
//   age: 18,
//   address: 'Viet Tri - Phu Tho',
// };

// // Sử dụng Object.keys(myInfo) để lấy ra array keys
// var arrayKey = Object.keys(myInfo); //Mảng key của myInfo
// console.log(arrayKey);

// for (var key of arrayKey) {
//   console.log(`${key}: ${myInfo[key]}`);
// }

// Sử dụng Object.keys(myInfo) để lấy ra array value
// var arrayValue = Object.values(myInfo); //Mảng Value của myInfo
// console.log(arrayValue);

// for (var value of arrayValue) {
//   console.log(`${value}`);
// }

// 4. while - Lặp khi điều kiện đúng (Lặp K0 xác định)
// var i = 0;

// //điều kiện dừng
// while (i < 1000) {
//   i++; //bước nhảy
//   console.log(i);
// }

// var myArray = ['Javascript', 'PHP', 'Ruby'];

// var i = 0;
// var arrayLength = myArray.length;
// while (i < arrayLength) {
//   console.log(myArray[i]);
//   i++;
// }

// 5. do /while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng (Lặp K0 xác định)
// var i = 0;

// do {
//   // code
//   i++;
//   console.log(i);
// } while (i < 10);

// Example: thực hiện ít nhất 1 lần
// var i = 0;

// do {
//   // code
//   i++;
//   console.log(i);
// } while (i < 0);

// Ứng dụng Nạp Thẻ
// var i = 0;
// var isSuccess = false;
// do {
//   i++;
//   console.log('Nạp thẻ lần ' + i);

//   // Thành công
//   if (false) {
//     isSuccess = true;
//   }
// } while (!isSuccess && i < 3); //nếu nạp k0 thành công và số lần nạp < 3
// thì lặp tiếp đến khi điều kiện sai thì thoát sai khi isSuccess = true || i>=3

// Break & Continue in Loop
// for (var i = 0; i < 10; i++) {
//   // if (i % 2 !== 0) {
//   //   continue; //bỏ qua
//   // }

//   console.log(i);

//   // if (i >= 5) {
//   //   break; //dừng lại
//   // }
// }

// Nested Loop - Vòng lặp lồng nhau
// Access mảng 2 chiều
// var myArray = [
//   [1, 2], //00 01
//   [3, 4], //10 11
//   [5, 6], //20 21
// ];
// var myArrayLength = myArray.length;
// for (var i = 0; i < myArrayLength; i++) {
//   var subArrayLength = myArray[i].length;
//   for (var j = 0; j < subArrayLength; j++) {
//     // console.log('i = ' + i + ' j = ' + j);
//     console.log(myArray[i][j]);
//   }
// }

// Ví dụ duyệt ngược
// for (var i = 100; i > 0; i--) {
//   console.log(i);
// }

// Tìm số chia hết cho 5;
// for (var i = 0; i <= 100; i += 5) {
//   console.log(i);
// }

// for (var i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

// 8=====================================================================
/*
  Array Methods: --Sinh ra để code ngắn gọn hơn và hay sử dụng trong thực tế
  1.  forEach()
  2.  every()
  3.  some()
  4.  find()
  5.  filter()
  6.  map()
  7.  reduce()
*/
// var courses = [
//   {
//     id: 1,
//     name: 'Javascript',
//     coin: 0,
//   },
//   {
//     id: 2,
//     name: 'HTML, CSS',
//     coin: 250,
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//     coin: 0,
//   },
//   {
//     id: 4,
//     name: 'PHP',
//     coin: 400,
//   },
//   {
//     id: 5,
//     name: 'ReactJS',
//     coin: 500,
//   },
//   {
//     id: 6,
//     name: 'Ruby',
//     coin: 50,
//   },
// ];

//1. forEach(<function>) *Note: truyền hàm dưới dạng tham số => callback
// Duyệt qua phần tử của array
// courses.forEach(function (course, index, arr) {
//   console.log(index, course, arr);
// });

//2. every() giúp kiểm tra all el của mảng thỏa mãn 1 điều kiện gì đấy trả về boolean (thinking about falsy)
// Kiểm tra xem các khóa học đều free hay k0
// var isFree = courses.every(function (course, index, arr) {
//   console.log(index, course.coin === 0, arr);
//   return course.coin === 0;
// });
// console.log(isFree);

//3. some() giúp kiểm tra có ít nhất 1 el của mảng thỏa mãn 1 điều kiện gì đấy trả về boolean (thinking about truthy)
// Kiểm tra xem có khóa học nào free hay k0
// var isFree = courses.some(function (course, index, arr) {
//   console.log(index, course.coin === 0, arr);
//   return course.coin === 0;
// });
// console.log(isFree);

//4. find() giúp tìm kiếm và trả về 1 el thỏa mãn điều kiện đó nếu k0 tìm thấy trả về undefined
// Trong TH có 2 el trở lên tm điều kiện thì trả về el đầu tiên tìm thấy
//  Tìm kiếm xem có khóa học mình cần hay k0
// var isFree = courses.find(function (course, index, arr) {
//   console.log(index, course.name === 'Ruby', arr);
//   return course.name === 'Ruby';
// });
// console.log(isFree);

// var nothings = [];
// var isOK = nothings.find(function (nothing, index) {
//   console.log(index);
//   return nothing.atk === 0;
// });
// console.log(isOK);

//5. filter() giúp tìm kiếm và trả về array el thỏa mãn điều kiện đó nếu k0 tìm thấy trả về undefined
// Tìm kiếm xem có khóa học mình cần hay k0
// var listCourse = courses.filter(function (course, index, arr) {
//   console.log(index, course.name === 'Ruby', arr);
//   return course.name === 'Ruby';
// });
// console.log(listCourse);

// Tìm điểm chung giữa 2 array
// var array1 = [1, 2, 3, 4, 5, 6];
// var array2 = [2, 4, 6, 8];

// function findEqualValues(array1, array2) {
//   return array1.filter((item) => array2.includes(item));
// }

// console.log(findEqualValues(array1, array2));

// var courses = [
//   {
//     id: 1,
//     name: 'Javascript',
//     coin: 0,
//   },
//   {
//     id: 2,
//     name: 'HTML, CSS',
//     coin: 250,
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//     coin: 0,
//   },
//   {
//     id: 4,
//     name: 'PHP',
//     coin: 400,
//   },
//   {
//     id: 5,
//     name: 'ReactJS',
//     coin: 500,
//   },
//   {
//     id: 6,
//     name: 'Ruby',
//     coin: 50,
//   },
// ];

//6. map()
// originArray là root array trỏ tới cùng vùng nhớ của courses nó trả về data root array truyền vào,
// (course, index, originArray) => (course, index) k0 cần truyền vẫn xài
// được originArray được nên ít khi phải sử dụng tham số
// Bổ sung thông tin và tạo mảng mới từ courses

// function courseHandler(course, index) {
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `${course.coin !== 0 ? `Gia: ${course.coin}` : `Free`}`,
//     index: index,
//     originArray: courses, //originArray courses => data root của array
//     // và couse => data root của 1 el trong array courses
//   };
// }

// console.log('Old Array: ', courses);
// var newCourses = courses.map(courseHandler);
// console.log('New Array', newCourses);

//7. reduce() giúp chúng ta xử lý trả về 1 kết quả duy nhất
// Tính tổng tiền các khóa học
// Sử dụng loop
// var totalCoin = 0;
// for (var course of courses) {
//   totalCoin += course.coin;
// }

// console.log(totalCoin);

// Sử dụng reduce (Giải thích)
// accumulator là biến lưu trữ và nó sẽ gán bằng <initial value>
// currentValue là giá trị hiện tại
// currentIndex là vị trí hiện tại
// originArray là root array trỏ tới cùng vùng nhớ của courses nó trả về data root array truyền vào

// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   i++;
//   var total = accumulator + currentValue.coin;
//   console.table({
//     'Lượt chạy: ': i,
//     'Biến tích trữ: ': accumulator,
//     'Giá khóa học': currentValue.coin,
//     'Tích trữ được': total,
//   });

//   // console.log(currentIndex, currentValue);//trả vê el của mảng mà nó đang trỏ tới

//   return total; //return cái gì thì accumulator gán bằng cái đó
// }

// var totalCoin = courses.reduce(coinHandler, 0); //(function,<initial value>) <intinal value> có thể là bất kỳ datatype gì mà bạn mong muốn trả về
// console.log(totalCoin);

// Khi xài thực tế sẽ ngắn gọn hơn
// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.coin;
// }, 0); //(function,<initial value>) <intinal value> có thể là bất kỳ datatype gì mà bạn mong muốn trả về
// console.log(totalCoin);

// Cụ thể
// var totalCoin = courses.reduce(function (total, course) {
//   return total + course.coin;
// }, 0); //(function,<initial value>) <intinal value> có thể là bất kỳ datatype gì
// console.log(totalCoin);

// Note: Khi k0 truyền initial value thì lần 1 accumulator sẽ lây thằng đầu và currentValue lấy thằng thứ 2
// còn khi sử dụng initial value thì sẽ lần 1 chỉ lấy initial value và value của thằng đầu tiên trong array
// và lấy luôn kiểu data của el đầu tiên trong arr để làm kiểu trả về

// Sử dụng k0 truyền khi kiểu trả về đã đúng mong muốn như ví dụ
// var numbers = [100, 200, 220, 200, 480];
// var totalNumber = numbers.reduce(function (total, number) {
//   return total + number;
// });

// var totalNumber = numbers.reduce((total, number) => total + number);
// console.log(totalNumber);

// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// console.log(depthArray);

// var flatArray = depthArray.reduce((flatOutput, depthItem) => {
//   return flatOutput.concat(depthItem);
// }, []); //trả về array

// console.log(flatArray);

// Lấy ra các khóa học đưa vào mảng mới
// var topics = [
//   {
//     topic: 'Front-end',
//     courses: [
//       {
//         id: 1,
//         title: 'HTML, CSS',
//       },
//       {
//         id: 2,
//         title: 'Javascript',
//       },
//     ],
//   },
//   {
//     topic: 'Back-end',
//     courses: [
//       {
//         id: 1,
//         title: 'PHP',
//       },
//       {
//         id: 2,
//         title: 'NodeJS',
//       },
//     ],
//   },
// ];

// var newCourses = topics.reduce((courses, topic) => {
//   return courses.concat(topic.courses);
// }, []); //trả về array

// console.log(newCourses);

// var htmls = newCourses.map((course) => {
//   return `
//   <div>
//     <h2>ID: ${course.id}</h2>
//     <p>Title: ${course.title}</p>
//   </div>
//   `;
// });

// console.log(htmls);

// console.log(htmls.join(''));
// var divNode = document.getElementById('courses');

// console.log(divNode);
// divNode.innerHTML = htmls.join('');
