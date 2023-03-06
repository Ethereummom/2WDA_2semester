//객체 리터럴
var sayNode = function(){
    console.log('Node');
};

var es = 'ES';
var old0bject = {
    sayJS: function(){
        console.log('JS');
    },

    sayNode : sayNode,
};

old0bject[es+6] ='Fantastic';
old0bject.sayNode();
old0bject.sayJS();
console.log(old0bject.ES6);