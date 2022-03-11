

// no 6
function getAngkaTerbesarKedua(arr) {
    if (arr == 0) {
        return "Error: tidak ada nilai terbesar yang dibandingkan!"
    } else if (arr == null) {
        return "Error: can't proccess null values"
    } else {
        var max = Math.max.apply(null, arr);        //mendapatkan nilai maksimal dari array
        arr.splice(arr.indexOf(max), 1);            //menghapus nilai max dari array
        return Math.max.apply(null, arr);           //mendapatkan nilai terbesar ke 2
    }
}

const dataAngka = [10, 9, 8, 6, 5, 4, 3, 2, 1]

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
// Akhir no 6