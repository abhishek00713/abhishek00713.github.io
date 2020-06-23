var input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
        ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };
  
  output = {}
    child_ids={}


    
    function Normalize(input){
        Object.keys(input).forEach(function(key){
            var obj = input[key];
            output[obj.id]=obj;
            if("children" in obj){
                
                children_ids=[]
                obj.children.forEach(function(child){
                    children_ids.push(child.id)
                });
           
                child_ids[obj.id]=children_ids;
                Normalize(obj.children,output);

            }
        });
    
    


    Object.keys(child_ids).forEach(function(key){
        output[key].children = child_ids[key];
    });

    return output;
}

console.log(Normalize(input));























