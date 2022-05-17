let err = ""; 
function check(arr_,arr_1,arr_2) {
    err = ""; 
    if (arr_=="" || arr_1=="" || arr_2=="") {
        err = "Заполните поля!";
    }
    else if (arr_.length != 4 || arr_1.length!=4) { 
            err = "Множество должно содержать 4 элемента";
        }
    else{
        for(let i = 0; i < arr_2.length; i++) {
            arr_2[i] = arr_2[i].split(" ");
            if(arr_2[i][0]=="" || arr_2[i][1]=="" || arr_2[i].length!=2){
                err="Отношение введенео неверно";
                break;
            }  
        }
    }
    if (err) {
        return false; 
    }else {
        return true; 
    }
}

function Result() {  
    let output="\nМатрица отношений:\n\n";
    let arr = document.getElementById('arr1').value.split(" ");
    let arr1 = document.getElementById('arr2').value.split(" ");
    let arr2 = document.getElementById('arr3').value.split(",");
    let arr3=[4];

    for(let i=0;i<4;i++)
        arr3[i]=[0,0,0,0];
    if(check(arr,arr1,arr2)){
        for(let i = 0; i < arr2.length; i++) {
            let x = arr.indexOf(arr2[i][0]);
            let y = arr1.indexOf(arr2[i][1]);
            if(x != -1 && y != -1)
                arr3[x][y] = 1; 
        }
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++)
                output+=arr3[i][j]+" ";
            output+="\n";
        }
        output+="\n";

        output+=firstcheck(arr3)+"\n"+secondcheck(arr3);
        document.getElementById("OutResult").innerText=output;
    }
    else
        alert(err);
}
function firstcheck(arr3){
    for(let i=0; i<4;i++){
        let count=0;
        for(let j=0; j<4;j++)
            if(arr3[i][j]==1){count++;};
        if(count!=1)
            return "Не является функцией первого множества во второе";
    }
    return "Является функцией первого множества во второе";
        
    
}
function secondcheck(arr3){
    for(let j=0; j<4;j++){
        let count=0;
        for(let i=0; i<4;i++)
            if(arr3[i][j]==1){count++;};
            if(count!=1)
            return "Не является функцией второго множества в первое";
    }
    return "Является функцией второго множества в первое";
}