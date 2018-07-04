var tanggal = 12;
var bulan = 4;
var tahun = 2018;

if (tanggal > 0 && tanggal <= 31) {
  if (bulan >= 1 && bulan <= 12) {
    switch(bulan) {
      case 1 : bulan = 'Januari';
      break;
      case 2 : bulan = 'Februari';
      break;
      case 3 : bulan = 'Maret';
      break;
      case 4 : bulan = 'April';
      break;
      case 5 : bulan = 'Mei';
      break;
      case 6 : bulan = 'Juni';
      break;
      case 7 : bulan = 'Juli';
      break;
      case 8 : bulan = 'Agustus';
      break;
      case 9 : bulan = 'September';
      break;
      case 10 : bulan = 'Oktober';
      break;
      case 11 : bulan = 'November';
      break;
      case 12 : bulan = 'Desember';
      break;
    }
    if (tahun >= 1900 && tahun <= 2200) {
    console.log(`${tanggal} ${bulan} ${tahun}`);
    }
    else {
    console.log('Salah tahun');
    }
  }
  else {
    console.log('Salah bulan');
  }
}
else {
    console.log('Salah tanggal');
  }