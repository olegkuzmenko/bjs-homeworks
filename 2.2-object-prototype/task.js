 
String.prototype.isPalindrome = function() {
    const strStraight = this.split(' ').join('').toLowerCase();
    const halfLength = Math.floor(strStraight.length / 2);
    return strStraight.substring(0, halfLength) === strStraight.substring(strStraight.length % 2 === 0 ? halfLength : halfLength + 1).split('').reverse().join('');
}


function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    const sum = marks.reduce((acc, mark) => acc += mark, 0);
    const roundAverage = Math.round(sum / marks.length);
    return roundAverage;
};


function checkBirthday(date) {
    const currentTime = Date.now();
    const birthday = +(new Date(date));
    const diff = currentTime - birthday;
    const age = diff/ ((3 * 31536000000 + 31622400000) / 4);
    const verdict = age >= 18;
    return verdict;
};