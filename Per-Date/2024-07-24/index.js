let age = 20;

if (age >= 21) {
  console.log("umur mencukupi");
} else {
  console.log("umur tidak mencukupi");
}

let grade = "a";

if (grade == "a") {
  console.log("nilai memuaskan");
} else if (grade == "b") {
  console.log("nilai cukup");
} else {
  console.log("remidial");
}

switch (grade) {
  case "a":
    console.log("memuaskan");
    break;
  case "b":
    console.log("cukup");
    break;
  case "c":
    console.log("remedial");
    break;
  default:
    console.log("bukan variable");
}

let motor = "scoppy";
//if statmen untuk runing
if (motor === "beat") {
  console.log("beat");
} else {
  console.log("bukan beat");
}
//cara lain untuk runing
console.log(motor === "beat" ? "beat" : " bukan beat");

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(`i ke ${i}`);
}

let i = 0;
while (i < 5) {
  console.log("hellow world");
  i++;

  if (i === 2) break;
}

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(true));

console.log(!!0);
console.log(!!1);
console.log(!!"");
console.log(!!"Hello");
console.log(!!undefined);

console.log("1" === 1);
console.log("1" == 1);
console.log(1 === 1);
console.log(1 == 1);
console.log(0 === 0);
console.log(0 !== "1");
