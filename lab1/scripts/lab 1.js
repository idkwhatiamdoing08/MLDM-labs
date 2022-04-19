var arr_1, arr_2, error;
function check1(){
    var arr_1=document.getElementById('arr1').value

    let i=0;
    if(/^[0-9]+$/.test(arr_1[i])){
        i ++;
        if(arr_1[i] % 2 ==0){
            i ++;
            if(/^[0-9]+$/.test(arr_1[i])){
                i ++;
                if(arr_1[i] % 2 ==1) {
                    error  = 'Проверка успешно пройдена(1 массив)';
                } else{

                   error = (i + 1) + ' элемент должен быть нечетным'
                }
    } else{
                error = (i + 1) + ' элемент должен быть цифрой'
            }
        }
            else {
           error = (i + 1) + ' элемент должен быть четным'
        }
    } else {
        error = (i + 1) + ' элемент должен быть цифрой'
    }
    if(arr_1.length != 4){
        error = 'массив должен состоять из 4 элементов'
    }
    if(arr_1.length == 0){
        error = 'Массив 1 не должен быть пустым'
    }
alert(error);
}

function check2(){
    var arr_2=document.getElementById('arr2').value
    let i=0;
    let o = i + 1;
    if(/^[0-9]+$/.test(arr_2[i])){
        i ++;
        if(arr_2[i] % 2 ==0){
            i ++;
            if(/^[0-9]+$/.test(arr_2[i])){
                i ++;
                if(arr_2[i] % 2 ==1) {
                    error  = 'Проверка успешно пройдена(2 массив)';
                } else{

                    error = (i + 1) + ' элемент должен быть нечетным'
                }
            } else{
                error = (i + 1) + ' элемент должен быть цифрой'
            }
        }
        else {
            error = (i + 1) + ' элемент должен быть четным'
        }
    } else {
        error = (i + 1) + ' элемент должен быть цифрой'
    }
    if(arr_2.length != 4){
        error = 'массив должен состоять из 4 элементов'
    }
    if(arr_2.length == 0){
        error = 'Массив 2 не должен быть пустым'
    }
    alert(error);
}
function intersection()
{
    var arr_1=document.getElementById('arr1').value
    var arr_2=document.getElementById('arr2').value

    var mass=new Array();

    var i=0,j=0,k=0;
    while(i<=arr_1.length&&j<=arr_2.length)
    {
        if(arr_1[i]==arr_2[j])
        {
            mass[k]=arr_1[i];
            i++;
            k++;
            j=0;
        }
        if((j+1)==arr_2.length){
            i++;
            j=0;
        }
        if(arr_1[i]!=arr_2[j])
        {
            j++;
        }
    }
    document.getElementById('mass').innerHTML=mass.join("");
}

function difference()
{
    var arr_1=document.getElementById('arr1').value
    var arr_2=document.getElementById('arr2').value
    var mass=new Array();
    let i=0,j=0,k=0;
    while ((i < arr_1.length) && (j < arr_2.length))
    {
        if (arr_1[i] == arr_2[j])
        {
            i++,j++;
        } else {
            if (arr_1[i] <= arr_2[j]) {
                mass[k] = arr_1[i];
                k++;
                i++;
            }
            else
            {
                j++;
            }
        }
    }
    while (i < arr_1.length) {
        mass[k] =arr_1[i];
        k++, i++;
    }

    document.getElementById('mass').innerHTML=mass.join("");
}

function unification()
{
    var arr_1=document.getElementById('arr1').value
    var arr_2=document.getElementById('arr2').value
    var strl=arr_1.length;
    var str1l=arr_2.length;
    var mass=new Array();
    i=0,j=0,k=0;
    while ((i < strl) && (j < str1l))
    {
        if (arr_1[i] == arr_2[j])
        {
            mass[k] = arr_1[i];
            k++,i++,j++;
        } else {
            if (arr_1[i] < arr_2[j]) {
                mass[k] =arr_1[i];
                k++;
                i++;
            } else {
                mass = arr_2[j];
                k++;
                j++;
            }
        }
    }
    while (i < str1l) {
        mass[k] = arr_1[i];
        k++, i++;
    }
    while (j < str1l) {
        mass[k] = arr_2[j];
        k++, j++;
    }

    document.getElementById('mass').innerHTML=mass.join("");
}