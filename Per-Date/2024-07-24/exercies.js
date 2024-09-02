/*● Write a code to convert celsius to fahrenheit.
● Write a code to check whether the number is odd or even
● Write a code to check whether the number is prime number or not
● Write a code to find the sum of the numbers 1 to N.
○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
● Write a code to find factorial of a number.
● Write a code to print the first N fibonacci numbers
*/

let c = 29;
let f = (c * 9) / 5 + 32;
console.log(`Juika suhu dalam celsius ${c}, maka suhu dalam farenhate ${f}`);

/*
    pseudo code:
    Mulai
        Deklarasikan variabel c dengan nilai 29
        Deklarasikan variabel f
        Hitung f dengan rumus (c * 9) / 5 + 32
        Cetak "Jika suhu dalam Celsius [c], maka suhu dalam Fahrenheit [f]"
    Selesai
    */

let angka = 9;
if (angka % 2 === 0) {
  console.log(`${angka} adalah genap`);
} else {
  console.log(`${angka} bilangan ganjil`);
}

/*
    pseudo code:
    Mulai
        Deklarasikan variabel angka dengan nilai tertentu (misalnya 29)
        Jika (angka % 2 == 0) maka
            Cetak "[angka] adalah angka genap."
        Jika tidak
            Cetak "[angka] adalah angka ganjil."
    Selesai
*/

let number1 = 6;
let prima = true;
let i = 2;
while (i < number1) {
  if (number1 % i === 0) {
    prima = false;
    break;
  }
  i++;
}
console.log(`angka ${number1} adalah angka ${prima ? "PRIMA" : "BUKAN PRIMA"}`);

/* 
pseudo code:
Mulai
    Deklarasikan variabel number1 dengan nilai tertentu (misalnya 6)
    Deklarasikan variabel prima sebagai true
    Deklarasikan variabel i dengan nilai 2
    Jika number1 <= 1 maka
    Set prima menjadi false
    Jika tidak, lakukan:
    Selama i <= akar kuadrat dari number1, lakukan:
    ika number1 % i == 0 maka
    Set prima menjadi false
    Keluar dari loop
    Tambahkan i dengan 1
    Cetak "angka [number1] adalah angka [PRIMA jika prima true, BUKAN PRIMA jika prima false]"
Selesai */

let N = 5;
let jumlah = 0;

for (let i = 1; i <= N; i++) {
  jumlah += i;
}
console.log(`Jumlah angka dari 1 hingga ${N} adalah ${jumlah}`);

/* 
Mulai
    Deklarasikan variabel N dengan nilai tertentu (misalnya 5)
    Deklarasikan variabel jumlah dengan nilai 0
    
    Untuk i dari 1 hingga N, lakukan:
        jumlah = jumlah + i
    
    Cetak "Jumlah angka dari 1 hingga N adalah jumlah"
Selesai
 */

let angka2 = 5;
let hasil = 1;

if (angka === 0 || angka === 1) {
  hasil = 1;
} else {
  for (let i = 2; i <= angka; i++) {
    hasil *= i;
  }
}

console.log(`Faktorial dari ${angka} adalah ${hasil}`);

/* Mulai
    Deklarasikan variabel angka dengan nilai tertentu (misalnya 5)
    Deklarasikan variabel hasil dengan nilai 1
    
    Jika angka adalah 0 atau 1, lakukan:
        hasil = 1
    Jika tidak, lakukan:
        Untuk i dari 2 hingga angka, lakukan:
            hasil = hasil * i
    
    Cetak "Faktorial dari angka adalah hasil"
Selesai
 */

let jumlahFibonacci = 10;
let fib = [0, 1];

for (let i = 2; i < jumlahFibonacci; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(
  `Angka Fibonacci pertama hingga ${jumlahFibonacci} adalah ${fib
    .slice(0, jumlahFibonacci)
    .join(", ")}`
);

/* Mulai
    Deklarasikan variabel jumlahFibonacci dengan nilai tertentu (misalnya 10)
    Deklarasikan array fib dengan dua elemen pertama 0 dan 1
    
    Untuk i dari 2 hingga jumlahFibonacci - 1, lakukan:
        fib[i] = fib[i - 1] + fib[i - 2]
        Cetak "Angka Fibonacci pertama hingga jumlahFibonacci adalah fib"
Selesai
 */
