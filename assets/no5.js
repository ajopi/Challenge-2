

// NO 5
function getSplitName(personName) {
    try {
        var word = personName.split(" ");
        let wordCheck = personName.split(" ").length;
        if (wordCheck == 3) {
            let splitName = {
                "firstName": word[0],
                "middleName": word[1],
                "lastName": word[2],
            }
            return splitName;
        } else if (wordCheck == 2) {
            let splitName = {
                "firstName": word[0],
                "middleName": null,
                "lastName": word[1],
            }
            return splitName;
        } else if (wordCheck == 1) {
            let splitName = {
                "firstName": word[0],
                "middleName": null,
                "lastName": null,
            }
            return splitName;
        } else if (wordCheck >= 4) {
            return "ERROR : This function is only for 3 characters name";
        }
    } catch (error) {
        return "ERROR: can't be integer"
    }

    // if (word.length = 2) {
    //     let splitName = {
    //         "firstName" : word[0],
    //         "middleName" : word[1],
    //         "lastName" : word[2],
    //     }
    //     return splitName;
    // } 
    // else{
    //     return "ERROR : This function is only for 3 characters name"
    // }

}

console.log(getSplitName("Fachris Yovi Mahendra"));
console.log(getSplitName("Fachris Yovi"));
console.log(getSplitName("Fachris"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(50));
// Akhir dari no 5