//1. Melakukan Looping Menggunakan While
//--------------------------------------------------------------

console.log('LOOPING PERTAMA');

var counter = 0;

while(counter < 20) {
  counter += 2;
  console.log(counter + ' - I love coding');
}

//posisi counter = 20
console.log('LOOPING KEDUA');

while(counter > 0) {
  console.log(counter + ' - I will become fullstack developer');
  counter -=2
}

//2. Melakukan Looping Menggunakan For
//--------------------------------------------------------------

console.log('LOOPING PERTAMA');

for(counter = 1 ; counter <= 20; counter++) {
  console.log(counter + ' - I love coding');
}

console.log('LOOPING KEDUA');

for(counter = 20; counter > 0; counter--) {
  console.log(counter + ' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
//--------------------------------------------------------------

//ganjil genap
for(counter = 1; counter <= 100; counter++) {
  if (counter % 2) {
  console.log(counter + ' GANJIL');
  }
  else {
    console.log(counter + ' GENAP');
  }
}

//penambahan counter 2
for(counter = 1; counter <= 100; counter += 2) {
  if (counter % 3){
    
  }
  else {
    console.log(counter + ' kelipatan 3');
  }
}
//penambahan counter 5
for(counter = 1; counter <= 100; counter += 5) {
  if (counter % 6){
    
  }
  else {
    console.log(counter + ' kelipatan 6');
  }
} 
//penambahan counter 9
for(counter = 1; counter <= 100; counter += 9) {
  if (counter % 10){
    
  }
  else {
    console.log(counter + ' kelipatan 10');
  }
} 

