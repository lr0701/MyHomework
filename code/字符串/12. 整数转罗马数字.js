const R = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], 
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], 
    ["", "M", "MM", "MMM"], 
];

var intToRoman = function(num) {
    return R[3][Math.floor(num / 1000)] + R[2][Math.floor(num / 100) % 10] + R[1][Math.floor(num / 10) % 10] + R[0][num % 10];
};