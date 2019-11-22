function remove(str) {
    let stack = [];
    str.split('');

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '*') {
            stack.push(str[i]);
        } else {
            stack.pop(stack[stack.length - 1])
        }
        
    }

    return stack.join('');
}


console.log(remove('he*l*lo')) // => 'hlo'