//Objek
let objectPertama = {};

let objectKedua = new Object();

console.log(objectPertama);
console.log(objectKedua);

let student = {
  "first name": "Agung",
  grade: "A",
  sayHi() {
    return this["first name"];
  },
  sayGrade() {
    return this.grade;
  },
};

student.age = 12;
student["last name"] = "Sastra";
console.log(student);

console.log(student.age);
console.log(student["first name"]);

delete student.age;
delete student["first name"];

console.log(student);

let student2 = {
  province: "Bali",
  address: {
    street: "Denpasar",
  },
};

console.log(student2.address?.street);

console.log(student2.address);

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

console.log(student.sayGrade());
console.log(student["sayGrade"]());
