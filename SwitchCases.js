function caseInSwitch(val){
    var answer=" ";
    switch(val){
        case 1: 
                answer="alpha";
                break;
        case 2:
                answer="beta";
                break;
        case 3:
                answer="gamma";
                break;
        case 4:
                answer="delta";
        case 5:
                answer="delta";
                break;
        default:
                answer="theta";
    }
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));
console.log(caseInSwitch(10));
