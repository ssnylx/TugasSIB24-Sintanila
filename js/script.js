document.addEventListener('DOMContentLoaded', function () {
  let btn = document.getElementById('btnclick');

  btn.addEventListener('click', () => {
    alert('Hello!');
    alert('Have a nice day yup !!! (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧');
    console.log('Console Alert');
  });
});

//penggunaan var//

document.writeln('<br>', '<b>');
var varr = 'Penggunaan var ketika membutuhkan data yg sama berkali kali :';
document.writeln(varr);
document.writeln('<br>', '<br>', '<i>');
var fullname = 'Sinta Nila Sari';
document.writeln(fullname);
document.writeln('<br>');
document.writeln(fullname);
document.writeln('<br>');
document.writeln(fullname);
document.writeln('<br>');
var fullname = 'Sinta Nila Sari';
document.writeln(fullname);
document.write('<br>');

console.log('PT Arkatama Multi Solusindo');
console.log('');

//contoh masalah var//
var x = 10;
if (true) {
  var x = 20;
  console.log('Nilai x di dalam blok', x); //output 20
}
console.log('Nilai x di luar blok:', x); //output 20
console.log('');

//contoh masalah let//
let y = 15;
if (true) {
  let y = 10;
  console.log('Nilai y di dalam blok:', y); //output 10
}
console.log('Nilai y di luar blok:', y); //output 15

let btnConfirm = document.getElementById('btn-confirm');

btnConfirm.addEventListener('click', () => {
  let teks = document.getElementById('teks').value;
  if (teks == 'iya' || teks == 'ya' || teks == 'y') {
    alert('Yeay ayo kita belajar bersama (⁠◠⁠‿⁠◕⁠)');
  } else if (teks == '') {
    alert('Jawab dulu...');
  } else {
    alert('(⁠╯⁠︵⁠╰⁠,⁠)');
  }
});

//perulangan//
let btnulang = document.getElementById('btn-perulangan');
btnulang.addEventListener('click', () => {
  let perulangan = document.getElementById('perulangan').value;
  let triangle = '';
  const size = 10;
  if (perulangan != '') {
    for (let i = 1; i <= size; i++) {
      let line = '';
      for (let j = 1; j <= i; j++) {
        line += perulangan;
      }
      triangle += line + '\n';
    }
    document.getElementById('show-perulangan').innerText = triangle;
  }
});

//operasi aritmatika
var angka1 = document.getElementById('angka1');
var angka2 = document.getElementById('angka2');
var hasil = document.getElementById('hasil');

function tambah() {
  hasil.value = Number(angka1.value) + Number(angka2.value);
}
function kurang() {
  hasil.value = Number(angka1.value) - angka2.value;
}
function kali() {
  hasil.value = Number(angka1.value) * angka2.value;
}
function bagi() {
  hasil.value = Number(angka1.value) / angka2.value;
}
