// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [firstKey, firstArray] = data.lists.find(([key]) => key === 'first') || [];
const [secondKey, secondArray] = data.lists.find(([key]) => key === 'second') || [];
const [thirdKey, thirdArray] = data.lists.find(([key]) => key === 'third') || [];

const result = []

const extractBiggest = () => {
	if (firstArray && firstArray.length > 0 && (secondArray.length === 0 || firstArray.slice(-1)[0] > secondArray.slice(-1)[0]) && (thirdArray.length === 0 || firstArray.slice(-1)[0] > thirdArray.slice(-1)[0])) {
	  result.push(firstArray.pop());
	} else if (secondArray && secondArray.length > 0 && (thirdArray.length === 0 || secondArray.slice(-1)[0] > thirdArray.slice(-1)[0])) {
	  result.push(secondArray.pop());
	} else if (thirdArray && thirdArray.length > 0) {
	  result.push(thirdArray.pop());
	}
  }

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result);