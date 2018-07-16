
document.querySelector('#budget-seats').value = 10
document.querySelector('#my-score').value = 230

document.querySelector('#scoreboard').value = '100\n200\n300\n200\n200'


const btnCalc = document.querySelector('#btn')
btnCalc.addEventListener('click', function (e) {
	e.preventDefault()
	document.querySelector('.results-block').innerHTML = ''
	
	const budgetSeats = parseInt(getInputValue('budget-seats'))
	const myScore = parseInt(getInputValue('my-score'))

	const rangedList = rangeList(getUnrangedList(), budgetSeats)

	const rangedListEl = createRangedListElement(rangedList)
	document.querySelector('.results-block').appendChild(rangedListEl)
	
	const resultsEl = createResultsElement(rangedList)
	document.querySelector('.results-block').appendChild(resultsEl)
	
})