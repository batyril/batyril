
 function  calc(operator, a, b) {

    const ifCheckNumber =  ( typeof(a) != 'number' || typeof(b) != 'number' || !operator)

    let operations = {plus: a + b, minus: a - b, del: a/b, mult: a * b , exp: a**b, rem: a % b,};

    if (ifCheckNumber ){
        console.log( "Error")
    } 
    else if( operator in operations){
        console.log( operations[operator])
    }

    else{
        console.log('unknown operation')
    }
}

calc('del',3,'g');
calc('mult', 12 , 5);
calc ('dffgdfgd', 2, 4);
calc ('exp',3);

