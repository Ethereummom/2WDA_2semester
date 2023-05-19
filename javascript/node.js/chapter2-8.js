var Human = function(type){
    this.type = type || 'human';
};

Human.isHuman = function(human){
    return human instanceof Human;
}
var human = new Human();


Human.prototype.breathe = function(){
    console.log('h-a-a-a-m');
}

human.breathe()