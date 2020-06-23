var numbers=[1,2,3,4];

function transform(collection ,tranFunc){
    output=[];
    collection.forEach(function(num){
        output.push(tranFunc(num));

    });
    return output;
}

var outputs = transform(numbers,function(num){
    return num * 2;
})

console.log(outputs)