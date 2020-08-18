function getResult(a,b,c){
    const discr = Math.pow(b, 2) - 4 * a * c;
    const x = []
    if (discr > 0) {
        x.push((-b + Math.sqrt(discr)) / 2 * a);
        x.push((-b - Math.sqrt(discr)) / 2 * a);
    } else if (discr === 0) {
        x.push(-b / 2 * a);
    }
    return x;
};


function getAverageMark(marks){
    if (marks.length === 0) {
        return 0;
    }

    let marksReady = [...marks];

    if (marksReady.length > 5) {
        console.log('Можно вводить не более 5 оценок. Лишние будут исключены из подсчета.')
        marksReady = marksReady.slice(0, 5);
    }

    const averageMark = marksReady.reduce((acc, mark, index, arr) => {
        return index < arr.length - 1 ? acc += mark : (acc += mark) / arr.length; 
    }, 0);
    return averageMark;
};


function askDrink(name, dateOfBirthday){
    const currentYear = new Date().getFullYear();
    const yearOfBirthday = dateOfBirthday.getFullYear();
    const age = currentYear - yearOfBirthday;
    const result = age >= 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
};
