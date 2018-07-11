Competencies: Pseudocode

Buatlah Pseudocode untuk kasus berikut:
Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain

- Jika ombak dibawah 1 meter maka kecepatan tetap.
- Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
- Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
- Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam

Tampilkan kecepatan perahu jika di depan ada ombak setinggi x meter

//JAWAB

STORE kecepatanPerahu with 30
STORE tinggiOmbak with any value

IF tinggiOmbak less than 1
    kecepatanPerahu equals to kecepatanPerahu
ELSE IF tinggiOmbak equals to 1
    kecepatanPerahu - 7
ELSE IF tinggiOmbak equals to 2
    kecepatanPerahu - 15
ELSE
    kecepatanPerahu equals to 0

DISPLAY kecepatanPerahu