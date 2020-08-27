// Задание #1

function getSolutions(a, b, c) {
  const D = Math.pow(b, 2) - 4 * a * c;
  const roots = []
  if (D > 0) {
      roots.push((-b + Math.sqrt(D)) / 2 * a);
      roots.push((-b - Math.sqrt(D)) / 2 * a);
  } else if (D === 0) {
      roots.push(-b / 2 * a);
  }
  return { D, roots };
};

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c)
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дескриминанта: ${result.D}`)
  if (result.roots.length === 0) {
    console.log(`Решение не имеет корней`)
  } else if (result.roots.length === 1) {
    console.log(`Решение имеет один корень X₁ = ${result.roots[0]}`)
  } else {
    console.log(`Решение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }
};

// Задание #2

function getAverageScore(data) {
  const coll = Object.entries(data);
  const collOfaverage = coll.map((item) => {
    item[1] = getAverageMark(item[1]);
    return item;
  }); 
  const average = getAverageMark(collOfaverage.map((item) => item[1]));
  const result = collOfaverage.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  result.average = average;
  return result;
};

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }
  const sum = marks.reduce((acc, mark) => acc += mark, 0);
  return sum / marks.length;
};

// Задание #3

function getPersonData(secretData) {
  const result = {};
  result.firstName = getDecodedValue(secretData.aaa);
  result.lastName = getDecodedValue(secretData.bbb);
  return result;
};

function getDecodedValue(secret) {
  return secret === 0 ? 'Родриго': 'Эмильо';
};