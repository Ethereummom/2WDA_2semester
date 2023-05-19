function test(){
    for(var i =0; i<3; i++)
    {
        console.log(i);
    }
    console.log(i);
}
test();
//scope가 함수 단위임.
//java의 경우에는 for루프 안에서 선언한 변수는 for루프 안에서만 쓰이지만, 
//javascript는 범위가 함수 안까지

console.log(i)
var i = 0;
//호이스팅
//순차적으로 해석했을때 에러가 떠야하지만 undefined가 뜸.
//let과 const의 등장배경
//let i = 0; = i가 아직 선언되지 않았기 떄문에 에러
let b
let a = "Hello"
console.log(typeof(a))
console.log(typeof a)
console.log(typeof b)

const str = `Hello
everyone ${a+"ooo"}`;
console.log(str)

const score = 10;

let result;
if(score > 5)
    result = true;
else
    result = false;
console.log(result);

result = score>5 ? true:false;
console.log(result);

const value = 1;
switch(value%2){
    case 0 : console.log('EVEN'); break;
    case 1 : console.log('ODD'); break;
}

//switch문 같은 경우에는 자동변환 해주지 않음.
const value1 = '0';
switch(value1){
    case 0:
        console.log('case 0');
        break;
    default:
        console.log('default');
}

myBlock:{
    let i = 0;
    console.log(i);
    if(i==0) break myBlock;
    console.log('Dead code...');
}
