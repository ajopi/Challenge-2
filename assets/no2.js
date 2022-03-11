// no 2
// function checkTypeNumber(givenNumber) {
//     if (typeof givenNumber == "number") {
//         if (givenNumber % 2 == 0) {
//             return "Genap";
//         } else {
//             return "Ganjil!!";
//         }

//     } else if (givenNumber == null) {
//         return "Error: Bro, mana parameternya???"
//     }

//     else {
//         return "Error: Invalid data type"
//     }

// }

checkTypeNumber = (givenNumber) => {
    if (typeof givenNumber == "number") {
        if (givenNumber % 2 == 0) {
            return "Genap";
        } else {
            return "Ganjil!!";
        }

    } else if (givenNumber == null) {
        return "Error: Bro, mana parameternya???"
    }

    else {
        return "Error: Invalid data type"
    }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(1));
console.log(checkTypeNumber("10"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
// Akhir no 2