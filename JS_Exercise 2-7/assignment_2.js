var info ={
    name:"Abhishek",
    address:'baneshwor',
    email:'abhishrestha20@gmail.com',
    interest:'guitar',
    education:[
        {
            name: "Liverpool College",
            date: 2015


        },
        {
            name: "orchid international college",
            date: 2017
        }
        

        
    ]

}

educations = info.education;
educations.forEach(function(edu){
    console.log("Name:" + edu.name + ", date:" + edu.date);
})
