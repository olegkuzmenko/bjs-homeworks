const parseCount = (data) => {
  const validData = Number.parseInt(data);
  if (Number.isNaN(validData)) {
    throw new Error('Невалидное значение');
  }
  return validData;
}

const validateCount = (data) => {
  try {
    return parseCount(data);
  } catch(e) {
    return e;
  }
};


class Triangle {
  constructor(a, b, c) {
    if ( a >= b + c || b >= a + c || c >= b + a ) {
      throw new Error('Треугольник с такими сторонами не существует')
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return (this.a + this.b + this.c);
  }

  getArea() {
    const P = this.getPerimeter() / 2;
    return Number(Math.sqrt(P * (P - this.a) * (P - this.b) * (P - this.c)).toFixed(3));
  }
};

const getTriangle = (a, b, c) => {
  try {
    return new Triangle(a, b, c);
  } catch {
    const error = 'Ошибка! Треугольник не существует'
    return { 
      getPerimeter() { return error },
      getArea() { return error }
    }
  }
};
