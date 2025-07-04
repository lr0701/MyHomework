var toHex = function(num) {
    if (num === 0) {
        return "0";
    }
    const sb = [];
    for (let i = 7; i >= 0; i --) {
        const val = (num >> (4 * i)) & 0xf;
        if (sb.length > 0 || val > 0) {
            const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10);
            sb.push(digit);
        }
    }
    return sb.join('');
}
