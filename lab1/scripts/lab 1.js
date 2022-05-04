var arr1, arr2,  error;
function validation(mass){
    let arr = false;
    if(mass.length > 0){
        arr = mass.split(" ");
        for(let i = 0; i < arr.length; i ++){
            if(arr[i][0] < 1 || arr[i][0] > 9){
                error = 'Ошибка в элементе: ' + arr[i][0];
                arr = false;
                break;
            }
            if(arr[i][1] %2 != 0){
                error = 'Ошибка в элементе: ' + arr[i][1];
                arr = false;
                break;
            }
            if(arr[i][2] < 1 || arr[i][0] > 9 ){
                error = 'Ошибка в элементе: ' + arr[i][2];
                arr = false;
                break;
            }
            if(arr[i][3] %2 != 1){
                error = 'Ошибка в элементе: ' + arr[i][3];
                arr = false;
                break;
            }
        }
    } else {
        error = 'Заполните массив';
    }
    return arr;
}
function unification( a1, a2 ){
    let result = a1.join();
    for(let i=0; i<a2.length; i++){
        if(a1.indexOf(a2[i]) == -1)
            result += ','+a2[i];
    }
    return result;
}
//перечесение
function intersection ( a1, a2 ){
    let result = " ";
    for(let i=0; i<a2.length; i++){
        if(a1.indexOf(a2[i]) != -1)
            result += a2[i]+' ';
    }
    return result;
}
//дополнение
function addition(a1,a2){
    let result=" ";
    for(let i=0;i<a2.length;i++){
        if(a2.indexOf(a1[i])==-1){
            result+=a1[i]+' ';
        }
    }
    return result;
}
//симметрическая разность
function sim_difference(a1,a2){
    let result=" ";
    for(let i=0;i<a2.length;i++){
        if(a2.indexOf(a1[i])==-1){
            result+=a1[i]+' ';
        }
    }
    for(let i=0;i<a1.length;i++){
        if(a1.indexOf(a2[i])==-1){
            result+=' '+a2[i];
        }
    }
    return result;
}
function res(){
    let result = " ";
    var a = document.getElementById('arr1');
    var b = document.getElementById('arr2');
    if( (arr1 = validation( a.value )) == false ){
        alert(error);
    }
    if( (arr2=validation( b.value )) == false ){
        alert(error);
    }
    if(arr1 != false && arr2 != false ){
        result = "Объединение массивов: " + unification( arr1, arr2 ) + " ";
        result += "Пересечение массивов: " + intersection( arr1, arr2 ) + " ";
        result += "Дополнение А к В: " + addition(arr1,arr2) + " ";
        result += "Дополнение B к А: " + addition(arr2,arr1) + " ";
        result += "Симметрическая разность: " + sim_difference(arr1,arr2) + " ";
    }
    document.getElementById('result').innerHTML = "Результат:" + result;
}

