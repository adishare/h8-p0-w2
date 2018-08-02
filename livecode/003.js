// Competencies: Loopings
/*
Competencies: Looping

=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)

let height = 5
let counter = height

for (let i=0;i<counter;i++) {
  result = ''
  for (j=height;j>0;j--) {
    result += j
  }
  console.log(result)
  height--
}

//atau

var height = 6
var result = ''

for (i=height;i>0;i--) {
  result = ''
  for (j=i;j>0;j--) {
    result += j
  }
  console.log(result)
}