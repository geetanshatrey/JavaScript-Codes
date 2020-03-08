var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love A Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "album": "Robert Palmer",
        "tracks": [ ]        
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy= JSON.parse(JSON.stringify(collection));

function updateCollection(id,prop,value){

     if(value!=""){
         if(prop == "tracks"){
             collection[id].tracks.push(value);
         }
         else{
             collection[id][prop] = value;
         }
     }
     else{
         delete collection.id.prop;
     }
    return collection;
}

console.log(updateCollection("2468","album","2020"));
console.log(collectionCopy);
console.log(updateCollection("2548","artist",));
