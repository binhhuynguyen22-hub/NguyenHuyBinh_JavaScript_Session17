// Phương thức cốt lõi
// Set item: tạo key và value
localStorage.setItem("name", ["Đạt", "Hello","blabla"]);

// .get item: lấy value của key

let nameByLocal = localStorage.getItem("name");
console.log(nameByLocal);

// .remove item: xóa theo key 

// localStorage.removeItem("name");


// // .clear : xóa hết

// localStorage.clear();

// cách lưu trữ giá trị là mảng hoặc object trên localstorage

let todos = [
    {id: 0, name: "chơi game", status: true},
    {id: 1, name: "xem phim", status: false},
];

// kiểu dữ liệu JSon

// JSON.stringify: chuyển mảng hoặc object về dạng JSON
localStorage.setItem("todo", JSON.stringify(todos));
// JSON.parse: chuyển dữ liệu JSON về kiểu dữ liệu mảng hoặc object
let data = JSON.parse(localStorage.getItem("todo"));
console.log(data);
