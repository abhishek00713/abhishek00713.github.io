

function asterisk(number){
for(var i=number; i>0;i--){
    str =""
    for(var j=0;j<i;j++){
        str+="*"
        
    }
    console.log(str);
}
}

asterisk(5);