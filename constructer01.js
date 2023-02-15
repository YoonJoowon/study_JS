function People(type, name, nickname){
this.type=type;
this.name=name;
this.nickname=nickname;
}

People.prototype.say=function(){console.log(this.type)} //1) 객체집어넣음
People.prototype.value = '친구'
//prototype 의 역할 : 객체생성자함수로 만든것을 객체끼리 공유하고 싶은 함수나, 값 설정


const hyunmin = new People('a','b','c')
const hyogeun = new People('d','e','f')
const hyungbin = new People('g','h','i')

hyunmin.say()
hyungbin.say()

hyunmin.value;
hyogeun.value;
console.log(hyunmin.value)
console.log(hyogeun.value)

console.log(hyunmin)
console.log(hyungbin)

//예제
function Great_grandFather(){
    this.eyes='brown eyes'
}

function GrandFather(){
    this.hair='black hair'
}

GrandFather.prototype = new Great_grandFather() //2) 함수를 집어넣음

function Father(){
    this.skin='black skin'
}

Father.prototype = new GrandFather()

function Baby(){
    this.name='abc'
}

Baby.prototype = new Father()


let oo = new Baby();
if(Great_grandFather.prototype.isPrototypeOf(oo)){
    console.log(oo.name)
}
console.log(oo)

console.log(Great_grandFather.prototype.isPrototypeOf(oo))


let day = new Date()
console.log(Date.prototype.isPrototypeOf(day))