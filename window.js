var name = 'kuddus';
function add (n1, n2){
    var result = n1 + n2;
    console.log('in result',result);
    console.log(name);
    function double (num){
        return num * 2
    }
    var total =  double(result);
    return total;
} 
var sum = add(12, 67);
console.log('out result',result);
console.log(sum);

console.log('result outside',result);