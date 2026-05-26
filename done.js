function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0,-1));
}
console.log(reverseString("hello Zoey"));
console.log(reverseString("recursion"));
console.log(reverseString("z"));
console.log(reverseString(""));