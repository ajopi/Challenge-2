
// NO 3
function checkEmail(email) {
    var validateEmail = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/;
    var invalid = /[A-Za-z]/
    var invalid2 = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)/

    if (validateEmail.test(email)) {
        return "VALID!"
    } else if (invalid2.test(email)) {
        return "INVALID"
    }
    else if (invalid.test(email)) {
        return "Error: can't be string only!"
    } else if (typeof email == "number") {
        return "Errror: can't be number "
    }


}

console.log(checkEmail("ajopi@binar.co.id"));   //ok
console.log(checkEmail("ajopi@binar.com"));     //ok
console.log(checkEmail("ajopi@binar"));         //ok
console.log(checkEmail("aparanta"));            //ok
console.log(checkEmail(3222));                  //ok

// Akhir no 3