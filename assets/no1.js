// no 1
function changedWord(selectedText, changedText, text) {
    return text.replace(selectedText, changedText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
    "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changedWord("mencintai", "membenci", kalimat1));
console.log(changedWord("bromo", "semeru", kalimat2));
// Akhir no 1
