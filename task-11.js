


function sameLetters(str1, str2){
    let count = 0;
    let s_1 = str1.split("");
    let s_2 = str2.split("");

    for (let i = 0; i < s_1.length; i++) {
        for (let j = 0; j < s_2.length; j++) {
            if (s_1[i] == s_2[j]) {
                count++;
                s_2.splice(j, 1);
                break;
            }
        }
    }
    return(count);
}
console.log(sameLetters("amanda", "loud"));
