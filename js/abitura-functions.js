// Get value from input by ID
const getInputValue = function (inputID) {
	return document.querySelector(`#${inputID}`).value.trim()
}

// creates DOM element for calculated results
const createResultsElement = function (rangedList) {
	const wrapperRoot = document.createElement('div')
	wrapperRoot.classList.add('col-md-3', 'offset-md-1', 'top-offset')

	const resultsCard = document.createElement('div')
	resultsCard.classList.add('card')
	wrapperRoot.appendChild(resultsCard)
	
	// Card header
	headerEl = document.createElement('h3')
	headerEl.classList.add('card-header')
	headerEl.textContent = 'Баллы'

	resultsCard.appendChild(headerEl)
	
	// Card body
	const bodyEl = document.createElement('div')
	bodyEl.classList.add('card-body')
	resultsCard.appendChild(bodyEl)

		// Средний балл
	const averageEl = document.createElement('div')
	averageEl.classList.add('p')
	averageEl.textContent = `Средний балл: ${calcAverage(rangedList)}`
	
	bodyEl.appendChild(averageEl)
	
		// Минимальный балл

	const minimalEl = document.createElement('div')
	minimalEl.classList.add('p')
	minimalEl.textContent = `Минимальный балл: ${calcMinimal(rangedList)}`

	bodyEl.appendChild(minimalEl)

		// Предпологаемое место
	

	return wrapperRoot
}

// creates DOM element for ranged list
const createRangedListElement = function (rangedList) {
	const wrapperRoot = document.createElement('div')
	wrapperRoot.classList.add('col-sm-2', 'offset-sm-3', 'top-offset', 'height')
	
	const listCardEl = document.createElement('div')
	listCardEl.classList.add('card')
	wrapperRoot.appendChild(listCardEl)

	// Card header
	headerEl = document.createElement('h3')
	headerEl.classList.add('card-header')
	headerEl.textContent = 'Список'

	listCardEl.appendChild(headerEl)

	// Card body
	const bodyEl = document.createElement('div')
	bodyEl.classList.add('card-body')
	listCardEl.appendChild(bodyEl)

	rangedList.forEach(function (score, i) {
		const listItem = document.createElement('p')
		listItem.textContent = `${i+1}. ${score}`
		bodyEl.appendChild(listItem)
	})

	return wrapperRoot
}



// Return average value of the list
const calcAverage = function (rangedList) {
	let sum = 0
	rangedList.forEach(function (score) {
		sum += score
	})
	const average = sum / rangedList.length
	
	return average
}

// Return last element of a ranged list
const calcMinimal = function (rangedList) {
	return rangedList[rangedList.length - 1]
}

const calcSupposedPos = function (rangedList, myScore) {
	return 43, 23
}

const rangeList = function (unrangedList, maxPositions=unrangedList.length) {
	
	// Range list in descending order
	let rangedList = unrangedList.sort(function (a, b) {
		if (a > b) {
			return -1
		} else if (b > a) {
			return 1
		} else {
			return 0
		}
	})

	// Cut excess
	return rangedList.slice(0, maxPositions)
}

// Takes values from #scoreboard and makes array of it
const getUnrangedList = function () {
	const list = getInputValue('scoreboard').split('\n')
	return list.map(function (score) {
		return parseInt(score)
	})
}