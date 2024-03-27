function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char in pairs) {
            const topElement = stack.pop();
            if (pairs[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true
