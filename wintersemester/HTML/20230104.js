function test(value){
    return new Promise((resolve,reject) =>{
        if (value>=0)
            resolve('ok');
        else
            reject('error');
    });
}

function test2(value){
    return new Promise((resolve,reject)=>{
        console.log('test2' + value);
        resolve('finished');
    });
}

function test3(value){
    console.log(value)
}

test(1)
.then(test2)
.then(test3)
.catch((error)=>{console.log(error);})

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    static typeName = 'rectangle';
    static info(){
        return `Type: ${Rectangle.typeName}`;
    }
    getArea(){
        return this.width * this.height;
    }
}


const newrec = new Rectangle(15,15);
console.log(newrec.getArea());
console.log(Rectangle.typeName)
console.log(Rectangle.info());