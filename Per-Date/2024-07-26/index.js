// Tulis fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata dalam array (dengan dan tanpa fungsi sort).
function mendapatkanNilai(arr) {
  if (arr.length === 0) return [null, null, null];

  let nilaiTerendah = arr[0];
  let nilaiTertinggi = arr[0];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < nilaiTerendah) nilaiTerendah = arr[i];
    if (arr[i] > nilaiTertinggi) nilaiTertinggi = arr[i];

    total += arr[i];
  }

  const rataRata = total / arr.length;

  return [nilaiTerendah, nilaiTertinggi, rataRata];
}
const arr = [5, 2, 9, 1, 5, 6, 7];
const [rendah, tinggi, rata] = mendapatkanNilai(arr);
console.log(
  `Nilai Terendah : ${rendah}  Nilai Tertinggi : ${tinggi} Rata-Rata : ${rata}`
);

/* Tulis fungsi yang mengambil array kata dan mengembalikan string dengan menggabungkan kata-kata
dalam array, dipisahkan dengan koma dan - kata terakhir - dengan 'dan'. */
function menggabungArray(arry) {
  if (arry.length === 0) return "";
  if (arry.length === 1) return arry[0];
  if (arry.length === 2) return arry.join("dan");

  const kataTerakhir = arry.pop();
  return arry.join(",") + " " + " dan " + " " + kataTerakhir;
}

const KataArry1 = ["Bumi", " Bulat", " Tahu", " Bulat", "Walik"];
const output = menggabungArray(KataArry1);

console.log(output);

const kataArray2 = [" Satu ", " Dua "];
const hasil2 = menggabungArray(kataArray2);
console.log(hasil2);

const kataArray3 = ["Satu"];
const hasil3 = menggabungArray(kataArray3);
console.log(hasil3);

/* Tulis fungsi untuk membagi string dan mengubahnya menjadi array kata;
a. Contoh: "Halo Dunia" → ["Halo", "Dunia" 
*/
function MembagiString(string2) {
  return string2.split(" ");
}

console.log(MembagiString(`Hellow Rawan`));

/*  Tulis fungsi untuk menghitung setiap elemen dalam posisi yang sama dari dua array bilangan bulat;
a. Asumsikan kedua array memiliki panjang yang sama;
i. Contoh: [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
function TambahArray(araay1, araay2) {
  if (araay1.length !== araay2.length) {
    return `Array Harssu sama panajang`;
  }
  const hasil = [];
  for (let i = 0; i < araay1.length; i++) {
    hasil.push(araay1[i] + araay2[i]);
  }
  return hasil;
}

const araay1 = [1, 2, 3, 4, 5];
const araay2 = [2, 3, 4, 5, 6];

const hasil = TambahArray(araay1, araay2);

console.log(hasil);

/* Tulis fungsi yang menambahkan elemen ke akhir array. Namun, elemen tersebut hanya boleh
ditambahkan jika belum ada dalam array */

function menambahFungsi(arrays, elemen) {
  if (!arrays.includes(elemen)) {
    arrays.push(elemen);
  }

  return arrays;
}

const array = [1, 2, 3];
menambahFungsi(array, 4);
console.log(array);

/* Tulis fungsi untuk menghapus semua angka ganjil dalam array dan mengembalikan array baru yang hanya 
berisi angka genap */
function menghapusAngka(string3) {
  return string3.filter((elemen) => elemen % 2 === 0);
}

const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayGenap = menghapusAngka(ary);
console.log(arrayGenap);

function menambahInt(maxSize, ...integers) {
  return integers.slice(0, maxSize);
}
const maxSize = [3];
const hsl = menambahInt(maxSize, 5, 20, 10, 13, 17);
console.log(hsl);

/* Tulis fungsi untuk memasukkan beberapa integer yang diberikan (bukan array) ke dalam array dan 
memiliki ukuran input maksimum. Array hanya dapat memiliki ukuran maksimum dari input yang 
diberikan (jika ukuran maksimum input yang diberikan adalah 5 maka array hanya dapat berisi 5 elemen);
a. Contoh: maxSize = 5, integer yang diberikan adalah 5, 10, 24, 3, 6, 7, 8
i. Fungsi akan mengembalikan [5, 10, 24, 3, 6 */
function menggabungkanArry(arys1, arys2) {
  return arys1.concat(arys2);
}
const arys1 = [1, 2, 3];
const arys2 = [4, 5, 6];
const hli = menggabungkanArry(arys1, arys2);
console.log(hli);

/* Tulis fungsi yang akan menggabungkan 2 array yang diberikan menjadi satu array.
 */
function temukanDuplikat(arr) {
  const duplikat = [];
  const elemenTerlihat = new Set();

  for (let elemen of arr) {
    if (elemenTerlihat.has(elemen)) {
      if (!duplikat.includes(elemen)) {
        duplikat.push(elemen);
      }
    } else {
      elemenTerlihat.add(elemen);
    }
  }

  return duplikat;
}

const arrays = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 3];
const hasill = temukanDuplikat(array);
console.log(hasil);

