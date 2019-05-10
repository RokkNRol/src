   let startBtn = document.getElementById('start'),
   	budgetValue = document.querySelector('.budget-value'),
   	dayBudgetValue = document.querySelector('.daybudget-value'),
   	levelValue = document.querySelector('.level-value'),
   	expensesValue = document.querySelector('.expenses-value'),
   	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
   	incomeValue = document.querySelector('.income-value'),
   	monthSavingsValue = document.querySelector('.monthsavings-value'),
   	yearSavingsValue = document.querySelector('.yearsavings-value'),
   	expensesItem = document.querySelectorAll('.expenses-item'),
   	expensesItemBtn = document.querySelector('.expenses-item-btn'),
   	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
   	countBudgetBtn = document.querySelector('.count-budget-btn'),
   	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
   	chooseIncome = document.querySelector('.choose-income'),
   	chooseSum = document.querySelector('.choose-sum'),
   	choosePercent = document.querySelector('.choose-percent'),
   	yearValue = document.querySelector('.year-value'),
   	monthValue = document.querySelector('.month-value'),
   	dayValue = document.querySelector('.day-value'),
   	checkSaving = document.getElementById('savings');

   let money, time;

   startBtn.addEventListener('click', function () {
   	time = prompt("Введите дату в формате YYYY-MM-DD", "");
   	money = +prompt("Ваш бюджет на месяц?", "");

   	while (isNaN(money) || money == "" || money == null) {
   		money = +prompt("Ваш бюджет?", "");
   	}
   	appData.cash = money;
   	appData.timeData = time;
   	budgetValue.textContent = money.toFixed();
   	yearValue.value = new Date(Date.parse(time)).getFullYear();
   	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
   	dayValue.value = new Date(Date.parse(time)).getDate();
   });

   expensesItemBtn.addEventListener('click', function () {
   	let sum = 0;

   	for (var i = 0; i < expensesItem.length; i++) {
   		let a = expensesItem[i].value,
   			b = expensesItem[++i].value;

   		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
   			console.log("done");
   			appData.expenses[a] = b;
   			sum += +b;
   		} else {
   			i--;
   			continue;
   		}
   	}
	   appData.expensesSum = sum;
   	expensesValue.textContent = sum;
   });

   optionalExpensesBtn.addEventListener('click', function () {
   	for (var i = 0; i < optionalExpensesItem.length; i++) {
   		let opt = optionalExpensesItem[i].value;
   		appData.optionalExpenses[i] = opt;
   		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
   	}
   });

   countBudgetBtn.addEventListener('click', function () {
   	if (appData.cash != undefined) {

   		appData.moneyPerDay = ((appData.cash - appData.expensesSum) / 30).toFixed();
   		dayBudgetValue.textContent = appData.moneyPerDay;

   		if (appData.moneyPerDay < 100) {
   			levelValue.textContent = "Минимальный уровень достатка";

   		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   			levelValue.textContent = "Средний уровень достатка";

   		} else if (appData.moneyPerDay > 2000) {
   			levelValue.textContent = "Высокий уровень достатка";

   		} else {
   			levelValue.textContent = 'Произошла ошибка';
   		}
   	} else {
   		dayBudgetValue.textContent = 'Произошла ошибка, нет данных по бюджету';
   	}
   });


   chooseIncome.addEventListener('input', function () {
   	let items = chooseIncome.value;
   	appData.income = items.split(', ');
   	incomeValue.textContent = appData.income;
   });

 checkSaving.addEventListener('click', function () {
   	if (appData.saving == true) {
   		appData.saving = false;
   	} else {
   		appData.saving = true;
   	}
   });

   chooseSum.addEventListener('input', function () {
   	if (appData.saving == true) {
   		let sum = +chooseSum.value,
   			percent = +choosePercent.value;
		
   		appData.montsIncome = sum/100/12*percent;
   		appData.yearIncome = sum/100*percent;
		
   		monthSavingsValue.textContent = appData.montsIncome.toFixed(1);
   		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   	}
   });

   choosePercent.addEventListener('input', function () {
   	if (appData.saving == true) {
   		let sum = +chooseSum.value,
   			percent = +choosePercent.value;
		
   		appData.montsIncome = sum/100/12*percent;
   		appData.yearIncome = sum/100*percent;
		
   		monthSavingsValue.textContent = appData.montsIncome.toFixed(1);
   		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   	}
   });

   let appData = {
   	cash: money,
   	timeData: time,
   	expenses: {},
   	expensesSum: {},
   	optionalExpenses: {},
   	income: [],
   	saving: false,
   	detectLevel: function () {

   	}
   };
