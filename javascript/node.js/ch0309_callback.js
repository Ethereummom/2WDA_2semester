const condition = false;

//promise는 함수 안의 작업이 일정한 조건을 충족하지 않아서 끝내고 다음 줄로 제어를 보내면 안될때 사용함
//일정한조건을 충족하면 resolve, 충족하지않으면 reject reject는 무조건 예외처리?
//promise를 쓰는 가장 큰 이유는 2개이상의 callback이중첩되어있을떄 편하게 하기 위해서?
const promise = new Promise((resolve,reject) => {
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});


promise.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
})

.finally(()=>{
    console.log('무조건')
})