/* Tulis fungsi untuk menemukan nilai duplikat dalam array */
function temukanPerbedaan(arr1, arr2) {
  const setArr1 = new Set(arr1);
  const setArr2 = new Set(arr2);

  const perbedaan1 = arr1.filter((elemen) => !setArr2.has(elemen));
  const perbedaan2 = arr2.filter((elemen) => !setArr1.has(elemen));

  return [...perbedaan1, ...perbedaan2];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const hasil5 = temukanPerbedaan(array1, array2);
console.log(hasil5);

/* Tulis fungsi untuk menemukan perbedaan dalam 2 array yang diberikan */
function findDifferences(arrayY1, arrayY2) {
  // Menggunakan Set untuk menghilangkan duplikasi dan mencari perbedaan
  let set1 = new Set(arrayy1);
  let set2 = new Set(arrayY2);

  // Elemen yang ada di array1 tapi tidak ada di array2
  let diff1 = [...set1].filter((x) => !set2.has(x));
  // Elemen yang ada di array2 tapi tidak ada di array1
  let diff2 = [...set2].filter((x) => !set1.has(x));

  // Menggabungkan kedua perbedaan
  let differences = diff1.concat(diff2);

  return differences;
}

// Contoh penggunaan fungsi
let arrayy1 = [1, 2, 3, 4];
let arrayy2 = [3, 4, 5, 6];

let perbedaan = findDifferences(arrayy1, arrayy2);
console.log(perbedaan); // Output: [1, 2, 5, 6]

/* Berdasarkan array di bawah, tulislah sebuah fungsi yang hanya akan mengembalikan tipe data primitif;
a. let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined]. */
function filterPrimitives(arrry) {
  return arrry.filter((item) => {
    return (
      item === null ||
      typeof item === "boolean" ||
      typeof item === "number" ||
      typeof item === "string" ||
      typeof item === "undefined"
    );
  });
}

// Contoh penggunaan fungsi
let arrry = [1, "string", null, false, undefined, 2, "yes", undefined];
let primitives = filterPrimitives(arrry);

console.log(primitives); // Output: [1, 'string', null, false, undefined, 2, 'yes', undefined]

/* Tulislah sebuah fungsi dari array angka yang diberikan dan kembalikan angka terkecil kedua */
function findSecondSmallest(arryy) {
  if (arryy.length < 2) {
    throw new Error("Array harus memiliki setidaknya dua elemen");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arryy) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("Tidak ada angka terkecil kedua yang ditemukan");
  }

  return secondSmallest;
}

// Contoh penggunaan fungsi
let arryy = [5, 1, 2, 9, 4, 3];
let secondSmallest = findSecondSmallest(arryy);

console.log(secondSmallest);

/* Tulislah sebuah fungsi dari array tipe data campuran yang diberikan dan kembalikan jumlah semua angka 
tersebut */

function sumNumbers(arrryy) {
  return arrryy.reduce((sum, item) => {
    if (typeof item === "number") {
      return sum + item;
    }
    return sum;
  }, 0);
}

// Contoh penggunaan fungsi
let arrryy = [1, "string", null, false, undefined, 2, "yes", 3];
let sum = sumNumbers(arrryy);

console.log(sum); // Output: 6

/* Tulislah sebuah fungsi dari array angka di bawah yang akan mengembalikan jumlah nilai duplikat;
a. let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10].
 */

function sumOfDuplicates(aryyy) {
  let countMap = {};
  let sum = 0;

  // Menghitung frekuensi setiap angka dalam array
  for (let num of aryyy) {
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  // Menjumlahkan nilai duplikat
  for (let num in countMap) {
    if (countMap[num] > 1) {
      sum += Number(num) * (countMap[num] - 1);
    }
  }

  return sum;
}

// Contoh penggunaan fungsi
let aryyy = [10, 20, 40, 10, 50, 30, 10, 60, 10];
let sumDuplicates = sumOfDuplicates(aryyy);

console.log(sumDuplicates); // Output: 30

/* Tulislah sebuah fungsi permainan batu, gunting, kertas yang akan mengembalikan 'Menang' atau 'Kalah’;
a. Fungsi tersebut akan secara acak memilih antara batu, kertas, atau gunting.
b. Contoh: jika Anda melempar batu sebagai argumen dan fungsi tersebut memilih gunting maka 
fungsi tersebut akan mengembalikan 'Menang */
function getComputerChoice() {
  const choices = ["batu", "gunting", "kertas"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Seri";
  }

  if (
    (userChoice === "batu" && computerChoice === "gunting") ||
    (userChoice === "gunting" && computerChoice === "kertas") ||
    (userChoice === "kertas" && computerChoice === "batu")
  ) {
    return "Menang";
  } else {
    return "Kalah";
  }
}

// Contoh penggunaan fungsi
let userChoice = "batu"; // Input dari pengguna
let computerChoice = getComputerChoice();

console.log(`Pilihan komputer: ${computerChoice}`);
let result = determineWinner(userChoice, computerChoice);

console.log(result); // Output: 'Menang' atau 'Kalah' atau 'Seri'
