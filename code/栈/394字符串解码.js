/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    let numstack = [];
    let strstack = [];
    let num = 0;
    let res = '';
    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i])){
            num  = 10*num + Number(s[i]);
        }else if(s[i] === '['){
            strstack.push(res);
            numstack.push(num);
            num = 0;
            res = '';

        }else if(s[i] === ']'){
            const multi  = numstack.pop();
            res = strstack.pop() + res.repeat(multi);
        }else {
            res +=s[i];
        }
    }
    return res;
};

