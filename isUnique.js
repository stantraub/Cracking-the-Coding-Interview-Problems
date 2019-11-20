// Is Unique: Implement an algorithm to determine if a string has all unique
// characters. What if you cannot use additional data structures?

function unique(str) {
    str.split('');
    const hash = {};

    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) {
            hash[str[i]] = 0;
        }
        hash[str[i]] += 1;
    }

    let uniqueChars = true;
    Object.keys(hash).forEach(char => {
        if (hash[char] > 1) {
            uniqueChars = false;
        }
    });

    return uniqueChars;
}


console.log(unique(('asdff')));