var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];

function sortBy(array, key) {
    output = array.map(function(item){
        return item;
    })
    output.sort(function(a,b){
        if(a[key]<b[key]){
            return -1;
        }
        else
        return 1;

    });
    return output;
}

var sort = sortBy(arr ,'id');
console.log(sort);
var sortID = sortBy(arr ,'name');
console.log(sortID);