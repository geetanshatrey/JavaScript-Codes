var profiles = [
    {
        "firstname": "Sherlock",
        "lastname":"Holmes",
        "number":"01634578",
        "likes":["Intriguing cases","Violin"]
    },
    
    {
        "firstname": "Krisitian",
        "lastname":"Vos",
        "number":"unknown",
        "likes":["JavaScript","Gaming","Foxes"]
    },
    
    {
        "firstname": "Harry",
        "lastname":"Potter",
        "number":"03625812",
        "likes":["Hogwarts","Magic","Hagrid"]
    }
];

function lookUpProfile(name,prop){
    var found=0;
    for(var i=0;i<profiles.length;i++)
    {
        if(name === profiles[i].firstname){
            console.log(profiles[i][prop]);
            found = 1;
            break;
        }
    }
    if(found == 0)
        console.log("Not found !");
}

lookUpProfile("Sherlock","likes");
lookUpProfile("Gary","likes");
