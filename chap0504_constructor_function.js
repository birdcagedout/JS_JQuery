// 객체 생성자 함수
function WeightInfo(name, height, weight) {
	this.name = name;
	this.height = height;
	this.weight = weight;

	this.getInfo = function () {
		var str = "";
		str += `이름: ${this.name}, 신장: ${this.height}, 체중: ${this.weight}`;
		return str;
	}
}

var jang = new WeightInfo('장동민', 178, 73);
var park = new WeightInfo('서승만', 166, 82);

console.log(jang);
console.log(park);

console.log(jang.getInfo());
console.log(park.getInfo());

console.log(jang.getInfo === park.getInfo);			// false
