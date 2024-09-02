/* Berdasarkan array di bawah, tulislah sebuah fungsi yang hanya akan mengembalikan tipe data primitif;
a. let arr = [1, 'string', null, false, undefined, 2, 'yes', undefined]. */
function filterPrimitives(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let type = typeof item;
    if (
      type === "number" ||
      type === "string" ||
      type === "boolean" ||
      type === "undefined"
    ) {
      result.push(type);
    }
  }
  return result;
}

let arr = [1, "string", null, false, undefined, 2, "yes", undefined];
console.log(filterPrimitives(arr));

function findSecondSmallest(arry) {
  if (arry.length < 2) return null; // Jika kurang dari 2 elemen, tidak bisa mencari angka terkecil kedua

  let firstSmallest = Math.min(arry[0], arry[1]);
  let secondSmallest = Math.max(arry[0], arry[1]);

  for (let i = 2; i < arry.length; i++) {
    if (arry[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arry[i];
    } else if (arry[i] < secondSmallest && arry[i] > firstSmallest) {
      secondSmallest = arry[i];
    }
  }

  return firstSmallest === secondSmallest ? null : secondSmallest;
}

console.log(findSecondSmallest([4, 1, 7, 3, 1]));
console.log(findSecondSmallest([10, 20, 5, 6, 10]));

/* Tulislah sebuah fungsi dari array tipe data campuran yang diberikan dan kembalikan jumlah semua angka 
tersebut. */
function sumNumbers(arr) {
  let sum = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      const value = arr[i];
      sum.push(value);
    }
  }

  banyakNumber = sum.length;
  return banyakNumber;
}

let mixedArray = [1, 5, null, 5, false, 3, undefined, "7", 2];
console.log(sumNumbers(mixedArray));

/* Tulislah sebuah fungsi dari array angka di bawah yang akan mengembalikan jumlah nilai duplikat;
a. let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10] */

function sumOfDuplicates(arr1) {
  let countMap = {}; // Objek untuk menyimpan jumlah kemunculan setiap angka
  let sum = 0; // Variabel untuk menyimpan jumlah nilai duplikat

  // Iterasi melalui array dan menghitung kemunculan setiap angka
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    countMap[num] = (countMap[num] || 0) + 1;
  }
  // Iterasi melalui objek countMap untuk menemukan dan menjumlahkan duplikat
  for (let num in countMap) {
    if (countMap[num] > 1) {
      sum += parseInt(num) * (countMap[num] - 1);
    }
  }
  return sum;
}

let arr1 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(arr1));

/* Tulislah sebuah fungsi permainan batu, gunting, kertas yang akan mengembalikan 'Menang' atau 'Kalah’;
a. Fungsi tersebut akan secara acak memilih antara batu, kertas, atau gunting.
b. Contoh: jika Anda melempar batu sebagai argumen dan fungsi tersebut memilih gunting maka 
fungsi tersebut akan mengembalikan 'Menang' */

function batuGuntingKertas(pilihanKamu, jumlahPermainan) {
  const pilihan = ["batu", "gunting", "kertas"];

  for (let i = 0; i < jumlahPermainan; i++) {
    const pilihanKomputer = pilihan[Math.floor(Math.random() * pilihan.length)];

    let hasil;
    if (pilihanKamu === pilihanKomputer) {
      hasil = "Seri";
    } else if (
      (pilihanKamu === "batu" && pilihanKomputer === "gunting") ||
      (pilihanKamu === "gunting" && pilihanKomputer === "kertas") ||
      (pilihanKamu === "kertas" && pilihanKomputer === "batu")
    ) {
      hasil = "Menang";
    } else {
      hasil = "Kalah";
    }

    console.log(
      `Game ${
        i + 1
      }: Anda memilih ${pilihanKamu}, komputer memilih ${pilihanKomputer}. Hasil: ${hasil}`
    );
  }
}

const pilihanKamu = "batu";
const jumlahPermainan = 5;
batuGuntingKertas(pilihanKamu, jumlahPermainan);
