
function cleanTheRoom(array) {
	array = array.sort(function(a,b){return a-b});
	let x=0;
	let nums=[];
	let result = [];
	debugger;
	while (x<array.length) {
		if (!nums.includes(array[x])) {
			let i=0;
			let count = 0;
			let arr=[];
			while (i<array.length) {
				if (array[i] === array[x]) {
					count++;
					arr.push(array[x]);
				}
				i++;
			};
			if (arr.length===1) {
				arr = arr[0];
			}
			result.push(arr);
		}
		nums = nums.concat(array[x]);
		x++;

	}
	return result;
}

// let someNumbers = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// console.log(cleanTheRoom(someNumbers))

