
// no 4
function isValidPassword(password) {
    var valdiatePass = /([A-Z]{1}[a-z]{1,}[0-9]{1,})/;
    var valdiatePass2 = /([a-z]{1}[a-z]{1,}[0-9]{1,})/;

    if (password == null) {
        return "Error: null values!!"
    } else if (password.length < 8) {
        return "sorry minimum character is 8";
    } else if (typeof password == "number") {
        return "Error: Uppercase and 8 character minimum are required!"
    }
    else {
        if (valdiatePass.test(password)) {
            return true;
        } else if (valdiatePass2.test(password)) {
            return false + " Uppercase required!!";
        } else {
            return false;
        }
    }
}

console.log(isValidPassword('Meong123'));       //ok
console.log(isValidPassword('Meong12'));        //ok
console.log(isValidPassword('meong123'));       //ok
console.log(isValidPassword('@eong'));          //ok
console.log(isValidPassword(5));                //ok
console.log(isValidPassword());                //ok
// Akhir no 4