function megaFriend(name){
	var max = 0;
	var longestName;
	for(var i=0; i<name.length; i++){
		if (name[i].length > max){
		max = name[i];
		longestName = max[i];
		}
	}
	return max;
}
var result = megaFriend(["kazi", "zafar", "ahmmed"]);
console.log(result);