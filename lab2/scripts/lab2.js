function validation(arr){
    error = "";
    if (arr.length != 4) {
        error = "Матрица должна состоять из 4 строк";
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length != 4) {
            error = "Матрица должна состоять из 4 столбцов";
        }
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != '1' && arr[i][j] != '0') {
                error = "Введенная матрица должна состоять из 0 и 1!";
            }
        }
    }
    if (arr[0][0] == "") {
        error = "Массив не должен быть пустым!";
    }
    return error;
}
function reflexivity(arr){
    let result = "";
    let k = 0;
    for(let i=0; i < 4; i++){
        if(arr[i][i] == '1') {
            k = k + 1;
        }
    }
    if (k == 4){
        result = "рефлексивна"
    }
    else{
        result = "не рефлексивна"
    }
    return result;
}

function simmetry(arr){
    let result = "";
    if(arr[1][0] == arr[0][1] && arr[2][0] == arr[0][2] && arr[3][0] == arr[0][3] && arr[2][1] == arr[1][2] && arr[3][1] == arr[1][3] && arr[3][2] == arr[2][3]) {
        result = "симметрична"
    }
    else{
        result = "не симметрична"
    }
    return result;
}

function unsimmetry(arr){
    let result = "";
    let k = 0;
    if(arr[1][0] != arr[0][1] && arr[2][0] != arr[0][2] && arr[3][0] != arr[0][3] && arr[2][1] != arr[1][2] && arr[3][1] != arr[1][3] && arr[3][2] != arr[2][3]) {
        for(let i=0; i < 4; i++){
            if(arr[i][i] == '0') {
                k = k + 1;
            }
        }
    }
    if (k == 4){
        result = "кососимметрична"
    }
    else{
        result = "не кососимметрична"
    }
    return result;
}

function tranzitivity(arr){
    let result = "";
    let k = 0;
    let c = 0;
    let kvArr = [];
    for (let i = 0; i < 4; i++) {
        kvArr[i] = [];
    }
    for(let i=0; i < 4; i++){
        for(let j=0; j < 4; j++){
            for(let z=0; z < 4; z++){
                c += arr[i][z] * arr[z][j]
                if (c > 1){
                    c = 1
                }
            }
            kvArr[i][j] = c;
            c=0;
        }
    }
    for(let i=0; i < 4; i++){
        for(let j=0; j < 4; j++){
            if (kvArr[i][j] <= arr[i][j]){
                k++
            }
        }
    }
    if (k == 16){
        result = "транзитивна"
    }
    else{
        result = "не транзитивна"
    }
    return result;
}

function rasschet() {
    let matrix = document.querySelector(".arr").value.split("\n");
    let result = "";
    for(let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].replace(/ +/g, ' ').trim();
        matrix[i] = matrix[i].split(" ");
    }
    if (validation(matrix) != ""){
        alert(validation(matrix));
    }
    else{
        result = "Рефлексивность: " + reflexivity(matrix) + "\n";
        result +="Симметричность: " + simmetry(matrix) + "\n";
        result +="Транзитивность: " + tranzitivity(matrix) + "\n";
        result +="Кососимметричность: " + unsimmetry(matrix) + "\n";
    }
    document.getElementById("outResult").innerText =result;
}