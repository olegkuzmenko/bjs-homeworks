function calculateTotalMortgage(percent, contribution, amount, date) {
    const time = (date.getFullYear() - (new Date).getFullYear()) * 12;
    const input = { percent, contribution, amount, time };
    const badInput = Object.entries(input).filter((entrie) => isNaN(entrie[1]));
    if (badInput.length > 0) {
      badInput.map((b) => console.log(`Параметр ${b[0]} содержит неправильное значение ${b[1]}`));
      return;
    }
    const body = Number(input.amount) - Number(input.contribution);
    const rate = ((Number(input.percent)) / 100) / 12 
    const monthlyPayment = body * (rate + rate / ((Math.pow((1 + rate), Number(input.time)) - 1)));
    const total = monthlyPayment * time;
    return Number(total.toFixed(2));
};
  


function getGreeting(name) {
    const rightName = !name ? 'Аноним' : name;
    const greeting = `Привет, мир! Меня зовут ${rightName}`;
    return greeting;
}