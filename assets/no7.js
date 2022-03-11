

// no 7
const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High ',
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]

function hitungTotalPenjualan(dataPenjualan) {
    let hitung = (
        dataPenjualan[0].totalTerjual + dataPenjualan[1].totalTerjual + dataPenjualan[2].totalTerjual + dataPenjualan[3].totalTerjual
    );
    // question: kenapa value totalTerjual dapat diakses, sedangkan dataPenjualan berada dalam sebuah function sendiri?????
    return hitung;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// Akhir NO 7
