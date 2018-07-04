//1----------------------
console.log('1. Menyusun Barisan Bintang');
var rows1 = 5; 

for (counter = 1 ; counter <= rows1; counter++) {
  console.log('*');
}

//2----------------------
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
var rows2 = 5; 
var asterik = '';

for (var counterRow = 0; counterRow < rows2; counterRow++) {
  asterik = '';
  for(var counter = 0 ; counter < rows2; counter++) {
    asterik = asterik + '*';
  }
  console.log(asterik);
}

//3----------------------
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
var rows3 = 5; 
var asterik = '*';
var counterCol = 0;

for (var counterRow = 0; counterRow < rows3; counterRow++) { 
  for(var counter = counterCol ; counter < rows3; counter++) {
    console.log(asterik);
    asterik = asterik + '*';
    counterCol++;
  }
}



