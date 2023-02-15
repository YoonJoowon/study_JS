//get 은 기존데이터를 가지고 조회하는 기능을 한다.
let numbers = {
    a:3,
    b:2,
    get add(){
        console.log('add 함수가 실행됩니다');
        return this.a+this.b;
    }
}

//get 함수를 불러올때 numbers.add()가 아닌 numbers.add
console.log(numbers.add)
numbers.b=7;
console.log(numbers.add) 

//set 함수
let numbers2 = {
    _C:1,
    _d:2,
    sum:5,
    calculate(){
        console.log('계산')
        this.sum=this._C+this._d
    },
    get c(){
        return this._C
    },
    get d(){
        return this._d
    },
    set c(va){
        this._C=va;
        this.calculate()
    },
    set d(va){
        this._d=va;
        this.calculate()
    },
}
console.log(numbers2.sum) //5
numbers2.c=4; // 계산 (_C의 1값을 c에서 4로 수정)
console.log(numbers2.sum) //6 (초기값 4+2=6)
numbers2.d=5; // 계산 (_d의 2값을 d에서 5로수정)
console.log(numbers2.sum) //9 (수정된_d값으로 4+5=9)