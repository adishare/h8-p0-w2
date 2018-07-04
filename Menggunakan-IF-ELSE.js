var nama = 'zoro';
var peran = 'Tabib';

// Output untuk Input nama = '' dan peran = ''
if (!nama && !peran) {
  console.log('Nama harus diisi');
//Output untuk Input nama = 'Mikael' dan peran = ''
} else if (nama && !peran) { 
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (nama && peran) {
  console.log(`Selamat datang di dunia Proxytia, ${nama}`);
  //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
  if (peran === 'Ksatria') {
  console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
  //Output untuk Input nama = 'Danu' dan peran 'Tabib'
  } else if (peran === 'Tabib') {
  console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);  
  //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
  } else if (peran === 'Penyihir') {
  console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);  
  } 
}