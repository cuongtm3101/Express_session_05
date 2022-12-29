// ERD - Entity Relationship Diagram
// Sơ đồ quan hệ giữa các thực thể

// Entity - Thực thể
// Hình chữ nhật bo góc

// Properties - Thuộc tính
// Hình bầu dục

// Relationship - Quan hệ
// Hình thoi

// VD:
// Tạo ra một ERD dành cho user ()
// một user sẽ có nhiều bài viết
// và một bài viết sẽ chỉ thuộc một user

// B1: Xác định được các thực thể có trong bài toán
// 2 thực thể
// User, Post

// B2: Xác định được các thuộc tính của mỗi thực thể
// User: name, username, password, DOB, sex, ...
// Post: title, content, created_at, user_id (Được tạo bởi user nào), ...

// B3: Xác định được quan hệ giữa các thực thể
// One-to-one (quan hệ 1-1), one-to-many (quan hệ 1-Nhiều), many-to-many (Quan hệ nhiều-nhiều)

// VD:
// Thiết kế một ERD - Entity relationship diagram cho một ứng dụng
// quản lý sinh viên
// Sinh viên có thể đăng ký vào nhiều lớp học

// B1: Xác định thực thể
// Student, Class

// B2: Xác định các thuộc tính
// Student: student_id (ma_sv), name, dob, sex, address, age ...

// Class: class_id (ma_lop), class_name, subject, start_date, end_date, ...

// B3: Xác định mối quan hệ giữa các thực thể
// Xác định mối quan hệ là: Many-to-many (Nhiều-nhiều)

// Tạo thực thể (bảng) trung gian để xác định được mối quan hệ Many-to-many
// Student_Class (Schedule)

// One-to-many, Many-to-many

// one-to-one

// VD:
// Một user sẽ có duy nhất một địa chỉ

//
// user = {
//   name: "Hoang",
//   age: 18,
//   address: {
//     number: 18,
//     street: "Pham Hung",
//     city: "Hanoi",
//   },
// };

// lattitude, longtitude

// Trong mối quan hệ 1-1
// Để xác định được mối quan hệ một một
// Thì id của thực thể đầu tiên phải trùng với id của thực thể thứ 2

// NOTE:

// One-to-many
// Đối với mối quan hệ một nhiều
// Để thể hiện mối quan hệ một nhiều giữa 2 thực thể
// Thì cần phải có một ràng buộc tên là khoá ngoại (Foreign key - FK)
// FK sẽ nằm trên thực thể được sở hữu trong mối hệ one-to-many
// FK sẽ chính là Khoá chính (Thông thường là trường id) được liên kết đến
// thực thể sở hữu

// One-to-one
// Đối với mối quan hệ một---một
// Để thể hiện mối quan hệ một---một giữa 2 thực thể
// Thì cần phải có một ràng buộc tên là khoá ngoại (Foreign key - FK)
// FK sẽ nằm trên thực thể được sở hữu trong mối hệ one-to-one
// FK sẽ chính là Khoá chính (Thông thường là trường id) được liên kết đến
// thực thể sở hữu

// NOTE: Primary key - PK (ID) của thực thể sở hữu phải
// trùng với Primary key - PK (ID) của thực thể được sở hữu
