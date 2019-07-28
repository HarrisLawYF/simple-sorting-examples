//--------------------------------------Bubble sort (n^2)----------------------
//From 0 to n, eg 0 to 7
console.log("-------------------------- Bubble Sort -----------------");
var num_arr = [8,12,-9,7,2,1,4,5,9,6];
for (i = 0; i < num_arr.length; i++) {
	//From array_num to 0, continue if k > current i, eg 7 > 0, 6 > 0, 5 > 0, etc...
	for(k = num_arr.length-1; k > i; k--){
		//if k < k-1, then swap, eg 6 < 9, then swap 6 and 9
		var temp = num_arr[k];
		if(temp < num_arr[k-1]){
			num_arr[k] = num_arr[k-1];
			num_arr[k-1] = temp;
		}
	}
}
//we guarantee in each round, num_arr[i] will be the smaller numbers, eg num_arr[0] is the smallest in 1st round, 
//num_arr[1] is the second smaller number, etc...

console.log(num_arr);

//--------------------------------------Selection sort (n^2)------------------
console.log("-------------------------- Selection Sort -----------------");
var num_arr = [7,4,3,6,5];
//From 0 to the n-1 length, since we know the last one will definitely be the largest after
//all the comparation at the front
for(var i = 0; i < num_arr.length-1; i++){
	//assume the current index contains the smallest value
	var smallest = i;
	//Compare the current index with all other i+1 indexes' values, and find the next smallest value's index in the whole array
	//as the final decision
	for(var j = i+1; j < num_arr.length; j++){
		if(num_arr[j] < num_arr[smallest]){
			smallest = j;
		}
	}
	//Swap the final smallest in this round to the far left, and skip the check this smallest index the next round,
	//since it has been determined as the smallest on in the remaining array value
	var temp = num_arr[smallest];
	num_arr[smallest] = num_arr[i];
	num_arr[i] = temp;
}
console.log(num_arr);

//--------------------------------------Insertion sort (n^2)------------------
console.log("-------------------------- Insertion Sort -----------------");
var num_arr = [4,15,7,18,16,2];
// start from the 1 to n.
for(var i = 1; i < num_arr.length; i++){
	//set the current key as num_arr[i], eg. num_arra[2]
	var key = num_arr[i];
	//set j as the index of previous value
	var j = i -1;
	console.log("Current index: "+i.toString());
	console.log("Previous index: "+j.toString());
	//if j is not negative 1, and previous value bigger 
	//than the current value, eg num_arr[1] > num_arra[2].
	//The main idea is if you found the current value (num_arr[i]) smaller than previous value(num_arr[j]), then you swap the position,
	//and continue to compare the current value is further smaller than the prior to previous one (num_arr[j-1], num_arr[j-1-1])
	//until the condition num_arr[j] > key doesn't fulfill anymore, or the j index becomes -1.
	console.log("******************************");
	while(j >= 0 && num_arr[j] > key){
		console.log("Current j position: "+j.toString());
		console.log("Current key: "+key.toString());
		//swap current value as previous value, eg num_arr[2] = num_arr[1]
		num_arr[j+1] = num_arr[j];
		j-=1; //reduce j, j = 0
		num_arr[j+1] = key;//num_arr[1] = num_arr[2]
		console.log("-------------------------------");
	}
	console.log("==================================");
}

console.log(num_arr);