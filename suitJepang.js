var lagi = true;

while(lagi){
    //Memasukkan pilihan player
    var player = prompt('Masukkan Pilihan Anda : (gunting, batu, kertas)');

    //Membuat pilihan computer
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gunting';
    }
    else if(comp >= 0.34 && comp < 0.67){
        comp = 'batu';
    }
    else{
        comp = 'kertas';
    }

    // Menentukan rules permainan
    var hasil = '';
    if(player == comp){
        hasil = 'SERI!';
    }
    else if(player == 'gunting'){
        hasil = (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
    }
    else if(player == 'batu'){
        hasil = (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    }
    else if(player == 'kertas'){
        hasil = (comp == 'batu') ? 'MENANG!' : 'KALAH!';
    }
    else{
        hasil = 'PILIHAN ANDA SALAH!';
    }
    
    // Menampilkan hasil permainan
    alert('Anda memilih ' + player + ' dan komputer memilih ' + comp + '\nhasil ' + hasil);


    lagi = confirm('Ingin bermain lagi ?');
}

alert('Terima Kasih Sudah Bermain :)');

