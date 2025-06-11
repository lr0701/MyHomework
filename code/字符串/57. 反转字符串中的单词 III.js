function reverseWords(s) {
    // 将字符串按空格分割成单词数组
    let words = s.split(' ');
    // 对每个单词进行反转
    let reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    // 将反转后的单词数组合并成字符串，单词间用空格分隔
    return reversedWords.join(' ');
}