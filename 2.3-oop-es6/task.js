class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
};



class Magazine extends PrintEditionItem {
  constructor(...params) {
    super(...params);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, ...params) {
    super(...params);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(...params) {
    super(...params);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(...params) {
    super(...params);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(...params) {
    super(...params);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const iter = this.books.find((book) => {
      if (book[type] === value) {
        return book;
      }
    });
    return iter ? iter : null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index === -1) {
      return null;
    }
    const book = this.books[index];
    this.books.splice(index, 1);
    return book;
  }
}

class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }
  getName() {
    return this.name;
  }
  addGrade(grade, subject) {
    
    if (!this.subjects.hasOwnProperty(subject)) {
      this.subjects[subject] = [];
    }
    if (typeof grade !== 'number' || (grade > 5 || grade <= 0)) {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
    } else {
      this.subjects[subject].push(grade);
    }
    return this.subjects[subject].length;
  }

  getAverageBySubject(subject) {
    if (this.subjects.hasOwnProperty(subject)) {
      const sum = this.subjects[subject].reduce((acc, mark) => acc += mark, 0);
      return sum / this.subjects[subject].length
    }
    return 0;
  }

  getTotalAverage() {
    const allSubjects = Object.keys(this.subjects);
    const averages = allSubjects.map((subject) => this.getAverageBySubject(subject));
    return averages.reduce((acc, average) => acc += average, 0) / averages.length;
  }
}
