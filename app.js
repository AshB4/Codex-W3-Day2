const generateGoblinName = () => {
    const realName = document.getElementById('realName').value;
    const birthMonth = document.getElementById('month').value;
    const snack = document.getElementById('snack').value;

    const goblinFirst = {
        A: "Mold",
        B: "Spore",
        C: "Grub",
        D: "Fester",
        E: "Pickle",
        F: "Rot",
        G: "Gunk",
        H: "Nibble",
        I: "Cricket",
        J: "Moss Back",
        K: "Wart",
        L: "Grimes",
        M: "Stench",
        N: "Bramble",
        O: "Clutch",
        P: "Fizz",
        Q: "Nettle",
        R: "Soot",
        S: "Tangle",
        T: "Bog Stench",
        U: "Scrap",
        V: "Fungus",
        W: "Rattle",
        X: "Kreep",
        Y: "Yip-yip",
        Z: "Zippy",
    };

    // Goblin last-name root by birth month
    const goblinLast = {
        January: "whistle",
        February: "snout",
        March: "tooth",
        April: "muddle",
        May: "crackle",
        June: "hot foot",
        July: "snappy-pop",
        August: "moss face",
        September: "shakey",
        October: "spooky face",
        November: "wartsworth",
        December: "frost belch",
    };

    const firstLetter = realName.charAt(0).toUpperCase();
    const goblinFirstName = goblinFirst[firstLetter] || "Grimey";
    const goblinLastName = goblinLast[birthMonth] || "Gobby";

    const snackPick = snack.toLowerCase().replace(/\s+/g, "-");
    const goblinName = `${goblinFirstName} ${goblinLastName}-of${snackPick}`;

    const formData = {
        name: realName,
        month: birthMonth,
        snack: snack
    };
    console.table(formData);

    document.getElementById('goblin-name').innerText = `Your Goblin Name is: ${goblinName}`;
};