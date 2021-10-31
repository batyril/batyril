/*#14.1 Немного практики

Создайте простой калькулятор Calc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.

Пример вызова такой функции 

Calc(‘sum’, 1, 2) - возвращает 3
Calc(‘multi’, 1, 2) - возвращает 2

И так далее, со всеми математическими действиями, которые вы изучили в задаче #7

Но и это еще не все. 

Ваш калькулятор должен возвращать сообщение “Error” в том случае если вы не указали все 3 параметра или если вычисляемые значения оказались не числами. 

В случае с неверным “идентификатором нужного действия” возвращайте “unknown operation”*/

let operator = prompt('Ввидите оператор')
let firstNumber = prompt('Ввидите первое число')
let secondNumber = prompt('Ввидите второе число')


function Calc(operator, a, b) {
    const ifCheckNumber =  (a === "" || b === "" || typeof(a) != 'number' || typeof(b) != 'number')

    if (ifCheckNunber ){
        return "Error"
    } 
    else if(operator ==="+"){
        return a + b  
    }  
    else if(operator ==="-"){
        return a - b       
    }
    else if(operator ==="*"){
        return a * b
    }
    else if(operator ==="/"){
        return a / b
    } 
    else if(operator ==="**"){
        return Math.pow(a, b)
    }  
    else if(operator ==="%"){
        return a % b
    }  
    else{
        return 'unknown operation'
    }
}

alert(Calc(operator, firstNumber, secondNumber));
  