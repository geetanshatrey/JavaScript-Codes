function findMember(mem){
    var ourFamily = {
        "father":"Adam",
        "mother":"Jade",
        "brother":"Tom",
        "sister":"Melissa",
        "aunt":"Lacey",
        "uncle":"John"
    }
    return ourFamily[mem];
}

console.log(findMember("sister"));
