while (true) {
    // Foydalanuvchidan tanlov so'raymiz
    let userChoice = prompt("Tosh, Qaychi yoki Qog'oz?");

    // Agar foydalanuvchi `cancel` bosgan bo'lsa, o'yinni to'xtatamiz
    if (userChoice === null) {
        alert("O'yin tugadi!");
        break;
    }

    userChoice = userChoice.toLowerCase();

    // Faqat to'g'ri kiritilgan qiymatni qabul qilamiz
    let choices = ["tosh", "qaychi", "qog'oz"];
    if (!choices.includes(userChoice)) {
        alert("Faqat 'Tosh', 'Qaychi' yoki 'Qog'oz' ni kiriting! 🗿");
        continue;
    }

    // Kompyuterning tasodifiy tanlovini hosil qilamiz
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // G'olibni aniqlash
    function determineWinner(user, computer) {
        if (user === computer) {
            return "Durrang!";
        } else if (
            (user === "tosh" && computer === "qaychi") ||
            (user === "qaychi" && computer === "qog'oz") ||
            (user === "qog'oz" && computer === "tosh")
        ) {
            return "Siz g'olibsiz!";
        } else {
            return "Kompyuter g'olib!";
        }
    }

    // Natijani chiqaramiz
    alert(`Siz tanladingiz: ${userChoice}\nKompyuter tanladi: ${computerChoice}\n${determineWinner(userChoice, computerChoice)}`);
}
