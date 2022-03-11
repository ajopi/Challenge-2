

// No 8
const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];


// funtion to rupiah format
function formatRupiah(uang) {
    var number_string = uang.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
        return rupiah;
    }
}

function getInfoPenjualan(dataPenjualan) {
    let totalModal = 3000000;
    let totalKeuntungan = 0;
    let totalHargabeli = 0;
    let jmlbukuPalingLaris = 0;
    let penulisNovel = "";
    let bukuTerlaris = "";


    // menghitung total keuntungan
    for (let i = 0; i < dataPenjualan.length; i++) {
        totalKeuntungan += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * (dataPenjualan[i].totalTerjual - dataPenjualan[i].sisaStok);
    }

    // menghitung presentase keuntungan
    for (let i = 0; i < dataPenjualan.length; i++) {
        totalHargabeli += ((dataPenjualan[i].hargaBeli) * (dataPenjualan[i].sisaStok));
    }
    let presentase = ((totalKeuntungan / totalHargabeli) * 100).toFixed(0);


    // mencari buku paling laris
    let obj = dataPenjualanNovel.map((value, index) => {
        if (jmlbukuPalingLaris < value.totalTerjual) {
            jmlbukuPalingLaris = value.totalTerjual;
            penulisNovel = value.penulis;
            bukuTerlaris = value.namaProduk;
        
        }else{
            return "errr"
        }
    });
    console.log();

   

    var modal = formatRupiah(totalModal);
    var untung = formatRupiah(totalKeuntungan);


    // object hasil
    const hasil = {
        total_modal: 'Rp. ' + modal,
        totalUntung: 'Rp. ' + untung,
        presentaseUntung: presentase + '%',
        penulisTerlaris: penulisNovel,
        produkBukuTerlaris: bukuTerlaris,


    }

    return hasil;
}

console.log(getInfoPenjualan(dataPenjualanNovel));