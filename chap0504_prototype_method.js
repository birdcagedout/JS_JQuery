// 객체 생성자 함수
function WeightInfo(name, height, weight) {
	this.name = name;
	this.height = height;
	this.weight = weight;
}

// 객체에 prototype으로 메소드 등록
WeightInfo.prototype.getInfo = function () {
	var str = "";
	str += `이름: ${this.name}, 신장: ${this.height}, 체중: ${this.weight}`;
	return str;
}

var jang = new WeightInfo('jang', 178, 83);
var park = new WeightInfo('park', 189, 43);

console.log(jang);
console.log(park);

console.log(jang.getInfo());
console.log(park.getInfo());

console.log(jang.getInfo === park.getInfo);		// true
