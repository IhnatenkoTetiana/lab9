while (m!=5){
    var m = prompt("Ввод m \n1 - оператор условия\n2 - цикл\n3 - цикл while\n4 - ввод с массива\n5 - выход",'')
    if (isNaN(m)==false){
        if (m<1 || m>5){
            alert("Вы ввели некорректное число")
        }else{
            switch(m){
                case '1':case1_1();
                break
                case '2':case2_1();
                break
                case '3':case3_1();
                break
                case '4':case4_1();
            }
        }
}else alert('Вы ввели не число!');
}
function case1_1(){
    let x = inputNumber('Vvedite x',2);
    let y = inputNumber("Ввод Y",0.261);
    if (x>=y){
        let a = Math.exp((x-y))-Math.pow(z,3);
        alert('a='+a);
    }else{
        let z= inputNumber('Vvod z',0.032);
        let b=x-Math.pow(x,3)/6;
    }
}
function case2_1(){
    let shag= inputNumber('vvedite shag',0.43);
    let a= inputNumber('Введите а',1.24);
    let b=inputNumber('Введите b',1.24);
    let x_n=inputNumber('Введите начальное значение x',10.2);
    let x_k=+prompt('Введите конечное значение x',12.4);
    if (x_n<x_k){
        for (x_n;x_n<=x_k;){
        let y=(Math.pow(Math.tan(x_n),2)-b2)/Math.exp(x_n);
        alert("При х="+x_n+" y="+y);  
        x_n=x_n+shag;
        }
    }else alert('Конечное значение х меньше начального!');
}
function case3_1(){
    let shag= inputNumber('vvedite shag',0.43);
    let a= inputNumber('Введите а',1.24);
    let b=inputNumber('Введите b',1.24);
    let x_n=inputNumber('Введите начальное значение x',10.2);
    let x_k=+prompt('Введите конечное значение x',12.4);
    do{
        for (x_n;x_n<=x_k;){
         let y=(Math.pow(Math.tan(x_n),2)-b2)/Math.exp(x_n);
         alert("При х="+x_n+" y="+y);  
         x_n=x_n+shag;}
    }while(x_n<x_k)
}
function case4_1(){
    var array=[];
    for (var i=0;i<4;i++){
        array[i]=inputNumber('Введите '+(i+1)+' элемент массива',11);
    }
    let a2 =1.24;
    let b2 =0.67;
    for (var i=0;i<4;i++){
     let y3=(Math.pow(Math.tan(array[i]),2)-b2)/Math.exp(array[i]);
     alert('При x = '+array[i]+',y ='+y3);}     
    }
function isNumber(k){
 if (isNaN(k)==false){
     return(true)
 }else
 return false
}
function inputNumber(msg,def){
    do {
    var str=prompt(msg,def);
    } while (!isNumber(str))
    return parseFloat(str);
}