let start = document.getElementById('start');
console.log(start);

let expensesItem = document.getElementsByClassName('expenses-item');
console.log(expensesItem);

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpensesItem);

let data = document.querySelector('.data');
let btnExpenses = data.getElementsByTagName('button')[0],
		btnOptionalexpenses = data.getElementsByTagName('button')[1],
		btnCount = data.getElementsByTagName('button')[2];
console.log(btnExpenses, btnCount, btnOptionalexpenses);

let chooseIncome = document.querySelector('.choose-income'),
		checksavings = document.querySelector('.checksavings'),
		chooseSum = document.querySelector('.choose-sum'),
		choosePercent = document.querySelector('.choose-percent'),
		yearValue = document.querySelector('.year-value'),
		monthValue = document.querySelector('.month-value'),
		dayValue = document.querySelector('.day-value');
console.log(chooseIncome, checksavings, chooseSum, choosePercent, yearValue, monthValue, dayValue);

let budgetV = document.getElementsByClassName('budget-value')[0],
		daybudgetV = document.getElementsByClassName('daybudget-value')[0],
		levelV = document.getElementsByClassName('level-value')[0],
		expensesV = document.getElementsByClassName('expenses-value')[0],
		optionalexpensesV = document.getElementsByClassName('optionalexpenses-value')[0],
		incomeV = document.getElementsByClassName('income-value')[0],
		monthsavingsV = document.getElementsByClassName('monthsavings-value')[0],
		yearsavingsV = document.getElementsByClassName('yearsavings-value')[0];

console.log(daybudgetV, budgetV, levelV, expensesV, optionalexpensesV, incomeV, monthsavingsV, yearsavingsV);