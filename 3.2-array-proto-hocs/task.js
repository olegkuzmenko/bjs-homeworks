function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element, index) => element === arr2[index]);
};


const memorize = (fn, limit) => {
  const memory = [];
  const inner = (...args) => {
    const savedData = memory.find((item) => compareArrays(item.args, args));
    if (savedData) {
      return savedData.result;
    } else {
      const result = fn(...args);
      memory.push({ args, result })
      if (memory.length > limit) {
        memory.shift();
      }
      return result;
    }
  }
  return inner;
};


const mSum = memorize(sum, 5);

// разница в скорости работы mSum и sum — 404.902ms против 1:01.431 (m:ss.mmm)

const testCase = (fn, name) => {
  console.time(name);
  const memo = [ [1,3], [1,2], [1,3], [1,2], [9,5], [2,4] ]
  for (let i = 0; i <= 100; i += 1) {
    memo.forEach((item) => fn(...item))
  }
  console.timeEnd(name)
};

testCase(sum, 'test')







