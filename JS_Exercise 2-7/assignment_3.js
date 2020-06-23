var fruits = [
    {
        id: 1, 
        name: 'Banana', 
        color: 'Yellow'
    },
    {
        id: 2, 
        name: 'Apple', 
        color: 'Red'
    }
]

function searchByName(arr,name){
    arr.forEach(function(fruit){
        if(fruit.name == name){
            console.log(fruit);
        }
    })

}



function searchByKey(arr,key,value){
    arr.forEach(function(fruit){
        Object.keys(fruit).forEach(function(item){
            if(key==item && value==fruit[item]){
                console.log(fruit);
            }

        })
    })
        

}
searchByKey(fruits,'name','Apple');
searchByName(fruits,"Banana");
